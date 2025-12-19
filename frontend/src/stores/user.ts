import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        username: '',
        id: '',
        roles: [] as string[],
        lastLoginAt: ''
    }),
    
    actions: {
        setUserInfo(userInfo: { username: string; id: string; roles: string[]; lastLoginAt: string }) {
            this.username = userInfo.username;
            this.id = userInfo.id;
            this.roles = userInfo.roles;
            this.lastLoginAt = userInfo.lastLoginAt;
        },

        clearUserInfo() {
            this.username = '';
            this.id = '';
            this.roles = [];
            this.lastLoginAt = '';
        }
    }
});