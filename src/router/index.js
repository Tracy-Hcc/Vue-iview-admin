import Vue from 'vue'
import Router from 'vue-router'
import login from './../views/login/login.vue'
import main from './../views/main/main'
Vue.use(Router)

export const routerMap = [
  {
    path: '/login',
    name: 'login',
    show: false,
    meta: {title: '登录'},
    component: login
  },
  // {
  //   path: '/',
  //   name: 'homePage',
  //   component: main,
  //   redirect: '/home',
  //   show: false,
  //   meta: {title: '首页'},
  //   children: [
  //     {
  //       path: 'home',
  //       name: 'home',
  //       component: () => import('@/views/home/homepage'),
  //       meta: { title: '首页' }
  //     }
  //   ]
  // },
  {
    path: '/',
    component: main,
    name: 'intergralManage',
    redirect: '/personManage',
    meta: {title: '积分管理'},
    show: true,
    children: [
      {
        path: 'personManage',
        name: 'personManage',
        component: () => import('@/views/integralManage/personManage'),
        meta: { title: '人员管理' }
      },
      {
        path: 'parameterManage',
        name: 'parameterManage',
        component: () => import('@/views/integralManage/parameterManage'),
        meta: { title: '积分参数管理' }
      }
    ]
  }
]
export default new Router({
  routes: routerMap
})
