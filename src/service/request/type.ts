import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface PZRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface PZRequestConfig extends AxiosRequestConfig {
  interceptors?: PZRequestInterceptors
}
