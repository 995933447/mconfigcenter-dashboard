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
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div flex justify-left ml-2rem mb-2rem>
        <el-button type="primary">新增</el-button>
    </div>

    <div flex justify-center>
        <el-table :data="roleList" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column property="role_id" label="ID" width="120" />
            <el-table-column property="name" label="名称" width="120" />
            <el-table-column label="状态" width="120">
                <template #default="scope">{{ getRoleStatusName(scope.row.status) }}</template>
            </el-table-column>
            <el-table-column label="是否超级管理员" width="120">
                <template #default="scope">{{ getIsSuperAdminName(scope.row.isSuperAdmin) }}</template>
            </el-table-column>
            、 <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                        Edit
                    </el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                        Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <div flex justify-left ml-1rem mt-1rem>
        <el-button @click="clearFilter" type="danger">批量删除</el-button>
    </div>

    <div flex justify-center mt-1rem>
        <el-pagination background layout="prev, pager, next" :total="pageTotal" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { TableColumnCtx, TableInstance } from 'element-plus'
import { DashboardService } from '~/rpc/proto/dashboard_api'
import api from '~/rpc/proto/dashboard'

const loading = ref(false)
const pageTotal = ref(0)

interface Role {
    roleId: number
    name: string
    status: number
    isSuperAdmin: boolean
    permIds: number[]
}

const roleList = ref<Role[]>([])

const fetchRoleListCond = reactive({
    name: "",
    status: null as number|null,
    filterSuperAdminStatus: null as number|null
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

    try {
        const listRoleConfReq: api.dashboard.IListRoleConfReq = {
            name: fetchRoleListCond.name,
            status: fetchRoleListCond.status,
        }
        switch (fetchRoleListCond.filterSuperAdminStatus) {
            case 1:
                listRoleConfReq.only_super_admin = true
            case 2:
                listRoleConfReq.without_super_admin = true
        }
        const listRoleConfResp = await DashboardService.ListRoleConf(listRoleConfReq)
        pageTotal.value = listRoleConfResp.total as number
        for (const item of listRoleConfResp.list || []) {
            roleList.value.push({
                roleId: item.role_id,
                name: item.name,
                status: item.status,
                isSuperAdmin: item.is_super_admin ? item.is_super_admin : false,
                permIds: item.perm_ids && item.perm_ids.length > 0 ? item.perm_ids : []
            } as Role)
        }
    } catch (error) {
        loading.value = false
        return
    }

    loading.value = false
}

const onMounted = function() {
    fetchRoleList()
}

const tableRef = ref<TableInstance>()

const clearFilter = () => {
    tableRef.value!.clearFilter()
}

const handleEdit = (index: number, row: Role) => {
    console.log(index, row)
}

const handleDelete = (index: number, row: Role) => {
    console.log(index, row)
}

const onSubmit = () => {
    console.log('submit!')
}

</script>

<style scoped></style>