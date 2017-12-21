<template>
  <div id="app">
    <img src="./assets/logo.png">    
    <pug-demo></pug-demo>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import PugDemo from '@/components/PugDemo'
import Tab     from '@/components/Tab'
export default {
  name: 'app',  
  computed:{
    count(){
        return this.$store.state.count
    }
  },  
  components: {
    'pug-demo': PugDemo,
    'tab': Tab
  }
}
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
</style>
