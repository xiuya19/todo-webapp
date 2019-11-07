
import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 无法从外部修改，开发环境时使用
    state: defaultState,
    mutations,
    getters,
    actions
    // modules: {
    //   a: {
    //     namespaced: true, // 命名空间
    //     state: {
    //       text: 'store module a'
    //     },
    //     mutations: {
    //       updateText (state, text) {
    //         console.log(state)
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textPlus (state, getters, rootState) {
    //         // rootState 全局state,也可以通过模块名访问其他模块的state
    //         return state.text + rootState.count
    //       }
    //     },
    //     actions: {
    //       add ({state, commit, rootState}) {
    //         commit('updateText', rootState.count)
    //       }
    //     }
    //   },
    //   b: {
    //     state: {
    //       text: 'store module b'
    //     }
    //   }
    // }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }

  return store
}
