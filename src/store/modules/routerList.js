import { routerMap } from '@/router'
//  提取路由信息
const routerList = {
  state: {
    routers: routerMap
  },
  getters: {
    routers: state => state.routers
  }
}

export default routerList
