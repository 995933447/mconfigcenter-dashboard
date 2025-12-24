import { defineStore } from 'pinia'
import type { Menu, MenuSimpleInfo } from '~/composables/menu';

interface MenuConfState {
    menuTree: Array<Menu>;
    menuSimpleInfoList: Array<MenuSimpleInfo>;
    menuMap: Map<number, Menu>;
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