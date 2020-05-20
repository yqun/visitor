import Vue from 'vue'
import axios from 'axios'
import queryString from 'querystring'

var urlStr = 'http://10.1.5.220:8091/vistor';
// var urlStr = '';
var Http = axios.create({
  baseURL: urlStr,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  transformRequest: [function (data) {
    return queryString.stringify(data);
  }],
})

//请求拦截器
Http.interceptors.request.use(function(config){
  //在发送请求之前做某事
  // console.log("拦截");
  // console.log(config); //单次请求的配置信息对象
  // 获取token 设置在每次的请求头上
  const AUTH_TOKEN = window.sessionStorage.getItem('token');
  config.headers.common['token'] = AUTH_TOKEN;

  return config;  //只有return config后，才能成功发送请求
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});

//响应拦截器
Http.interceptors.response.use(function(data){

  // console.log(data);  //响应数据
  return data.data;   //只有return data后才能完成响应
});

// axios挂载到vue原型上
Vue.prototype.axios = Http;
Vue.prototype.axiosUrl = urlStr;


export default Http;
