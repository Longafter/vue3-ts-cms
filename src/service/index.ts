// service统一出口
import PZRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const pzRequest = new PZRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default pzRequest
