import { getBreadCrumbList } from '@/lib/util'
const breadCrumb = {
  state: {
    breadCrumbList: []
  },
  mutations: {
    setBreadCrumb (state, route) {
      state.breadCrumbList = getBreadCrumbList(route)
    }
  }
}

export default breadCrumb
