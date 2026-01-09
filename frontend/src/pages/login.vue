<template>
  <div class="flex justify-center items-center min-h-screen bg-center bg-no-repeat bg-auto bg-white"
    :style="{ backgroundImage: `url(${loginBackground})` }" style="position: relative;" v-loading="loading">
    <el-image style="width: 18rem; height: 15rem; position: absolute; left: 3rem; top: 0;" :src="logoImage"
      :fit="`cover`" />
    <el-card ref="cardRef" class="login-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>登录</span>
        </div>
      </template>
      <el-form ref="formRef" style="max-width: 600px; padding: 10px; opacity: 1;" :model="validateForm"
        label-width="auto" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" :rules="[
          { required: true, message: 'username is required' },
        ]">
          <el-input v-model="validateForm.username" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[
          { required: true, message: 'password is required' },
        ]">
          <el-input v-model="validateForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.login-card {
  max-width: 600px;
  opacity: 0.8;
}

.login-card:hover {
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
</style>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance } from 'element-plus'

import loginBackground from '~/assets/image/login-bg.jpg'
import logoImage from '~/assets/image/logo.png'
import { DashboardService } from '~/rpc/proto/dashboard_api'
import { UserAuthState, saveAuthState } from '~/composables/auth'
import { encryptRSA } from '~/composables/encrypt'
import { getRouter } from '~/composables/route'

const formRef = ref<FormInstance>()

const validateForm = reactive({
  username: '',
  password: '',
})

const loading = ref(false)

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return

  formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true

      let password = validateForm.password
      try {
        const getRSAKeyResp = await DashboardService.GetRSAPubKey({})
        password = encryptRSA(getRSAKeyResp.key as string, password)

        const loginResp = await DashboardService.Login({
          username: validateForm.username,
          password: password,
        })

        let expireAt = Number(loginResp.expire_at)

        const userState = new UserAuthState(loginResp.token ? loginResp.token : '', expireAt)
        saveAuthState(userState)

        const getUserPermsResp = await DashboardService.ListUserPerm({})
        userState.isSuperAdmin = getUserPermsResp.is_super_admin as boolean
        const listMenuConfResp = await DashboardService.ListMenuConf({})
        if (listMenuConfResp.list) {
          userState.accessableMenuPaths = []
          for (const menu of listMenuConfResp.list) {
            if (getUserPermsResp.is_super_admin) {
              userState.accessableMenuPaths.push(menu.path as string)
              continue
            }

            if (menu.perm_id && getUserPermsResp.perm_ids?.includes(menu.perm_id)) {
              userState.accessableMenuPaths.push(menu.path as string)
            }
          }
        }

        saveAuthState(userState)

        const router = getRouter()
        if (router) {
          const redirect = (router.currentRoute.value.query.redirect as string) || '/'
          location.href = redirect
        }
      } finally {
        loading.value = false
      }
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>