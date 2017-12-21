<template>
  <div id="navmenu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="#/"><router-link to="/">首页</router-link></el-menu-item>
      <el-submenu index="#/manager/my">
        <template slot="title">管理</template>
        <el-menu-item index="#/manager/my"><router-link to="/manager/my">我的信息</router-link></el-menu-item>
        <el-menu-item index="#/manager/send"><router-link to="/manager/send">发货管理</router-link></el-menu-item>
        <el-menu-item index="#/manager/history"><router-link to="/manager/history">发货记录</router-link></el-menu-item>
      </el-submenu>
      <el-menu-item index="#/products"><router-link to="/products">产品</router-link></el-menu-item>
      <el-menu-item index="#/FAQ"><router-link to="/FAQ">FAQ</router-link></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: location.hash
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