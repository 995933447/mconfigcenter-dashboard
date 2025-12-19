import axios from "axios";
import { ElMessage } from 'element-plus'
import { commonerr } from './proto/commonerr'
import { getRouter } from '~/composables/route'
import { clearAuthState, getValidAuthState } from "~/composables/auth";

axios.interceptors.request.use(config => {
    config.baseURL = import.meta.env.VITE_API_BASE_URL
    const authState = getValidAuthState()
    if (authState && authState.token) {
      config.headers["token"] = authState.token
    }
    return config
  }, error => {
    ElMessage.error('Request error: ' + error)
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    if (response.data?.err_code !== 0) {
        if (response.data?.err_code == commonerr.ErrCode.ErrCodeNoAuth) {
            clearAuthState()

            const router = getRouter()
            if (!router) {
                ElMessage.error('Router not initialized')
                return Promise.reject(response.data)
            }

            if (router.currentRoute.value.path !== '/login') {
                location.reload()
            }

            return Promise.reject(response.data)
        }
        ElMessage.error(response.data?.err_msg || '请求失败')
        return Promise.reject(response.data)
    }
    return response.data.data ? response.data.data : {}
  }, error => {
    ElMessage.error('Response error: ' + error)
    return Promise.reject(error)
  })