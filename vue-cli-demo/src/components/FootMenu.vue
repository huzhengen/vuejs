<template>
  <div id="footmenu">
    <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <template v-for="route in $router.options.routes" v-if="route.bottom">
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
  #footmenu{
    position: fixed;
    left:0;
    bottom:0;
    width:100%;
    li{
      width:50%;
      box-sizing:border-box;
      a{
        text-decoration:none;
      }
    }
  }
</style>