// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from '@/router/index'
import store from '@/store/store'
import App from './App'
import utils from './utils/utils'

import '@/components/comment'
import '@/assets/js/flexible'
import '@/assets/css/comment.css'

//字体图标
import '@/assets/font/iconfont.css'

// 引入 museUi
// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';
// Vue.use(MuseUI);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// easy-ui
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';
Vue.use(EasyUI);

FastClick.attach(document.body);

Vue.config.productionTip = false;
Vue.prototype.utils = utils;
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
