<template>
  <div class='container'>
    <router-link  to="/">Go back</router-link>
    <h1 class="text-uppercase"> {{ msg }}</h1>
    <div v-for="(value, key) in languages" :key="key">
      <span class="text-uppercase"><strong>{{ key }} :</strong></span>
      <span>{{ value }}</span>
    </div>
  </div>

</template>

<script>
  import repos from './../api/repos'
  var name = ''
  export default {
    name: 'product',
    data () {
      name = this.$route.params.name
      return {
        msg: name,
        languages: {}
      }
    },
    mounted () {
      const vm = this
      repos.getProductLanguage(name, (lang) => {
        vm.languages = lang
      })
    }
  }
</script>
