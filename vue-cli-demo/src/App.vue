<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="store-demo">
        <button @click="addCount">click</button>
        <p v-text="count"></p>
    </div>
    <div class="tab">
        <div class="tab_item">
            <router-link to="/tab1">tab1</router-link>
        </div>
        <div class="tab_item">
            <router-link to="/tab2">tab2</router-link>
        </div>
        <div class="tab_item">
            <router-link to="/tab3">tab3</router-link>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    count(){
        return this.$store.state.count
    }
  },
  methods:{
    addCount(){
        this.$store.commit('increment')
    }
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
.tab{
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.tab_item{
    width: 33.333333333333333333333%;
    box-sizing: border-box;
    border: 1px solid #ccc;
}
</style>
