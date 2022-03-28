import Vue from 'vue'
import App from './App.vue'
import Vuebar from 'vuebar';
// import {scrollBus} from 'vue-detached-scrollbar';

Vue.use(Vuebar);
// Vue.use(scrollBus);
Vue.config.productionTip = false

new Vue({
  // data: {
  //   scrollBus,
  // },  
  render: h => h(App),
}).$mount('#app')

