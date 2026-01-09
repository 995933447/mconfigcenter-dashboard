import { useRoute } from 'vue-router'

export enum localStorageKeyName {
    UserAuthState = 'user_auth_state',
}

export class UserAuthState {
    token: string;
    expireAt: number; // unix timestamp in seconds
    accessableMenuPaths: string[]|undefined;
    isSuperAdmin: boolean|undefined;
    
    constructor(token: string, expireAt: number) {
        this.token = token;
        this.expireAt = expireAt;
    }

    isExpired(): boolean {
        const timestampSec = Math.floor(Date.now() / 1000)
        if (this.expireAt && this.expireAt > timestampSec) { 
            return false
        }
        return true
    }

    isMenuPathAccessable(menuPath: string): boolean {
        if (this.isSuperAdmin) {
            return true
        }
        if (this.accessableMenuPaths?.includes(menuPath)) {
            return true
        }
        return false
    }
}

export function isLogin(): boolean {
    const authState = getAuthState()

    if (!authState) {
        return false
    }

    if (authState.isExpired()) { 
        return false
    }
    
    return true
}

export function getAuthState(): UserAuthState | null {
    const authStateStr = localStorage.getItem(localStorageKeyName.UserAuthState)
    if (!authStateStr) {
        return null
    }

    const authStateData = JSON.parse(authStateStr)
    
    if (!authStateData) {
        return null
    }

    const authState = new UserAuthState(authStateData.token, authStateData.expireAt)
    authState.accessableMenuPaths = authStateData.accessableMenuPaths
    authState.isSuperAdmin = authStateData.isSuperAdmin
    return authState
}

export function saveAuthState(authState: UserAuthState) {
    localStorage.setItem(localStorageKeyName.UserAuthState, JSON.stringify(authState))
}

export function clearAuthState() {
    localStorage.removeItem(localStorageKeyName.UserAuthState)
}

export function getValidAuthState(): UserAuthState | null {
    const authState = getAuthState()
    if (!authState) {
        return null
    }
    if (authState.isExpired()) {
        return null
    }
    return authState
}

export function isMenuPathAccessable(menuPath: string): boolean {
    const authState = getValidAuthState()
    if (!authState) {
        return false
    }
    return authState.isMenuPathAccessable(menuPath) 
}

export function isCurrentPageButtonAccessable(buttonAnchor: string): boolean {
    const path = useRoute().path+"#"+buttonAnchor
    return isMenuPathAccessable(path)
}