<template>
    <div mb-1rem>
        <el-form :inline="true" :model="fetchUserListCond" :rules="saveUserFormRules">
            <el-form-item label="用户名称">
                <el-input v-model="fetchUserListCond.name" placeholder="用户名称" style="width: 12rem" clearable />
            </el-form-item>
            <el-form-item label="用户ID">
                <el-input v-model="fetchUserListCond.id" placeholder="用户ID" style="width: 12rem;" clearable />
            </el-form-item>
            <el-form-item label="用户状态" style="width: 15rem;">
                <el-select v-model="fetchUserListCond.status" placeholder="用户状态" clearable>
                    <el-option label="正常" value="1" />
                    <el-option label="禁用" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item label="角色" style="width: 15rem;">
                <el-select v-model="fetchUserListCond.roleId" placeholder="角色" clearable>
                    <el-option :label="item.name" :value="item.id" v-for="item in roleList" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="query">查询</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div flex justify-left ml-2rem mb-2rem>
        <el-button type="primary" @click="handleAddUser">新增</el-button>
    </div>

    <div flex justify-center>
        <el-table :data="userList" style="width: 95%" v-loading="loading">
            <el-table-column property="id" label="ID" />
            <el-table-column property="name" label="名称" />
            <el-table-column label="状态">
                <template #default="scope">{{ getUserStatusName(scope.row.status) }}</template>
            </el-table-column>
            <el-table-column label="状态">
                <template #default="scope"><el-tag size="small" v-for="role in scope.row.roleNames" :key="role">{{ role }}</el-tag></template>
            </el-table-column>
            <el-table-column label="上次登录日期" property="lastLoginAt"></el-table-column>
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleEditUser(scope.row)">修改</el-button>
                    <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled"
                        icon-color="#626AEF" title="确定删除此角色?" @confirm="handleDeleteUser(scope.row.id)">
                        <template #reference>
                            <el-button link type="danger" size="small">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div flex justify-center mt-1rem>
        <el-pagination v-model:current-page="fetchUserListCond.page" v-model:page-size="fetchUserListCond.pageSize"
            :page-sizes="[20, 40, 80, 100]" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal"
            @size-change="query" @current-change="query" />
    </div>

    <el-dialog v-model="saveUserFormDialogVisible" :title="saveUserForm.formTitle" width="30%"
        :before-close="handleBeforeCloseSaveUserForm">
        <el-form ref="saveUserFormRef" :model="saveUserForm" status-icon :rules="saveUserFormRules" label-width="120px">
            <el-form-item label="用户名称" prop="name">
                <el-input v-model="saveUserForm.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户ID" prop="ID" v-show:="saveUserForm.id">
                <el-input v-model="saveUserForm.id" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="用户密码" prop="password">
                <el-input v-model="saveUserForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="状态">
                <el-radio-group v-model="statusStrOfsaveUserForm">
                    <el-radio value="1">正常</el-radio>
                    <el-radio value="2">禁止</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="saveUserForm.roleIds" placeholder="角色" multiple clearable>
                    <el-option :label="item.name" :value="item.id" v-for="item in roleList" />
                </el-select>
            </el-form-item>
            <el-button @click="handleBeforeCloseSaveUserForm">取消</el-button>
            <el-button type="primary" @click="handleResetSaveUserForm">重置</el-button>
            <el-button type="primary" @click="handleCommitSaveUserForm">确认</el-button>
        </el-form>
    </el-dialog>

</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { ElMessage, type FormInstance, type TableColumnCtx, type TableInstance, type TreeInstance } from 'element-plus'
import { DashboardService } from '~/rpc/proto/dashboard_api'
import { InfoFilled } from '@element-plus/icons-vue'
import api from '~/rpc/proto/dashboard'
import type { Role } from '~/types/roleConf'
import { encryptRSA } from '~/composables/encrypt'

// keep-alive 匹配的是组件的 name 选项，不是 route.name 本身,所以要定义一下组件name
defineOptions({
    name: '/rbac/user'
})

const saveUserFormDialogVisible = ref(false)

const saveUserFormRef = ref<FormInstance>()

const handleResetSaveUserForm = function () {
    resetSaveUserForm()
}

const handleAddUser = function () {
    saveUserFormDialogVisible.value = true
    resetSaveUserForm()
}

const handleDeleteUser = async function (id: number) {
    loading.value = true
    try {
        await DashboardService.DeleteUser({
            user_id: id
        })
        query()
    } catch (error) {
        ElMessage.error('删除失败')
        return
    }
    loading.value = false
    ElMessage.success('删除成功')
}

const handleEditUser = function (user: User) {
    saveUserForm.formTitle = "修改用户"
    saveUserForm.name = user.name
    saveUserForm.id = user.id
    saveUserForm.status = user.status
    saveUserForm.roleIds = user.roleIds
    saveUserFormDialogVisible.value = true
}

const handleCommitSaveUserForm = async function () {
    let validated: boolean | undefined = false
    try {
        validated = await saveUserFormRef.value?.validate()
    } catch (err) {
        ElMessage.error('表单验证失败')
        return
    }

    if (!validated) {
        return
    }

    loading.value = true
    try {
        let password = saveUserForm.password
        if (password.length > 0) {
            const getRSAPubKeyResp = await DashboardService.GetRSAPubKey({})
            password = encryptRSA(getRSAPubKeyResp.key as string, password)
        }

        if (!saveUserForm.id) {
            await DashboardService.AddUser({
                name: saveUserForm.name,
                password: password,
                status: saveUserForm.status,
                role_ids: saveUserForm.roleIds
            })
        } else {
            await DashboardService.UpdateUser({
                user_id: saveUserForm.id,
                name: saveUserForm.name,
                password: password,
                status: saveUserForm.status,
                role_ids: saveUserForm.roleIds
            })
        }
    } catch (error) {
        loading.value = false
        ElMessage.error('提交失败')
        return
    }

    query()

    saveUserFormDialogVisible.value = false
    ElMessage.success('提交成功')
}

const saveUserForm = reactive({
    formTitle: "添加用户",
    name: "",
    id: null as number | null,
    status: 1,
    password: "",
    roleIds: [] as number[]
})

const resetSaveUserForm = function () {
    saveUserForm.formTitle = "添加用户"
    saveUserForm.name = ""
    saveUserForm.password = ""
    saveUserForm.id = null
    saveUserForm.status = 1
    saveUserForm.roleIds = []
}

const statusStrOfsaveUserForm = computed({
    get: function () {
        return String(saveUserForm.status)
    },
    set: function (value) {
        return saveUserForm.status = Number(value)
    }
})

const saveUserFormRules = reactive({
    name: [
        { required: true, message: '请输入用户名称', trigger: 'blur' }
    ],
    status: [
        { required: true, message: '请选择用户状态', trigger: 'change' }
    ]
})

const handleBeforeCloseSaveUserForm = function () {
    resetSaveUserForm()
    saveUserFormDialogVisible.value = false
}

const loading = ref(false)

const pageTotal = ref(0)

enum statusEnum {
    NORMAL = 1,
    FORBIDDEN = 2
}

const statusMap = {
    [statusEnum.NORMAL]: "正常",
    [statusEnum.FORBIDDEN]: "禁止"
}

const getUserStatusName = function (status: number): string {
    if (status in statusEnum === false) {
        status = statusEnum.FORBIDDEN
    }
    return statusMap[status as statusEnum]
}

const fetchUserListCond = reactive({
    id: null as number | null,
    name: "",
    status: null as number | null,
    roleId: null as number | null,
    page: 1,
    pageSize: 20
})

interface User {
    id: number
    name: string
    status: number
    lastLoginAt: string
    roleIds: number[]
    roleNames: string[]
}

const userList = ref<User[]>([])

const fetchUserList = async function () {
    loading.value = true

    userList.value = []

    const listUserReq: api.dashboard.IListUserReq = {
        user_id: fetchUserListCond.id ? fetchUserListCond.id : 0,
        name: fetchUserListCond.name ? fetchUserListCond.name : "",
        status: fetchUserListCond.status ? fetchUserListCond.status : 0,
        role_id: fetchUserListCond.roleId ? fetchUserListCond.roleId : 0,
        page: {
            page: fetchUserListCond.page,
            page_size: fetchUserListCond.pageSize
        }
    }

    try {
        const listUserResp = await DashboardService.ListUser(listUserReq)
        pageTotal.value = listUserResp.total as number
        for (const item of listUserResp.list || []) {
            const roleIds: number[] = []
            const roleNames: string[] = []
            for (const role of item.roles || []) {
                roleIds.push(role.role_id)
                roleNames.push(role.name ?? "")
            }
            userList.value.push({
                id: item.user?.user_id,
                name: item.user?.username,
                status: item.user?.status,
                lastLoginAt: item.user?.last_login_at ? new Date(item.user?.last_login_at * 1000).toLocaleString() : "",
                roleIds: roleIds,
                roleNames: roleNames
            } as User)
        }
    } catch (error) {
        loading.value = false
        return
    }

    loading.value = false
}

const query = function () {
    fetchUserList()
    fetchRoleList()
}

const roleList = ref<Role[]>([])
const roleMap = ref(new Map<number, Role>())

const fetchRoleList = async function () {
    roleList.value = []
    roleMap.value = new Map<number, Role>()

    const listRoleConfResp = await DashboardService.ListRoleConf({
        name: fetchUserListCond.name,
        status: fetchUserListCond.status,
    })
    pageTotal.value = listRoleConfResp.total as number
    for (const item of listRoleConfResp.list || []) {
        const role = {
            id: item.role_id,
            name: item.name,
            status: item.status,
            isSuperAdmin: item.is_super_admin ? item.is_super_admin : false,
            permIds: item.perm_ids && item.perm_ids.length > 0 ? item.perm_ids : []
        }
        roleList.value.push(role as Role)
        roleMap.value.set(role.id, role as Role)
    }
}

onMounted(function () {
    query()
})


</script>

<style scoped></style>