import Vue from 'vue'
import Vuex from 'vuex'

import product from './product'
import supplier from './supplier'
import client from './client'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product,
    supplier,
    client,
  },
})

export default store
