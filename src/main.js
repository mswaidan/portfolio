// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueCarousel from 'vue-carousel'

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueCarousel)
Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'portfolio-513c1',
  databaseURL: 'https://portfolio-513c1.firebaseio.com'
})

export const db = firebase.firestore()
const settings = {timestampsInSnapshots: true}
db.settings(settings)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
