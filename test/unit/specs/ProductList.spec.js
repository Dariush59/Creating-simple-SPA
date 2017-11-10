import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import ProductList from '@/components/ProductList'
import * as types from '@/store/modules/mutation-types'
import { getters } from '@/store/modules/getters'

describe('ProductList.vue', () => {
  it('test initial rendering with mock data', (done) => {
    const actionsInjector = require('inject-loader!@/store/modules/actions')
    const actions = actionsInjector({
      '@/api/repos': {
        getProducts () {
          return new Promise((resolve, reject) => {
            const arr = [
              { 'id': 1, 'name': 'bike-navigation', 'full_name': 'heremaps/bike-navigation', 'desc': 'A companion device to use the HERE WeGo app for bike navigation.' },
              { 'id': 2, 'name': 'buildrotator-plugin', 'full_name': 'heremaps/buildrotator-plugin', 'desc': 'A Jenkins plugin to perform rotation of build history with low memory pressure.' },
              { 'id': 3, 'name': 'clcache', 'full_name': 'heremaps/clcache', 'desc': 'A compiler cache for MSVC, much like ccache for gcc' },
              { 'id': 4, 'name': 'com.here.validate.svrl', 'full_name': 'heremaps/com.here.validate.svrl', 'desc': 'A structure, style and content checker for DITA documents in the form of a DITA OT plug-in.' }
            ]
            resolve(arr)
          })
        }
      }
    }).actions
    const state = {
      all: []
    }

    const mutations = {
      [types.RECEIVE_PRODUCTS] (state, {products}) {
        state.all = products
      }
    }

    const options = {
      state,
      mutations,
      actions,
      getters
    }
    const mockStore = new Vuex.Store(options)

    const vm = new Vue({
      template: '<div><test></test></div>',
      store: mockStore,
      components: {
        'test': ProductList
      }
    }).$mount()
    Vue.nextTick()
      .then(() => {
        expect(vm.$el.querySelectorAll('.items').length).to.equal(0)
        done()
      })
      .catch(done)
  })
})
