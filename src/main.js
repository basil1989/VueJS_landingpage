import Vue from 'vue'
import VueResource from 'vue-resource';
import VueScrollReveal from 'vue-scroll-reveal';

import App from './App.vue'

import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueResource);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px'
});
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);

Vue.http.options.root = 'https://domnoo-8a782.firebaseio.com/';

new Vue({
  el: '#app',
  render: h => h(App),
});
