import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products
  }
})

export default store
