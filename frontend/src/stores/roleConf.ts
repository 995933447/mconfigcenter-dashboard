import { defineStore } from "pinia";
import { Role } from "~/types/roleConf";

export const useRoleConfStore = defineStore("roleConf", {
    state: () => ({
        roleList: [] as Role[],
    }),
    actions: {
        setRoleList(roleList: Role[]) {
            this.roleList = roleList;
        }
    }
})