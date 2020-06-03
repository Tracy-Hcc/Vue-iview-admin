import axios from 'axios'

//  创建构造函数
class HttpRequest {
  constructor () {
    this.queue = {}
  }
  //  创建一个内部配置
  getInsideConfig () {
    const config = {

    }
    return config
  }
  //  定义一个拦截器
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      //  添加一些请求前的事件
      return config
    }, error => {
      return Promise.reject(error)
    })
    //  响应拦截器
    instance.interceptors.response.use(res => {
      
      return res
    }, err => {
      return Promise.reject(err)
    })
  }
  request (options) {
    //  创建一个axios实例
    const instance = axios.create()
    //  合并配置对象（需要给axios实例传入什么属性，例如header，data）
    options = Object.assign(this.getInsideConfig(), options)
    //  给这个创建好的实例添加拦截器
    this.interceptors(instance)
    //  return 这个axios实例,return之前，这个request还是一个函数，return之后，就变成了配置好了的axios实例
    return instance(options)
    // 最终调用request方法的时候，得到的是配置好了的axios实例
  }
}

export default HttpRequest
