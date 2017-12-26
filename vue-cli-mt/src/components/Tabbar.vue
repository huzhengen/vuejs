<template>
	<mt-tabbar v-model="selected">
	  <mt-tab-item id="index">
	    首页
	  </mt-tab-item>
	  <mt-tab-item id="order">
	    订单
	  </mt-tab-item>
	  <mt-tab-item id="mine">
	    我的
	  </mt-tab-item>
	</mt-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  data(){
  	return {
  		selected: 'index'
  	}
  },
  watch: {
  	selected: function(val, oldVal){
  		console.log(val, oldVal, this.$router)
  		switch(val){
  			case 'index':
  				this.$router.push('/index');
  			break;
  			case 'order':
  				this.$router.push('/order');
  			break;
  			case 'mine':
  				this.$router.push('/mine');
  			break;
  		}
  	}
  }
}
</script>

<style lang="less">
.mint-tabbar{
	.mint-tab-item.is-selected{
		color: #2c3e50;
	}
	a:nth-of-type(1){
		&.is-selected{
			.mint-tab-item-icon{
				background-position: 0 0;
			}
		}
		.mint-tab-item-icon{
			background-image: url(../assets/images/tabbarBg.png);
			background-size: cover;
			background-position: 0 -25px;
			display:block!important;
		}
	}
	a:nth-of-type(2){
		&.is-selected{
			.mint-tab-item-icon{
				background-position: 0 -48px;
			}
		}
		.mint-tab-item-icon{
			background-image: url(../assets/images/tabbarBg.png);
			background-size: cover;
			background-position: 0 -72px;
			display:block!important;
		}
	}
	a:nth-of-type(3){
		&.is-selected{
			.mint-tab-item-icon{
				background-position: 0 -96px;
			}
		}
		.mint-tab-item-icon{
			background-image: url(../assets/images/tabbarBg.png);
			background-size: cover;
			background-position: 0 -120px;
			display:block!important;
		}
	}
}
</style>