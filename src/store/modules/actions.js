import repos from '@/api/repos'
import * as types from './mutation-types'

export const actions = {
  getAllProducts ({ commit }) {
    repos.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}
