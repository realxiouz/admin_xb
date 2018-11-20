import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'
// import router from '@/router'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://api.580xb.cn/' : '/'

const request = axios.create({
  timeout: 10000,
  responseType: 'json',
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

request.interceptors.request.use(config => {
  if (config.method !== 'get') {
    config.data = qs.stringify(config.data)
  }
  config.headers.Authorization = sessionStorage.getItem('token')
  config.headers.CityCode = 1
  return config
}
)

request.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if (res.data.status === 0) {
        return res.data
      } else {
        if (res.data.msg === '认证已失效，请重新登录') {
          // router.push({name: 'Login'})
          return Promise.reject(new Error('需要重新登陆'))
        }
        message.error(res.data.msg)
        return Promise.reject(res.data.msg)
      }
    } else {
      message.error('网络故障')
      return Promise.reject(new Error('网络故障'))
    }
  },
  err => {
    message.error('好像是断网了')
    return Promise.reject(err)
  }
)
export default request

// fetch('api/pc/article/login', {
//   method: 'POST',
//   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//   body: queryString.stringify(values)
// }).then(res => {
//   if(res.status === 200) {
//     return res.json()
//   } else {
//     message.error('网络故障')
//   }
// }).then( json => {
//   if(json.status === 1) {
//     message.error(`接口出错了: ${json.msg}`)
//   }
// })
// .catch( e => message.info(e))
