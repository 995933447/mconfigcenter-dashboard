<template>
    <div flex justify-left ml-2rem mb-2rem>
        <el-button @click="dialogVisible = true" type="primary">新增</el-button>
        <el-button @click="fetchMenuList" type="primary">刷新</el-button>
    </div>

    <div flex justify-center v-loading="loading">
        <el-table :data="menuTree" :tree-props="treeProps" row-key="id" default-expand-all style="width: 95%;">
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="path" label="菜单标识" />
            <el-table-column prop="pathTypeName" label="菜单类型" />
            <el-table-column fixed="right" label="操作" min-width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleEditMenu(scope.row)">修改</el-button>
                    <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" :icon="InfoFilled"
                        icon-color="#626AEF" title="确定删除此菜单(如果有自菜单会被一起移除)?" @confirm="handleDeleteMenu(scope.row.id)">
                        <template #reference>
                            <el-button link type="danger" size="small">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <el-dialog v-model="dialogVisible" :title="saveMenuForm.formTitle" width="30%"
        :before-close="handleBeforeCloseSaveMenuForm">
        <el-form ref="saveMenuFormRef" :model="saveMenuForm" status-icon :rules="saveMenuFormRules" label-width="120px"
            v-loading="loading">
            <el-form-item label="菜单名称" prop="name">
                <el-input v-model="saveMenuForm.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="菜单id" prop="ID" v-show:="saveMenuForm.id">
                <el-input v-model="saveMenuForm.id" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="菜单标识" prop="path">
                <el-input v-model="saveMenuForm.path" autocomplete="off" />
            </el-form-item>
            <el-form-item label="菜单类型">
                <el-radio-group v-model="saveMenuFormPathTypeStr">
                    <el-radio value="1">页面</el-radio>
                    <el-radio value="2">按钮</el-radio>
                    <el-radio value="3">导航</el-radio>
                    <el-radio value="4">其他</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="可访问接口路径">
                <el-form-item v-for="(service, index) in saveMenuForm.services" :key="service.id"
                    :prop="'services.' + index + '.service'" :rules="{
                        required: true,
                        message: 'service can not be empty',
                        trigger: 'blur',
                    }" style="margin-bottom: 1rem;">
                    <el-input v-model="service.service" autocomplete="off" />
                    <el-button class="mt-2" @click.prevent="removeServiceForReadySaveMenu(index)">
                        删除
                    </el-button>
                </el-form-item>
                <el-button @click="handleAddMenuService">新增可访问接口</el-button>
            </el-form-item>
            <el-form-item label="父菜单">
                <el-select v-model="saveMenuForm.pid" placeholder="请选择父菜单" filterable clearable
                    :filter-method="onSearchParsentMenuSelectOption" ref="parentMenuOptionSelectRef">
                    <el-option :label="menu.name" :value="menu.id" v-for="menu in menuList" style="display: none;" />
                    <el-tree :data="parentMenuOptionTree" node-key="id" :props="treeProps" highlight-current
                        default-expand-all @node-click="handleSelectParentMenuForSaveMenu"
                        :current-node-key="saveMenuForm.pid ?? undefined" />
                </el-select>
            </el-form-item>
            <el-button @click="handleBeforeCloseSaveMenuForm">取消</el-button>
            <el-button type="primary" @click="handleResetSaveMenuForm">重置</el-button>
            <el-button type="primary" @click="handleCommitSaveMenuForm">确认</el-button>
        </el-form>
    </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed } from 'vue'
import { DashboardService } from '~/rpc/proto/dashboard_api'
import { ElMessage, FormInstance } from 'element-plus'
import { InfoFilled } from '@element-plus/icons-vue'
import { getPathTypeByName, fetchMenuConfs, getOrFetchMenuConfs, genNextRouteServiceId } from '~/composables/menuConf'
import type { Menu, RouteService, MenuSimpleInfo } from '~/types/menuConf'

// keep-alive 匹配的是组件的 name 选项，不是 route.name 本身,所以要定义一下组件name
defineOptions({
    name: '/rbac/menu'
})

const loading = ref(false)

const dialogVisible = ref(false)

const saveMenuFormRef = ref<FormInstance>()

const saveMenuFormRules = reactive({
    name: [
        { required: true, message: '菜单名称不能为空', trigger: 'blur' },
    ],
    path: [
        { required: true, message: '菜单标识不能为空', trigger: 'blur' },
    ],
    pathType: [
        { required: true, message: '菜单类型不能为空', trigger: 'change' },
    ],
})

const saveMenuForm = reactive({
    formTitle: '增加菜单',
    id: null as number | null,
    name: '',
    path: '',
    services: [] as RouteService[],
    pid: null as number | null,
    pathType: 0,
})

const resetSaveMenuForm = () => {
    saveMenuForm.id = null
    saveMenuForm.name = ''
    saveMenuForm.path = ''
    saveMenuForm.services = []
    saveMenuForm.pid = null
    saveMenuForm.pathType = 0
    saveMenuForm.formTitle = '增加菜单'
}

const saveMenuFormPathTypeStr = computed({
    get: () => {
        return String(saveMenuForm.pathType)
    },
    set: (val: string) => {
        saveMenuForm.pathType = Number(val)
    },
})

const parentMenuOptionTree = ref<Menu[]>([])

const onSearchParsentMenuSelectOption = function (query: string) {
    if (!query) {
        parentMenuOptionTree.value = menuTree.value
        return
    }

    parentMenuOptionTree.value = []
    const hitQueryKeywardMenus: Menu[] = []
    menuMap.forEach((menu) => {
        if (menu.name.includes(query)) {
            hitQueryKeywardMenus.push(menu)
            return true
        }
    })

    const hitQueryKeywardTopMenus: Map<number, Menu> = new Map()
    for (const menu of hitQueryKeywardMenus) {
        if (!menu.pid) {
            parentMenuOptionTree.value.push(menu)
            hitQueryKeywardTopMenus.set(menu.id, menu)
            continue
        }

        let parentMenu = menuMap.get(menu.pid)
        if (!parentMenu) {
            continue
        }

        while (parentMenu.pid > 0) {
            parentMenu = menuMap.get(parentMenu.pid)
            if (!parentMenu) {
                break
            }
        }

        if (parentMenu && !hitQueryKeywardTopMenus.has(parentMenu.id)) {
            parentMenuOptionTree.value.push(parentMenu)
            hitQueryKeywardTopMenus.set(parentMenu.id, parentMenu)
        }
    }
}

const handleEditMenu = function (row: Menu) {
    saveMenuForm.formTitle = '编辑菜单'
    saveMenuForm.id = row.id
    saveMenuForm.name = row.name
    saveMenuForm.path = row.path
    saveMenuForm.pathType = getPathTypeByName(row.pathTypeName)
    saveMenuForm.services = []
    for (const service of row.services) {
        saveMenuForm.services.push({
            service: service.service,
            id: service.id,
        })
    }
    saveMenuForm.pid = row.pid ? row.pid : null
    console.log(saveMenuForm)
    dialogVisible.value = true
}

const parentMenuOptionSelectRef = ref<HTMLSelectElement>()

const handleSelectParentMenuForSaveMenu = (node: Menu) => {
    saveMenuForm.pid = node.id
}

const handleAddMenuService = () => {
    saveMenuForm.services.push({
        service: '',
        id: genNextRouteServiceId(),
    })
}

const removeServiceForReadySaveMenu = (index: number) => {
    for (let i = 0; i < saveMenuForm.services.length; i++) {
        if (i === index) {
            saveMenuForm.services.splice(i, 1)
            break
        }
    }
}

const handleDeleteMenu = async function (id: number) {
    loading.value = true
    await DashboardService.DeleteMenuConf({
        perm_id: id,
    })
    ElMessage.success('删除菜单成功')
    fetchMenuList()
    resetSaveMenuForm()
}

const handleResetSaveMenuForm = () => {
    saveMenuForm.name = ''
    saveMenuForm.path = ''
    saveMenuForm.services = []
    saveMenuForm.pid = null
}

const handleCommitSaveMenuForm = async () => {
    let validated: boolean | undefined = false
    try {
        validated = await saveMenuFormRef.value?.validate()
    } catch (err) {
        ElMessage.error('表单验证失败')
        return
    }

    if (!validated) {
        return
    }

    loading.value = true
    if (saveMenuForm.id) {
        try {
            await DashboardService.UpdateMenuConf({
                perm_id: saveMenuForm.id,
                name: saveMenuForm.name,
                path: saveMenuForm.path,
                pid: saveMenuForm.pid ? saveMenuForm.pid : 0,
                services: saveMenuForm.services.map((s) => s.service),
                path_type: saveMenuForm.pathType,
            })
            ElMessage.success('修改菜单成功')
            fetchMenuList()
            dialogVisible.value = false
            resetSaveMenuForm()
        } catch (error) {
            ElMessage.error('修改菜单失败')
            loading.value = false
        }
        return
    }

    try {
        await DashboardService.AddMenuConf({
            name: saveMenuForm.name,
            path: saveMenuForm.path,
            pid: saveMenuForm.pid ? saveMenuForm.pid : 0,
            services: saveMenuForm.services.map((s) => s.service),
            path_type: saveMenuForm.pathType,
        })
        ElMessage.success('新增菜单成功')
        fetchMenuList()
        dialogVisible.value = false
        resetSaveMenuForm()
    } catch (error) {
        ElMessage.error('新增菜单失败')
        loading.value = false
    }
}

const handleBeforeCloseSaveMenuForm = () => {
    dialogVisible.value = false
    // 清空表单的校验状态
    saveMenuFormRef.value?.resetFields();
    resetSaveMenuForm()
}

let menuTree = ref<Menu[]>([])

let menuList = ref<MenuSimpleInfo[]>([])

let menuMap = new Map<number, Menu>()

onMounted(async () => {
    const menus = await getOrFetchMenuConfs(function () {
        loading.value = true
    }, function () {
        loading.value = false
    })
    if (!menus) {
        return
    }

    menuTree.value = menus.menuTree
    menuList.value = menus.menuList
    menuMap = menus.menuMap
    loading.value = false
})

async function fetchMenuList() {
    loading.value = true

    menuTree.value = []
    menuList.value = []
    menuMap.clear()

    const fetchMenusResp = await fetchMenuConfs(function () {
        loading.value = false
    })

    if (!fetchMenusResp) {
        return
    }

    menuTree.value = fetchMenusResp.menuTree
    menuList.value = fetchMenusResp.menuList
    menuMap = fetchMenusResp.menuMap

    loading.value = false
}

const treeProps = reactive({
    checkStrictly: false,
    label: 'name',
})
</script>

<style scoped></style>