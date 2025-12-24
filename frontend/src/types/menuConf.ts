export enum MenuType {
    PAGE = 1,
    BUTTON = 2,
    GUIDE = 3,
    OTHER = 4,
}

export interface Menu {
    id: number
    pid: number
    name: string
    path: string
    services: RouteService[]
    pathType: number
    pathTypeName: string
    children: Menu[]
}

export interface RouteService {
    service: string
    id: number
}

export interface MenuSimpleInfo {
    id: number
    name: string
}
