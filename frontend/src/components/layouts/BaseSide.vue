<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

import { defineEmits } from 'vue'
import type { BaseSideMenuItem } from '~/types/emit'

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
</script>

<template>
  <el-menu
    router
    default-active="1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <Setting />
        </el-icon>
        <span>配置管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/general-config" @click="clickMenuItem('/general-config', '通用配置')">
          通用配置
        </el-menu-item>
        <el-menu-item index="/kv-config" @click="clickMenuItem('/kv-config', 'key-value配置')">
          key-value配置
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/rbac/role" @click="clickMenuItem('/rbac/role', '角色管理')">
          角色管理
        </el-menu-item>
        <el-menu-item index="/rbac/menu" @click="clickMenuItem('/rbac/menu', '菜单管理')">
          菜单管理
        </el-menu-item>
        <el-menu-item index="/rbac/user" @click="clickMenuItem('/rbac/user', '用户管理')">
          用户管理
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

  </el-menu>
</template>
