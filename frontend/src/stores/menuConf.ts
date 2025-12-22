import { defineStore } from 'pinia'
import { M } from 'vue-router/dist/router-CWoNjPRp.mjs';

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