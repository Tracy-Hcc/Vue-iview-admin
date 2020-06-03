// 全局权限监测,全局路由守卫
import router from '../router'
import {getToken, setTitle} from './util'
router.beforeEach((to, from, next) => {
  if (getToken()) {
    //  有登录状态访问登录页面，直接跳转首页
    if (to.path === '/login') {
      next('/')
      return
    }
    setTitle(to.meta.title)
    next()
  } else {
    // 如果没有登录状态，强制返回登录页
    if (to.path !== '/login') {
      next('/login')
      return
    }
    setTitle(to.meta.title)
    next()
  }
})
