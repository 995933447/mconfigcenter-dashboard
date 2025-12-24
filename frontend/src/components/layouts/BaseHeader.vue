<script lang="ts" setup>
import { toggleDark } from '~/composables'
import { clearAuthState } from '~/composables/auth';
import { Ref, inject } from 'vue';
import { getRouter } from '~/composables/route';
import { TabsPaneContext } from 'element-plus';

const logout = () => {
  clearAuthState()
  location.reload()
}

const editableTabsValue = inject<Ref<string>>("base-header-active-tab")
const editableTabs = inject<Ref<{
  name: string
  title: string
  content: string
}[]>>("base-header-tabs")

if (!editableTabsValue || !editableTabs) {
  throw new Error("BaseHeader.vue: Failed to inject tabs data")
}

const removeTab = (targetName: string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}

const hanldeClickTab = (target: TabsPaneContext) => {
  const targetName = target.paneName as string
  if (editableTabsValue.value !== targetName) {
    editableTabsValue.value = targetName
    getRouter()?.push(targetName); // 仅在目标路由不同的情况下跳转
  }
}

</script>

<template>
  <el-menu class="menu" mode="horizontal" :ellipsis="false" router>
    <el-menu-item index="/">
      <div class="flex items-center justify-center gap-2">
        <div class="text-xl" i-ep-element-plus />
        <span>MConfig center</span>
      </div>
    </el-menu-item>

    <el-tabs
      v-model="editableTabsValue"
      type="card"
      class="tabs"
      hide-tab-type="select"
      @tab-remove="removeTab"
      @tab-click="hanldeClickTab"
      style="margin-left: 2rem; margin-top:1rem; width: 100%; display: flex; justify-content: center; align-items: flex-start;"
      >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>

    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="w-full cursor-pointer border-none bg-transparent"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

    <el-menu-item h="full">
      <el-sub-menu index="/">
        <template #title>
          <div class="flex items-center justify-center w-6 h-6">
            <div class="i-solar-user-bold text-2xl" />
          </div>
        </template>

        <el-menu-item index="/" @click='editableTabsValue="/"'>个人信息</el-menu-item>
        <el-menu-item index="/" @click="logout">登出</el-menu-item>
      </el-sub-menu>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss">
.menu{
  &.ep-menu--horizontal > .ep-menu-item:nth-child(1) {
    margin-right: auto;
  }
}

.tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
