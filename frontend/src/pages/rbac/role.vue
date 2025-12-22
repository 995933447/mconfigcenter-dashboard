<template>
    <div mb-1rem>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="Approved by">
                <el-input v-model="formInline.user" placeholder="Approved by" clearable />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
        </el-form>
    </div>

    <div flex justify-center>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="Date" width="120">
                <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="name" label="Name" width="120" />
            <el-table-column property="address" label="use show-overflow-tooltip" width="240" show-overflow-tooltip />
            <el-table-column property="address" label="address" />
            <el-table-column label="Operations">
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
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TableColumnCtx, TableInstance } from 'element-plus'


const tableRef = ref<TableInstance>()

const resetDateFilter = () => {
  tableRef.value!.clearFilter(['date'])
}

const clearFilter = () => {
  tableRef.value!.clearFilter()
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}

const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const formInline = reactive({
    user: '',
    region: '',
    date: '',
})

const onSubmit = () => {
    console.log('submit!')
}

interface User {
    id: number
    date: string
    name: string
    address: string
    hasChildren?: boolean
    children?: User[]
}

const selectable = (row: User) => ![1, 31].includes(row.id)

const treeProps = reactive({
    checkStrictly: false,
})

const load = (
    row: User,
    treeNode: unknown,
    resolve: (data: User[]) => void
) => {
    setTimeout(() => {
        resolve([
            {
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ])
    }, 1000)
}

const tableData: User[] = [
    {
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
        children: [
            {
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ],
    },
    {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style scoped></style>