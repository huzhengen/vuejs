<template>
  <div id="footmenu">
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="route in $router.options.routes" v-if="route.bottom">
        <el-menu-item :key="route.path" :index="route.path" v-if="!login && !route.hasChild">{{route.name}}</el-menu-item>
        <el-submenu :index="route.path" v-else-if="login && route.hasChild">
          <template slot="title">{{route.name}}</template>
          <el-menu-item v-for="child in route.children" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
        </el-submenu>
      </template>     
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        login: false
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
  #footmenu{
    position: fixed;
    left:0;
    top:0;
    width:100%;
    .el-submenu{
      width: 100%;
    }
    li{
      width:50%;
      box-sizing:border-box;
      a{
        text-decoration:none;
      }
    }
  }
</style>