import axios from 'axios'
const MyHttpServer = {}

MyHttpServer.install =  (Vue) => {

  axios.defaults.baseURL = 'http://192.168.2.235:8080/'
  Vue.prototype.$http = axios

}

export default MyHttpServer
