import Vue from 'vue'
import Vuex from 'vuex'
import routerList from './modules/routerList'
import tabView from './modules/tabView'
import breadCrumb from './modules/breadCrumb'
import user from './modules/user'
Vue.use(Vuex)

//  全局状态管理
export default new Vuex.Store({
  //  状态数据对象
  state: {

  },
  //  类似于计算属性
  getters: {

  },
  // 里面可以定义方法，组件内需要调用这里的方法，就需要先将这个方法名通过mapMutations注册，就可以使用，例如直接改变state里面的值，组件内可以通过这个方法改变
  mutations: {

  },
  //  和mutations相同的是都是定义方法在里面，调用方法也差不多，不同的是，这里面都是执行一些异步操作，例如请求接口，mutations只能执行同步操作
  actions: {

  },
  modules: {
    routerList,
    tabView,
    breadCrumb,
    user
  }
})
