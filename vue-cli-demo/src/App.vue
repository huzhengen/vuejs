<template>
  <div id="app">
    <foot-menu></foot-menu>
    <el-container>
        <el-main><router-view/></el-main>
    </el-container>
    <nav-menu></nav-menu>
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
