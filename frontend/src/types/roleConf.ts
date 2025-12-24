export interface Role {
    id: number
    name: string
    status: number
    isSuperAdmin: boolean
    permIds: number[]
}
