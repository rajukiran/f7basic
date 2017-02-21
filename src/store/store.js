import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {

    data: undefined,

  },

  actions: {
  
    SET_DATA: function ({ commit }, val) {
       commit('SET_DATA', val)
    },

  },
  
  mutations: {

    SET_DATA: (state, val ) => {
      state.data = val;
    }
  }

})

export default store