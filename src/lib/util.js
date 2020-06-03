import Cookies from 'js-cookie'

//  保存cookie
export const setToken = (token = 'token', tokenName = 'tokenName') => {
  Cookies.set(tokenName, token)
}
//  读取cookie
export const getToken = (tokenName = 'tokenName') => {
  return Cookies.get(tokenName)
}
//  删除cookie
export const clearToken = (tokenName = 'tokenName') => {
  Cookies.remove(tokenName)
  let message = '删除成功'
  return message
}
//  更改标题
export const setTitle = (title) => {
  window.document.title = title
}
//  获取打开的菜单数组
export const getOpenArrByName = (name, routerList) => {
  let arr = []
  routerList.some(item => {
    if (item.name === name) {
      arr.push(item.name)
      return true
    }
    if (item.children && item.children.length) {
      let childArr = getOpenArrByName(name, item.children)
      if (childArr.length) {
        arr = arr.concat(item.name, childArr)
        return true
      }
    }
  })
  return arr
}
// // 获取登录状态
// export const loginStatus = () => {
//   return localStorage.getItem('usName')
// }
//  获取面包屑导航list
export const getBreadCrumbList = (route) => {
  let arr = []
  for (let i = 0; i < route.matched.length; i++) {
    if (!route.matched[i].parent) {
      route.matched[i].path = ''
    }
    arr.push(route.matched[i])
  }
  console.log('mianbao==', arr)
  return arr
}

//  缓存
export const localSave = (name, value) => {
  localStorage.setItem(name, value)
}

export const localRead = (name) => {
  return localStorage.getItem(name)
}

export const getTabListToLocal = tabList => {
  return tabList.map(item => {
    return {
      name: item.name,
      path: item.path,
      meta: item.meta,
      params: item.params,
      query: item.query
    }
  })
}
