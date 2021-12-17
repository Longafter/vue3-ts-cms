import { createApp } from 'vue'
import App from './App.vue'

import pzRequest from './service'

import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

pzRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: config => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: res => {
      console.log('单独响应的response')
      return res
    }
  }
})

// pzRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
