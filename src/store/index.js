import Vue from 'vue'
import Vuex from '../../vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg:10
  },
  mutations: {
    setMsg(state,poyld){
      state.msg += poyld
    }
  },
  actions: {
   handMsg({commit},poyld){
    setTimeout(() => {
      commit('setMsg',poyld)
    }, 1000);
   }
  },
  getters:{
    newMsg(state){
      return state.msg + 5
    }
  },
  modules: {
    a:{
      state: {
        msg:10
      },
      mutations: {
        setMsg(state,poyld){
          state.msg += poyld
        }
      },
      actions: {
       handMsg({commit},poyld){
        setTimeout(() => {
          commit('setMsg',poyld)
        }, 1000);
       }
      },
      getters:{
        newMsg(state){
          return state.msg + 5
        }
      },
    }
  }
})
