import { defineStore } from 'pinia'

interface MenuConfState {
    menuTree: Array<any>;
    menuSimpleInfoList: Array<any>;
}

export const useMenuConfStore = defineStore('menuConf', {
    state: () => ({
        menuConfState: null as MenuConfState | null,
    }),
    actions: {
        setMenuConf(menuConfState: MenuConfState) {
            this.menuConfState = menuConfState;
        }
    }
})