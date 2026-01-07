<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { BaseSideMenuItem } from '~/types/emit'
import { ref, provide } from "vue"

const route = useRoute()

// 登录页路径
const isLoginPage = route.path === '/login'

const editableTabsValue = ref('/')

interface editableTab {
  name: string
  title: string
  content: string
}

const editableTabs = ref<editableTab[]>([
  {
    title: '个人信息',
    name: '/',
    content: '个人信息',
  },
])

provide("base-header-tabs", editableTabs)
provide("base-header-active-tab", editableTabsValue)

const cachedTabs = ref<string[]>(['/']); // 缓存的路由名称
const handleBaseSideMenuItemClick = (data: BaseSideMenuItem) => {
  let isNewTab = true
  for (const tab of editableTabs.value) {
    if (tab.name === data.index) {
      editableTabsValue.value = data.index
      isNewTab = false
      break
    }
  }

  if (!isNewTab) {
    return
  }

  editableTabs.value.push({
    title: data.title,
    name: data.index,
    content: data.title,
  })
  editableTabsValue.value = data.index

  if (!cachedTabs.value.includes(data.index)) {
    cachedTabs.value.push(data.index);
  }
}
</script>

<template>
  <el-config-provider namespace="ep">
    <template v-if="!isLoginPage">
      <BaseHeader />
      <div class="main-container flex">
        <BaseSide @base-side-menu-item-click="handleBaseSideMenuItemClick" />
        <div w="full" py="4">

          <router-view v-slot="{ Component, route }">
            <keep-alive :include="cachedTabs">
              <component :is="Component" :key="route.name" />
            </keep-alive>
          </router-view>

        </div>
      </div>
    </template>
    <template v-else>
      <RouterView />
    </template>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 4px);
}
</style>