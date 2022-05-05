<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <TranslateWidget msg="Welcome"/>
</template>

<script>
import TranslateWidget from './components/TranslateWidget.vue'
// import { inject } from 'vue'

export default {
  name: 'App',
  setup () {
    
    

    // const axios = inject('axios')

    // const getList = () => {
    //   axios
    //     .get('http://api.collectivat.cat/translate')
    //     .then((response) => {
    //       console.log('eo', response.data)
    //     });
    // };

    // return { getList }
  },
  components: {
    TranslateWidget
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
