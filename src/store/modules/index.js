import * as types from './mutation-types'
import { actions } from './actions'
import { getters } from './getters'

const state = {
  all: []
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

