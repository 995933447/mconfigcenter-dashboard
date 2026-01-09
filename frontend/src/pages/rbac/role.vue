<template>
    <div mb-1rem>
        <el-form :inline="true" :model="fetchRoleListCond">
            <el-form-item label="角色名称">
                <el-input v-model="fetchRoleListCond.name" placeholder="角色名称" clearable />
            </el-form-item>
            <el-form-item label="角色状态" style="width: 15rem;">
                <el-select v-model="fetchRoleListCond.status" placeholder="角色状态" clearable>
                    <el-option label="正常" value="1" />
                    <el-option label="禁用" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item label="是否超管" style="width: 15rem;">
                <el-select v-model="fetchRoleListCond.filterSuperAdminStatus" placeholder="超级管理员状态" clearable>
                    <el-option label="仅超级管理员" value="1" />
                    <el-option label="非超级管理员" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="fetchRoleList">查询</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div flex justify-left ml-2rem mb-2rem>
        <el-button type="primary" @click="handleAddRole" v-if="isCurrentPageButtonAccessable('addRole')">新增</el-button>
    </div>

    <div flex justify-center>
        <el-table :data="roleList" style="width: 95%" v-loading="loading">
            <el-table-column property="id" label="ID" />
            <el-table-column property="name" label="名称" />
            <el-table-column label="状态" width="120">
                <template #default="scope">{{ getRoleStatusName(scope.row.status) }}</template>
            </el-table-column>
            <el-table-column label="是否超级管理员">
                <template #default="scope">{{ getIsSuperAdminName(scope.row.isSuperAdmin) }}</template>
            </el-table-column>
            、 <el-table-column label="操作">
                <template #default="scope">
                    <el-button link type="primary" size="small" v-if="isCurrentPageButtonAccessable('editRole')" @click="handleEditRole(scope.row)">修改</el-button>
                    <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled" v-if="isCurrentPageButtonAccessable('deleteRole')"
                        icon-color="#626AEF" title="确定删除此角色?" @confirm="handleDeleteRole(scope.row.id)">
                        <template #reference>
                            <el-button link type="danger" size="small">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div flex justify-center mt-1rem>
        <el-pagination v-model:current-page="fetchRoleListCond.page" v-model:page-size="fetchRoleListCond.pageSize"
            :page-sizes="[20, 40, 80, 100]" layout="total, sizes, prev, pager, next, jumper" :total="pageTotal" @size-change="fetchRoleList"
            @current-change="fetchRoleList"/>
    </div>

    <el-dialog v-model="saveRoleFormDialogVisible" :title="saveRoleForm.formTitle" width="30%"
        :before-close="handleBeforeCloseSaveRoleForm">
        <el-form ref="saveRoleFormRef" :model="saveRoleForm" status-icon :rules="saveRoleFormRules" label-width="120px">
            <el-form-item label="角色名称" prop="name">
                <el-input v-model="saveRoleForm.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="角色id" prop="ID" v-show:="saveRoleForm.id">
                <el-input v-model="saveRoleForm.id" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="是否超级管理员">
                <el-radio-group v-model="isSuperAdminStrOfSaveRoleForm">
                    <el-radio value="true">是</el-radio>
                    <el-radio value="false">否</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="状态">
                <el-radio-group v-model="statusStrOfSaveRoleForm">
                    <el-radio value="1">正常</el-radio>
                    <el-radio value="2">禁止</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单权限">
                <el-button type="primary" @click="handleSetRoleMenu">设置</el-button>
            </el-form-item>
            <el-button @click="handleBeforeCloseSaveRoleForm">取消</el-button>
            <el-button type="primary" @click="handleResetSaveRoleForm">重置</el-button>
            <el-button type="primary" @click="handleCommitSaveRoleForm">确认</el-button>
        </el-form>
    </el-dialog>

    <el-dialog v-model="setRoleMenuDialogVisible" width="30%" :before-close="handleBeforeCloseMenuTreeCheckBoxDialog">
        <el-tree style="max-width: 600px" :data="menuTree" show-checkbox node-key="id" :props="menuTreeProps"
            ref="menuTreeCheckDialogRef" :default-expand-all="true" @check="handleMenuTreeCheck" v-loading="loading"
            :default-checked-keys="saveRoleForm.permIds" />
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="refreshMenuTree">刷新菜单</el-button>
                <el-button type="primary" @click="handleConfirmMenuTreeCheck">确认</el-button>
            </span>
        </template>
    </el-dialog>

</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { ElMessage, type FormInstance, type TableColumnCtx, type TableInstance, type TreeInstance } from 'element-plus'
import { DashboardService } from '~/rpc/proto/dashboard_api'
import { InfoFilled } from '@element-plus/icons-vue'
import api from '~/rpc/proto/dashboard'
import { getOrFetchMenuConfs, fetchMenuConfs } from '~/composables/menuConf'
import type { Menu } from '~/types/menuConf'
import type { Role } from '~/types/roleConf'
import { isCurrentPageButtonAccessable } from '~/composables/auth'

// keep-alive 匹配的是组件的 name 选项，不是 route.name 本身,所以要定义一下组件name
defineOptions({
    name: '/rbac/role'
})

const setRoleMenuDialogVisible = ref(false)

const menuTreeCheckDialogRef = ref<TreeInstance>()

const menuTreeProps = {
    children: 'children',
    label: 'name',
}

let checkedMenuTreeIds: number[] = []

const handleMenuTreeCheck = function (menu: Menu, checked: any) {
    checkedMenuTreeIds = []
    for (const checkedKey of checked.checkedKeys) {
        checkedMenuTreeIds.push(Number(checkedKey))
    }
}

const handleConfirmMenuTreeCheck = function () {
    saveRoleForm.permIds = checkedMenuTreeIds
    setRoleMenuDialogVisible.value = false
}

const handleBeforeCloseMenuTreeCheckBoxDialog = function () {
    checkedMenuTreeIds = saveRoleForm.permIds
    menuTreeCheckDialogRef.value?.setCheckedKeys(checkedMenuTreeIds)
    setRoleMenuDialogVisible.value = false
}

const menuTree = ref<Menu[]>([])

const handleSetRoleMenu = async function () {
    setRoleMenuDialogVisible.value = true

    const menu = await getOrFetchMenuConfs(() => {
        loading.value = true
    }, () => {
        loading.value = false
    })

    if (!menu) {
        return
    }

    menuTree.value = menu.menuTree
    loading.value = false
}

const refreshMenuTree = async function () {
    loading.value = true

    const menus = await fetchMenuConfs(() => {
        loading.value = false
    })

    if (!menus) {
        return
    }

    menuTree.value = menus.menuTree

    loading.value = false
}

const saveRoleFormDialogVisible = ref(false)

const saveRoleFormRef = ref<FormInstance>()

const handleResetSaveRoleForm = function () {
    resetSaveRoleForm()
}

const handleAddRole = function () {
    saveRoleFormDialogVisible.value = true
    resetSaveRoleForm()
}

const handleDeleteRole = async function (id: number) {
    loading.value = true
    try {
        await DashboardService.DeleteRoleConf({
            role_id: id
        })
        fetchRoleList()
    } catch (error) {
        ElMessage.error('删除失败')
        return
    }
    loading.value = false
    ElMessage.success('删除成功')
}

const handleEditRole = function (role: Role) {
    saveRoleForm.formTitle = "修改角色"
    saveRoleForm.name = role.name
    saveRoleForm.id = role.id
    saveRoleForm.status = role.status
    saveRoleForm.isSuperAdmin = role.isSuperAdmin
    saveRoleForm.permIds = role.permIds
    saveRoleFormDialogVisible.value = true
}

const handleCommitSaveRoleForm = async function () {
    let validated: boolean | undefined = false
    try {
        validated = await saveRoleFormRef.value?.validate()
    } catch (err) {
        ElMessage.error('表单验证失败')
        return
    }

    if (!validated) {
        return
    }

    loading.value = true
    try {
        if (!saveRoleForm.id) {
            await DashboardService.AddRoleConf({
                name: saveRoleForm.name,
                perm_ids: saveRoleForm.permIds,
                status: saveRoleForm.status,
                is_super_admin: saveRoleForm.isSuperAdmin,
            })
        } else {
            await DashboardService.UpdateRoleConf({
                role_id: saveRoleForm.id,
                name: saveRoleForm.name,
                perm_ids: saveRoleForm.permIds,
                status: saveRoleForm.status,
                is_super_admin: saveRoleForm.isSuperAdmin,
            })
        }

        fetchRoleList()
    } catch (error) {
        loading.value = false
        ElMessage.error('提交失败')
        return
    }

    saveRoleFormDialogVisible.value = false
    ElMessage.success('提交成功')
}

const saveRoleForm = reactive({
    formTitle: "添加角色",
    name: "",
    id: null as number | null,
    status: 1,
    isSuperAdmin: false,
    permIds: [] as number[]
})

const resetSaveRoleForm = function () {
    saveRoleForm.formTitle = "添加角色"
    saveRoleForm.name = ""
    saveRoleForm.id = null
    saveRoleForm.status = 1
    saveRoleForm.isSuperAdmin = false
    saveRoleForm.permIds = []
    checkedMenuTreeIds = []
    saveRoleFormRef.value?.resetFields()
    resetMenuTreeCheckDialog()
}

const resetMenuTreeCheckDialog = function () {
    menuTreeCheckDialogRef.value?.setCheckedKeys([])
}

const statusStrOfSaveRoleForm = computed({
    get: function () {
        return String(saveRoleForm.status)
    },
    set: function (value) {
        return saveRoleForm.status = Number(value)
    }
})

const isSuperAdminStrOfSaveRoleForm = computed({
    get: function () {
        return String(saveRoleForm.isSuperAdmin)
    },
    set: function (value) {
        saveRoleForm.isSuperAdmin = value === 'true'
    }
})

const saveRoleFormRules = reactive({
    name: [
        { required: true, message: '请输入角色名称', trigger: 'blur' }
    ],
    status: [
        { required: true, message: '请选择角色状态', trigger: 'change' }
    ],
    isSuperAdmin: [
        { required: true, message: '请选择是否超级管理员', trigger: 'change' }
    ]
})

const handleBeforeCloseSaveRoleForm = function () {
    resetSaveRoleForm()
    saveRoleFormDialogVisible.value = false
}

const loading = ref(false)

const pageTotal = ref(0)

const roleList = ref<Role[]>([])

const fetchRoleListCond = reactive({
    name: "",
    status: null as number | null,
    filterSuperAdminStatus: null as number | null,
    page: 1,
    pageSize: 20
})

enum statusEnum {
    NORMAL = 1,
    FORBIDDEN = 2
}

const statusMap = {
    [statusEnum.NORMAL]: "正常",
    [statusEnum.FORBIDDEN]: "禁止"
}

const getRoleStatusName = function (status: number): string {
    if (status in statusEnum === false) {
        status = statusEnum.FORBIDDEN
    }
    return statusMap[status as statusEnum]
}

const getIsSuperAdminName = function (isSuperAdmin: boolean): string {
    if (isSuperAdmin) {
        return '是'
    }
    return '否'
}

const fetchRoleList = async function () {
    loading.value = true
    roleList.value = []

    try {
        const listRoleConfReq: api.dashboard.IListRoleConfReq = {
            name: fetchRoleListCond.name,
            status: fetchRoleListCond.status,
        }
        switch (Number(fetchRoleListCond.filterSuperAdminStatus)) {
            case 1:
                listRoleConfReq.only_super_admin = true
                break
            case 2:
                listRoleConfReq.without_super_admin = true
                break
        }
        listRoleConfReq.page = {
            page_size: fetchRoleListCond.pageSize,
            page: fetchRoleListCond.page,
        }
        const listRoleConfResp = await DashboardService.ListRoleConf(listRoleConfReq)
        pageTotal.value = listRoleConfResp.total as number
        for (const item of listRoleConfResp.list || []) {
            roleList.value.push({
                id: item.role_id,
                name: item.name,
                status: item.status,
                isSuperAdmin: item.is_super_admin ? item.is_super_admin : false,
                permIds: item.perm_ids && item.perm_ids.length > 0 ? item.perm_ids : [],
            } as Role)
        }
    } catch (error) {
        loading.value = false
        return
    }

    loading.value = false
}

onMounted(function () {
    fetchRoleList()
})

</script>

<style scoped></style>