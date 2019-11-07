import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import './assets/styles/global.css'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// store.registerModule('c', {
//   // 动态注册模块
//   state: {
//     text: 3
//   }
// })
// store.unregisterModule('c') // 解绑模块

// store.watch((state) => state.count + 1, (newCount) => {
//   /**
//    * 作用同vue中的watch
//    * 不过参数上第一个为方法
//    * 第二个为第一个参数的方法执行成功后执行的方法，并且传入前一个方法的返回值
//    */
//   console.log('new watched ', newCount)
// })

// store.subscribe((mutation, state) => {
//   /**
//    * 拿到store中所有mutation的变化
//    */
//   console.log(mutation.type) // 调用的mutation
//   console.log(mutation.payload) // 调用mutation接受的参数
// })

// store.subscribeAction((action, state) => {
//     /**
//    * 拿到store中所有actions的变化
//    */
//   console.log(action.type) // 调用的action
//   console.log(action.payload) // 调用action接受的参数
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
