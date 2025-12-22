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
                        icon-color="#626AEF" title="确定删除此菜单(如果有自菜单会被一起移除)?"
                        @confirm="handleDeleteSaveMenuForm(scope.row.id)">
                        <template #reference>
                            <el-button link type="danger" size="small">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
    </div>

    <el-dialog v-model="dialogVisible" title="增加菜单" width="30%" :before-close="handleBeforeCloseSaveMenuForm">
        <el-form ref="saveMenuFormRef" :model="saveMenuForm" status-icon :rules="saveMenuFormRules" label-width="120px">
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
                <el-select v-model="saveMenuForm.pid" placeholder="请选择父菜单" filterable clearable>
                    <el-option :label="menu.name" :value="menu.id" v-for="menu in menuList" style="display: none;" />
                    <el-tree :data="menuTree" node-key="id" :props="treeProps" highlight-current default-expand-all
                        @node-click="handleSelectParentMenuForSaveMenu" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleBeforeCloseSaveMenuForm">取消</el-button>
                <el-button type="primary" @click="handleResetSaveMenuForm">重置</el-button>
                <el-button type="primary" @click="handleCommitSaveMenuForm">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, computed, toRaw } from 'vue'
import { dashboard } from '~/rpc/proto/dashboard'
import { DashboardService } from '~/rpc/proto/dashboard_api'
import { ElMessage, FormInstance } from 'element-plus'
import { InfoFilled } from '@element-plus/icons-vue'
import { useMenuConfStore } from '~/stores/menuConf'
import { M } from 'vue-router/dist/router-CWoNjPRp.mjs'

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
    path_type: [
        { required: true, message: '菜单类型不能为空', trigger: 'change' },
    ],
})

const saveMenuForm = reactive({
    id: null as number | null,
    name: '',
    path: '',
    services: [] as RouteService[],
    pid: null as number | null,
    path_type: 0,
})

const resetSaveMenuForm = () => {
    saveMenuForm.id = null
    saveMenuForm.name = ''
    saveMenuForm.path = ''
    saveMenuForm.services = []
    saveMenuForm.pid = null
    saveMenuForm.path_type = 0
}

const saveMenuFormPathTypeStr = computed({
    get: () => {
        return String(saveMenuForm.path_type)
    },
    set: (val: string) => {
        saveMenuForm.path_type = Number(val)
    },
})

interface RouteService {
    service: string
    id: number
}

let routeServiceNextId: number = 0

const handleEditMenu = function (row: Menu) {
    saveMenuForm.id = row.id
    saveMenuForm.name = row.name
    saveMenuForm.path = row.path
    saveMenuForm.path_type = Number(Object.keys(menuTypeNameMap).find(key => menuTypeNameMap[Number(key) as 1 | 2 | 3] === row.pathTypeName)) || 3
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

const handleSelectParentMenuForSaveMenu = (node: any) => {
    saveMenuForm.pid = node.id
}

const handleAddMenuService = () => {
    saveMenuForm.services.push({
        service: '',
        id: ++routeServiceNextId,
    })
    console.log(saveMenuForm.services)
}

const removeServiceForReadySaveMenu = (index: number) => {
    for (let i = 0; i < saveMenuForm.services.length; i++) {
        if (i === index) {
            saveMenuForm.services.splice(i, 1)
            break
        }
    }
}

const handleDeleteSaveMenuForm = async function (id: number) {
    loading.value = true
    await DashboardService.DeleteMenuConf({
        perm_id: id,
    })
    ElMessage.success('删除菜单成功')
    fetchMenuList()
    resetSaveMenuForm()
}

const handleCancelResetMenu = () => {
    dialogVisible.value = false
    resetSaveMenuForm()
}

const handleResetSaveMenuForm = () => {
    saveMenuForm.name = ''
    saveMenuForm.path = ''
    saveMenuForm.services = []
    saveMenuForm.pid = null
}

const handleCommitSaveMenuForm = async () => {
    console.log(saveMenuForm)
    loading.value = true
    if (saveMenuForm.id) {
        await DashboardService.UpdateMenuConf({
            perm_id: saveMenuForm.id,
            name: saveMenuForm.name,
            path: saveMenuForm.path,
            pid: saveMenuForm.pid ? saveMenuForm.pid : 0,
            services: saveMenuForm.services.map((s) => s.service),
            path_type: saveMenuForm.path_type,
        })
        ElMessage.success('修改菜单成功')
        fetchMenuList()
        dialogVisible.value = false
        resetSaveMenuForm()
        return
    }

    await DashboardService.AddMenuConf({
        name: saveMenuForm.name,
        path: saveMenuForm.path,
        pid: saveMenuForm.pid ? saveMenuForm.pid : 0,
        services: saveMenuForm.services.map((s) => s.service),
        path_type: saveMenuForm.path_type,
    })
    ElMessage.success('新增菜单成功')
    fetchMenuList()
    dialogVisible.value = false
    resetSaveMenuForm()
}

const handleBeforeCloseSaveMenuForm = () => {
    dialogVisible.value = false
    resetSaveMenuForm()
}

interface Menu {
    id: number
    pid: number
    name: string
    path: string
    services: RouteService[]
    pathTypeName: string
    children: Menu[]
}

let menuTree = ref<Menu[]>([])

interface MenuSimpleInfo {
    id: number
    name: string
}

let menuList = ref<MenuSimpleInfo[]>([])

enum menuType {
    PAGE = '1',
    BUTTON = '2',
    GUIDE = '3',
    OTHER = '4',
}

const menuTypeNameMap = {
    [menuType.PAGE]: '页面',
    [menuType.BUTTON]: '按钮',
    [menuType.GUIDE]: '导航',
    [menuType.OTHER]: '其他',
}

const getMenuTypeName = function (menuType: number): string {
    let pathType = menuType.toString()
    if (pathType in menuTypeNameMap === false) {
        pathType = '4'
    }
    return menuTypeNameMap[pathType as menuType] || '未知'
}

onMounted(() => {
    const menuConfStore = useMenuConfStore()
    const menuConfState = menuConfStore.menuConfState
    if (menuConfState) {
        menuTree.value = menuConfState.menuTree
        menuList.value = menuConfState.menuSimpleInfoList
        loading.value = false
        return
    }
    fetchMenuList()
})

async function fetchMenuList() {
    loading.value = true

    menuTree.value = []
    menuList.value = []

    let listMenuResp
    try {
        listMenuResp = await DashboardService.ListMenuConf({})
    } catch (error) {
        loading.value = false
        return
    }

    const menuMap = new Map<number, Menu>()
    const subMenuList: dashboard.ListMenuConfResp.IMenuConf[] = []
    for (const item of listMenuResp.list || []) {
        const services: RouteService[] = []
        for (const service of item.services || []) {
            services.push({
                service: service,
                id: ++routeServiceNextId,
            })
        }
        const menu = {
            id: item.perm_id,
            pid: item.pid,
            name: item.name,
            path: item.path,
            pathTypeName: getMenuTypeName(item.path_type || 3),
            services: services,
        } as Menu

        menuList.value.push({
            id: item.perm_id,
            name: item.name ? item.name : '',
        })

        menuMap.set(item.perm_id, menu)

        if (!item.pid) {
            menuTree.value.push(menu)
            continue
        }

        subMenuList.push(item)
    }

    for (const item of subMenuList) {
        const parentMenu = menuMap.get(item.pid)
        if (parentMenu) {
            if (!parentMenu.children) {
                parentMenu.children = []
            }

            const subMenu = menuMap.get(item.perm_id)
            if (subMenu) {
                parentMenu.children.push(subMenu)
            }
        }
    }

    useMenuConfStore().setMenuConf({
        menuTree: toRaw(menuTree.value),
        menuSimpleInfoList: toRaw(menuList.value),
    })

    loading.value = false
}

const treeProps = reactive({
    checkStrictly: false,
    label: 'name',
})
</script>

<style scoped></style>