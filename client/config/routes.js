// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    name: 'app',
    component: () => import(/* webpackChunkName: "todo-view" */ '../views/todo/todo.vue'),
    // component: Todo,
    // components: {
    //   // 具名路由时需要指定对应的组件
    //   default: Todo,
    //   a: login
    // },
    meta: {
      // 保存路由信息
    },
    children: [
      // 子路由
    ]
    // props: true // 把路由参数作为props传入对应组件
    // props: (route) => ({ id: route.query.b }) // 可以传入函数，对query进行解析
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login-view" */ '../views/login/login.vue')
    // component: Login
  }
]
