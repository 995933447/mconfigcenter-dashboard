import { DashboardService } from "~/rpc/proto/dashboard_api"
import { dashboard } from "~/rpc/proto/dashboard"
import { useMenuConfStore } from "~/stores/menuConf"
import { MenuType, Menu, MenuSimpleInfo, RouteService } from "~/types/menuConf"
import { onLoadingFunc, handleErrFunc } from "~/types/common"

let routeServiceNextId: number = 0

export function genNextRouteServiceId(): number {
    const id = ++routeServiceNextId
    return id
}

export interface fetchMenusResp {
    menuTree: Menu[]
    menuList: MenuSimpleInfo[]
    menuMap: Map<number, Menu>
}

export async function getOrFetchMenuConfs(onLoading: onLoadingFunc, handleErr: handleErrFunc|null): Promise<fetchMenusResp|null> {
    const menuConfStore = useMenuConfStore()
    const menuConfState = menuConfStore.menuConfState
    if (menuConfState) {
        return {
            menuList: menuConfState.menuSimpleInfoList,
            menuTree: menuConfState.menuTree,
            menuMap: menuConfState.menuMap,
        }
    }

    onLoading()

    const fetchMenusResp = await fetchMenuConfs(handleErr)
    if (!fetchMenusResp) {
        return null
    }

    menuConfStore.setMenuConf({
        menuTree: fetchMenusResp.menuTree,
        menuSimpleInfoList: fetchMenusResp.menuList,
        menuMap: fetchMenusResp.menuMap,
    })

    return fetchMenusResp
}

export async function fetchMenuConfs(handleErr: handleErrFunc|null): Promise<fetchMenusResp|null> {
    const menuTree: Menu[] = []
    const menuList: MenuSimpleInfo[] = []

    let listMenuResp
    try {
        listMenuResp = await DashboardService.ListMenuConf({})
    } catch (error) {
       if (handleErr) {
            handleErr(error)
       }
       return null
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
            pathType: item.path_type? item.path_type: MenuType.OTHER,
            pathTypeName: getPathTypeName(item.path_type? item.path_type: MenuType.OTHER),
            services: services,
        } as Menu

        menuList.push({
            id: item.perm_id,
            name: item.name ? item.name : '',
        })

        menuMap.set(item.perm_id, menu)

        if (!item.pid) {
            menuTree.push(menu)
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
        menuTree: menuTree,
        menuSimpleInfoList: menuList,
        menuMap: menuMap,
    })

    return {
        menuTree: menuTree,
        menuList: menuList,
        menuMap: menuMap,
    }
}

const menuTypeNameMap = {
    [MenuType.PAGE]: '页面',
    [MenuType.BUTTON]: '按钮',
    [MenuType.GUIDE]: '导航',
    [MenuType.OTHER]: '其他',
}

const getPathTypeName = function (pathType: number): string {
    if (pathType in menuTypeNameMap === false) {
        pathType = MenuType.OTHER
    }
    return menuTypeNameMap[pathType as MenuType] || '未知'
}

export function getPathTypeByName(pathTypeName: string): number {
    for (const [key, value] of Object.entries(menuTypeNameMap)) {
        if (value === pathTypeName) {
            return Number(key)
        }
    }
    return MenuType.OTHER
}