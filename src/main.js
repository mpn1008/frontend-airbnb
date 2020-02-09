// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuelidate from "vuelidate";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

Vue.config.productionTip = false;
window.axios = axios;
const datepickerOptions = {}
Vue.use(Vuelidate);
Vue.use(DatePicker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    arr:[],
  }
})
