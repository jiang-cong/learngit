// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import axios from '../node_modules/axios'
import qs from 'qs';

Vue.prototype.$qs = qs;

Vue.prototype.$axios = axios;

Vue.use(iView)
// /Entrust/selectOneAll?entrustNum=${i}
axios.defaults.baseURL = 'http://192.168.100.246:8080';//axios默认ip 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//post请求处理 最好安装个qs
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.timeout = 40000;//相应超时时间

// var loadinginstace
//请求拦截器
axios.interceptors.request.use(config=>{//config 处理请求前代码地址链接url
  // this.$Spin.show();
  return config;
},error=>{
  
  return Promise.reject(error)
})
//相应拦截器
//   http响应拦截器
axios.interceptors.response.use(data => {
  // this.$Spin.hide();
  return data
}, error => {
  // this.$Spin.hide();
  return Promise.reject(error)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
