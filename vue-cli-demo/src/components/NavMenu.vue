<template>
  <div id="navmenu">
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="route in $router.options.routes" v-if="!route.hidden">
        <el-menu-item v-if="!route.hasChild" :key="route.path" :index="route.path">{{route.name}}</el-menu-item>
        <el-submenu v-else :index="route.path">
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
    data() {
      return {
        activeIndex: '1'
      };
    },
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
    top:0;
    width:100%;
    li{
      width:25%;
      box-sizing:border-box;
      a{
        text-decoration:none;
      }
    }
  }
</style>