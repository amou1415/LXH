import Vue from 'vue'
// 我们在这里引入组件, 使用的是相对路径
// ./xxx/xxx/xxx
// vue-cli 为了避免这种无限嵌套的情况下
// 容易混乱, 配置了一个快捷方式 @ 这个符号如果用在路径当中
// 代表的就是 src 根目录
// import App from './App.vue'
import App from '@/App.vue'
import router from './router'

//引入组件库
import Vant from 'vant';
Vue.use(Vant);
import 'vant/lib/index.css';

//引入axios组件库,用来发送ajax请求
import axios from 'axios';
//使用axios
// Vue.use(axios);
//绑定到Vue原型
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
