import Router from 'vue-router'
import routes from './routes'

/*
  * 使用函数返回Router实例
  * 产生局部Router，避免全局污染
  */
export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/' // 所有路由前都加上该路径，但是访问绝对路径并不强制，即/app === /base/app
    // linkActiveClass: 'active-link', // 属于当前路由的部分路径时的class
    // linkExactActiveClass: 'exact-active-link' //当前路由完全等于router-link指向的路由时的class
    scrollBehavior (to, from, savedPosition) {
      // 滚动条状态定义
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // fallback: true // vue自动把路由自动处理为hash形式
    // parseQuery (query) {
    //   // 自定义 query => obj
    // },
    // stringifyQuery (obj) {
    //   // 自定义 obj => query
    // }
  })
}
