// 'use strict';
// $(document).ready(function () {
//   axios.get('http://mysite.local/wp-json/wp/v2/posts').then(function (res) {
//     console.log(res)
//   })
// })

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data(){
    return{
      apiData: null,
    }
  },
  created(){
    axios.get('http://mysite.local/wp-json/wp/v2/posts').then(function (res) {
      console.log(res)
    })
  }
})