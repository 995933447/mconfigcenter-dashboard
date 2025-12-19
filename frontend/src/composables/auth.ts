export enum localStorageKeyName {
    UserAuthState = 'user_auth_state',
}

export class UserAuthState {
    token: string| undefined;
    expireAt: number | undefined; // unix timestamp in seconds
    
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

    const authState = JSON.parse(authStateStr)
    
    if (!authState) {
        return null
    }

    return new UserAuthState(authState.token, authState.expireAt)
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