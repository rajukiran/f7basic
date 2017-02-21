import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/store';

Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://139.59.3.231:8080/SpringWithHibernate/'; // Our API url will goes here
let context = undefined;

axios.interceptors.request.use(function (config) {

    // Do something before request is sent
    f7.showPreloader();

    let token = localStorage.getItem('id_token')

    if (token !== null && token !== 'undefined') {

      config.headers.common['Authorization'] = token;
    }

    return config;

  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    f7.hidePreloader();
    return response;

    }, function (error) {
      f7.hidePreloader();
    // Do something with response error
    return Promise.reject(error);
 });

Vue.prototype.$http = axios;
