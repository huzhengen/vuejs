<template>
  <div id="navmenu">
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="route in $router.options.routes" v-if="!route.hidden">
        <el-menu-item v-if="!route.hasChild" :key="route.path" :index="route.path">{{route.name}}</el-menu-item>        
      </template>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  #navmenu{
    position: fixed;
    left:0;
    bottom:0;
    width:100%;
    li{
      width:33.33333333333333333333333333333333333333333%;
      box-sizing:border-box;
      a{
        text-decoration:none;
      }
    }
  }
</style>