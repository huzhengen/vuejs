<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">    
    <pug-demo></pug-demo>
    <tab></tab>
    <router-view/> -->
    <el-container>
        <el-header><h1>header</h1></el-header>
        <el-main><router-view/></el-main>
        <el-footer><h1>footer</h1></el-footer>
    </el-container>
    <nav-menu></nav-menu>
  </div>
</template>

<script>
import PugDemo from '@/components/PugDemo'
import Tab     from '@/components/Tab'
import NavMenu     from '@/components/NavMenu'
export default {
  name: 'app',  
  computed:{
    count(){
        return this.$store.state.count
    }
  },  
  components: {
    'pug-demo': PugDemo,
    'tab': Tab,
    'nav-menu': NavMenu
  }
}
</script>

<style>
    body{
        margin:0;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top:60px;
    }
</style>
