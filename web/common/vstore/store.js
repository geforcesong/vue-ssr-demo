// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      storeName : 'bla.........'
    },
    mutations: {
      setText (state, text) {
        console.log('i am in mutations');
        state.storeName = text;
      }
    }
  })
}
