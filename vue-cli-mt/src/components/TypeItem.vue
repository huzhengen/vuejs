<template>
	<div class="item">
		<ul>
			<li v-for="type in types" :key="type.index">
				<img :src="type.icon" alt="">
				<p>{{type.title}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name: 'TypeItem',
	data(){
		return {
			types: [
				{
					icon: require('../assets/images/ms.png'),
					title: '美食'
				},
				{
					icon: require('../assets/images/mtcs.png'),
					title: '美团超市'
				},
				{
					icon: require('../assets/images/sxgs.png'),
					title: '生鲜果蔬'
				},
				{
					icon: require('../assets/images/tdyp.png'),
					title: '甜点饮品'
				},
				{
					icon: require('../assets/images/mtzs.png'),
					title: '美团专送'
				},
				{
					icon: require('../assets/images/zcyx.png'),
					title: '正餐优选'
				},
				{
					icon: require('../assets/images/kcxc.png'),
					title: '快餐小吃'
				},
				{
					icon: require('../assets/images/hbps.png'),
					title: '汉堡披萨'
				},
			]
		}
	}
}
</script>
<style lang="less">
.item{
	width:100%;
	ul{
		width:100%;
		padding:0;
		margin:0;
		display:flex;
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		li{
			width: 25%;
			list-style:none;
			padding-top:10px;
			text-align: center;
			img{
				width: 74%;
			}
			p{
				padding: 0;
				margin:0;
				font-size:13px;
			}
		}
	}
}
</style>