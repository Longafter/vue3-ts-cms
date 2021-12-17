import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

class PZRequest {
  // 传入不同配置时，每次都会创建新的instance
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then(res => {
      console.log(res)
    })
  }
}

export default PZRequest
