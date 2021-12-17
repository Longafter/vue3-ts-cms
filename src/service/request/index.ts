import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { PZRequestInterceptors, PZRequestConfig } from './type'

class PZRequest {
  // 传入不同配置时，每次都会创建新的instance
  instance: AxiosInstance
  interceptors?: PZRequestInterceptors

  constructor(config: PZRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: PZRequestConfig): void {
    this.instance.request(config).then(res => {
      console.log(res)
    })
  }
}

export default PZRequest
