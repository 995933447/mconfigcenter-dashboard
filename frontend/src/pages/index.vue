<template>
  <el-card class="user-info-card" v-loading="loading">
    <template #header>
      <div class="card-header">
        <span>用户信息</span>
      </div>
    </template>

    <el-descriptions direction="vertical" border style="margin-top: 20px">
      <el-descriptions-item :rowspan="2" :width="140" label="Photo" align="center">
        <el-image style="width: 100%; height: 100%; transform: rotateY(180deg)" src="image/shanxin.jpeg" />
      </el-descriptions-item>
      <el-descriptions-item label="账户">{{ userInfo.username }}</el-descriptions-item>
      <el-descriptions-item label="ID">{{ userInfo.id }}</el-descriptions-item>
      <el-descriptions-item label="角色">
        <el-tag size="small" v-for="role in userInfo.roles">{{ role }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="上次登陆时间">{{ userInfo.lastLoginAt }}</el-descriptions-item>
    </el-descriptions>
    <el-button type="primary" class="reset-password-btn" @click="dialogVisible = true">修改密码</el-button>

    <el-dialog
    v-model="dialogVisible"
    title="提示"
    width="30%"
    :before-close="handleCancelChangePassword"
  >
  <el-form
    ref="changePasswordFormRef"
    :model="changePasswordForm"
    status-icon
    :rules="rules"
    label-width="120px"
  >
    <el-form-item label="密码" prop="pass">
      <el-input v-model="changePasswordForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="确认" prop="checkPass">
      <el-input
        v-model="changePasswordForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
  </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancelChangePassword">取消</el-button>
        <el-button type="primary" @click="handleResetChangePasswordForm">重置</el-button>
        <el-button type="primary" @click="handleCommitChangePasswordForm">确认</el-button>
      </span>
    </template>
  </el-dialog>
  </el-card>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import type { FormInstance } from 'element-plus'
  import { ElMessage } from 'element-plus'
  import { DashboardService } from '~/rpc/proto/dashboard_api'
  import { encryptRSA } from '~/composables/encrypt'
  import { useUserStore } from '~/stores/user'

  const loading = ref(false)
  const userInfo = reactive({
    id: '',
    username: '',
    roles: [] as string[],
    lastLoginAt: '',
  })

  const fetchUserInfo = async () => {
      try {
        const resp = await DashboardService.GetUserInfo({})
        userInfo.id = resp.user_id || ''
        userInfo.username = resp.username || ''
        userInfo.roles = resp.role_names || []
        userInfo.lastLoginAt = new Date(Number(resp.last_login_at)*1000).toString() || ''

        userStore.setUserInfo({
          id: userInfo.id,
          username: userInfo.username,
          roles: userInfo.roles,
          lastLoginAt: resp.last_login_at,
        })
      } catch (error) {
        console.error('Failed to fetch user info:', error)
      } finally {
        loading.value = false
      }
  }

  const userStore = useUserStore()
  if (userStore.id) {
    userInfo.id = userStore.id
    userInfo.username = userStore.username
    userInfo.roles = userStore.roles
    userInfo.lastLoginAt = userStore.lastLoginAt?new Date(Number(userStore.lastLoginAt)*1000).toString():''
  } else {
    loading.value = true
    fetchUserInfo()
  }
  

  const changePasswordFormRef = ref<FormInstance>()

  const dialogVisible = ref(false)

  const handleCommitChangePasswordForm = async () => {
    changePasswordFormRef.value?.validate(async (valid) => {
      if (valid) {
        const getRSAPubKeyResp = await DashboardService.GetRSAPubKey({})

        const encryptedPassword = encryptRSA(
          getRSAPubKeyResp.key?getRSAPubKeyResp.key:'',
          changePasswordForm.pass,
        )

        await DashboardService.ChangeUserPassword({
          new_password: encryptedPassword,
        })
        
        ElMessage.success('修改密码成功')
        
        dialogVisible.value = false
        
        handleResetChangePasswordForm()
      } else {
        console.log('error submit!!')
      }
    })
  }

  const handleResetChangePasswordForm = () => {
    changePasswordForm.pass = ''
    changePasswordForm.checkPass = ''
  }

  const handleCancelChangePassword = () => {
    dialogVisible.value = false
    handleResetChangePasswordForm()
  }

  const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const validatePassConfirm = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== changePasswordForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const changePasswordForm = reactive({
  pass: '',
  checkPass: '',
})

const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePassConfirm, trigger: 'blur' }],
})

</script>

<style scoped>
.reset-password-btn {
  float: left;
  margin: 10px 0 20px 0;
}

.user-info-card {
  width: 95%;
  margin: 0 auto;
}
</style>
