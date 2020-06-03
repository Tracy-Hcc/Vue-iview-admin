import HttpRequest from '@/lib/axios'
import { setToken, clearToken } from '@/lib/util'
let axios = new HttpRequest()
const user = {
  state: {

  },
  mutations: {

  },
  actions: {
    login ({ commit }, { userName, password }) {
      return new Promise((resolve, reject) => {
        axios.request({
          url: 'http://meiriyikan.cn/api/json.php'
        })
          .then(res => {
            console.log(res)
            setToken()
            resolve(res)
          }).catch(error => {
            reject(error)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        resolve(clearToken())
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('删除失败')
      })
    }
  },
  getters: {

  }
}
export default user
