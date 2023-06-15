import { BASE_URL, TIMEOUT } from './config'

import axios from "axios"
import { ref } from 'vue'
import { useMainStore } from '@/stores'

//? const mainStore = useMainStore()
//! There's a huge issue here when the 'useMainStore()' was executed. it will cause an error as: "Can't access 'useMainStore' before initialization". it means the 'pinia' not even created while the 'useMainStore()' was executed 

const mainStore = ref({})

class PackagedAxios {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      //! so that i have to using here 
      mainStore.value = useMainStore()
      mainStore.value.globalLoading = true
      return config
    }, err => {
      return Promise.reject(err)
    })
    this.instance.interceptors.response.use(res => {
      mainStore.value.globalLoading = false
      return res
    }, err => {
      mainStore.value.globalLoading = false
      return Promise.reject(err)
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}
const axiosInstance = new PackagedAxios(BASE_URL, TIMEOUT)
export default axiosInstance


