<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import { defineEmits, ref, watchEffect } from 'vue'
import type { BaseSideMenuItem } from '~/types/emit'
import { useRoute } from 'vue-router'
import { MenuInstance, SubMenuInstance } from 'element-plus';

const emit = defineEmits<{
  (e: 'base-side-menu-item-click', data: BaseSideMenuItem): void
}>()

function clickMenuItem(index: string, itemTitle: string) {
  emit('base-side-menu-item-click', { title: itemTitle, index: index })
}

// const isCollapse = ref(true)
function handleOpen(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}
function handleClose(key: string, keyPath: string[]) {
  // eslint-disable-next-line no-console
  console.log(key, keyPath)
}

interface Menu {
  title: string
  index: string
}

const configMangementMenus:Menu[] = [
  { title: '通用配置', index: '/config/general' },
  { title: 'key-value配置', index: '/config/kv' },
]

const rbacMenus:Menu[] = [
  { title: '角色管理', index: '/rbac/role' },
  { title: '菜单管理', index: '/rbac/menu' },
  { title: '用户管理', index: '/rbac/user' },
]

const route = useRoute()

const menuRef = ref<MenuInstance>()

watchEffect(() => {
  for (const menu of configMangementMenus) {
    if (route.path.startsWith(menu.index)) {
      clickMenuItem(menu.index, menu.title)
      menuRef.value?.updateActiveIndex(menu.index)
      return
    }
  }

  for (const menu of rbacMenus) {
    if (route.path.startsWith(menu.index)) {
      clickMenuItem(menu.index, menu.title)
      menuRef.value?.updateActiveIndex(menu.index)
      return
    }
  }
})

</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    ref="menuRef"
  >
    <el-sub-menu index="/config">
      <template #title>
        <el-icon>
          <Setting />
        </el-icon>
        <span>配置管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="item in configMangementMenus" :index="item.index" @click="clickMenuItem(item.index, item.title)">
          {{ item.title }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <el-sub-menu index="/rbac">
      <template #title>
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="item in rbacMenus" :index="item.index" @click="clickMenuItem(item.index, item.title)">
          {{ item.title }}
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
