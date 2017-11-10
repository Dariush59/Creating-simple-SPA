import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ProductLanguages from '@/components/ProductLanguages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product/:name/languages',
      name: 'ProductLanguages',
      component: ProductLanguages
    }
  ]
})
