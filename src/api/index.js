//  接口管理
//  判断当前环境
const baseUrl = process.env.NODE_ENV === 'production' ? '' : ''
const apiList = {
  login: baseUrl + '/login'
}

export default apiList
