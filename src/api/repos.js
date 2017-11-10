import Vue from 'vue'

export default {
  getProducts (cb) {
    console.log('repos')
    Vue.axios.get('https://api.github.com/users/heremaps/repos').then((response) => {
      let data = response.data.map((item, index) => ({
        'id': ++index,
        'name': item.name,
        'full_name': item.full_name,
        'desc': item.description
      }))
      cb(data)
    }).catch(error => {
      console.log('caught an error the date is  ', error.response.data)
    })
  },

  getProductLanguage (name, cb) {
    console.log(name)
    Vue.axios.get('https://api.github.com/repos/heremaps/' + name + '/languages').then((response) => {
      console.log(response)
      cb(response.data)
    }).catch(error => {
      console.log('caught an error the date is  ', error.response.data)
    })
  }

}
