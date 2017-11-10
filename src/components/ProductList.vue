<template>
  <div class='container'>
    <h1>PRODUCT LIST</h1>
    <hr />
      <template v-for="item in products" class="items" >
        <div class="card border-secondary col-lg-4 float-lg-left" >
          <div class="card-header text-uppercase">{{ item.name }}</div>
          <div class="card-body text-secondary panel-body">
            <div class="box">
              <h6 class="card-title text-capitalize">{{ item.full_name }}</h6>
              <p class="card-text ">{{ item.desc }}</p>
            </div>
            <div class="text-right">
              <router-link  :to="{ path:`/product/${item.name}/languages`}">Read More</router-link>
            </div>
          </div>
        </div>
      </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters({
        products: 'allProducts'
      })
    },
    created () {
      this.$store.dispatch('getAllProducts')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.card {
  height: 250px;
}

.box {
  height: 125px;
  overflow: hidden;
}

.card.border-secondary.col-lg-4.float-lg-left {
  padding: 0;
}
</style>
