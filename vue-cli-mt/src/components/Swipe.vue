<template>
	<div class="swipe">
		<mt-swipe :auto="0" @change="handleChange">
		  <mt-swipe-item v-for="swipeImg in swipeImgs" :key="swipeImg.pic"><img :src="swipeImg.pic" alt=""></mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
export default{
	name: 'Swipe',
	data(){
		return {
			swipeImgs: [
				{pic: require('../assets/images/1.png')},
				{pic: require('../assets/images/2.png')}
			]
		}
	},
	methods: {
		handleChange(index){
			// console.log(index)
		}
	}
}
</script>
<style lang="less">
.mint-swipe-items-wrap{
	height: 200px;
	img{
		width: 100%;
	}
}
</style>