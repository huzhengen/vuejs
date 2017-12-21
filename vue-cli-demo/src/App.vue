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
    <foot-menu></foot-menu>
  </div>
</template>

<script>
import NavMenu     from '@/components/NavMenu'
import FootMenu     from '@/components/FootMenu'
export default {
  name: 'app',  
  computed:{
    count(){
        return this.$store.state.count
    }
  },  
  components: {
    'nav-menu': NavMenu,
    'foot-menu': FootMenu
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
