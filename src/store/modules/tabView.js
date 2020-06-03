import { localSave, localRead, getTabListToLocal } from '@/lib/util'
const tabView = {
  state: {
    tabList: JSON.parse(localRead('tabList') || '[]'),
    newPath: ''
  },
  mutations: {
    //  增加tabs
    UPDATE_ROUTER (state, route) {
      // 遍历到每个name值不一样的，才添加到数组里面
      if (!state.tabList.find(item => item.name === route.name)) state.tabList.push(route)
      localSave('tabList', JSON.stringify(getTabListToLocal(state.tabList)))
    },
    //  关闭tabs
    REMOVE_ROUTER (state, route) {
      for (let i = 0; i < state.tabList.length; i++) {
        if (state.tabList[i].name === route) {
          state.tabList.splice(i, 1)
          state.newPath = state.tabList[i - 1]
        }
      }
    }
  },
  actions: {

  },
  getters: {

  }

}

export default tabView
