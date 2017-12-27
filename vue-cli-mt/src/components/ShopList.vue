<template>
	<div class="nearby">
		<div class="shop" v-for="shop in shopList" :shop="shop.id">
			<div class="left"><img :src="shop.pic_url" alt=""></div>
			<div class="right">
				<h3>{{shop.name}}</h3>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'ShopList',
	data(){
		return {
			shopList: [
			    {
			        "id": 1000,//id
			        "type":1,//1代表新店、2代表品牌店、0代表都不是
			        "name": "你的名字",//店名
			        "delivery_type": 1,//1代表美团专送，0代表不是
			        "pic_url": "http://p0.meituan.net/0.84.63/xianfu/54c60749841a6612df373dc259e8da73108176.jpg",//图片地址
			        "avg_delivery_time": 30,//平均送达时间
			        "delivery_distance": 2032,//平均送达距离(单位为米，超过一千米要转化成千米)
			        "min_price": 20,//起送价
			        "delivery_price": 3,//配送费
			        "wm_poi_score": 4.7,//评分
			        "month_sale_num": 33,//月售
			        "shop_discount": {
			            "code":0,//是否能领代金券
			            "dis_money":[2,4]//返回的代金券(多张)
			        },
			        "shop_return_price": {
			            "code":0,//是否返券
			            "min_price":20,//返券起始价格
			            "dis_money":4//商家返券数
			        },
			        "shop_return_invoice": {
			            "code":0,//是否开发票
			            "min_price":0,//开票起始价格
			        },   
			    },
			    {
			        "id": 1001,//id
			        "type":0,//1代表新店、2代表品牌店、0代表都不是
			        "name": "叫了个炸鸡(鼓楼店)",//店名
			        "delivery_type": 1,//1代表美团专送，0代表不是
			        "pic_url": "http://p0.meituan.net/0.84.63/xianfu/00b9386a556a39010186a609ce9289e370566.jpg",//图片地址
			        "avg_delivery_time": 30,//平均送达时间
			        "delivery_distance": 2502,//平均送达距离(单位为米，超过一千米要转化成千米)
			        "min_price": 20,//起送价
			        "delivery_price": 3,//配送费
			        "wm_poi_score": 4.2,//评分
			        "month_sale_num": 3857,//月售
			        "shop_discount": {
			            "code":1,//是否能领代金券
			            "dis_money":[1,5,10]//返回的代金券(多张)
			        },
			        "shop_return_price": {
			            "code":0,//是否返券
			            "min_price":20,//返券起始价格
			            "dis_money":1//商家返券数
			        },
			        "shop_return_invoice": {
			            "code":0,//是否开发票
			            "min_price":0,//开票起始价格
			        },   
			    },
			    {
			        "id": 1002,//id
			        "type":2,//1代表新店、2代表品牌店、0代表都不是
			        "name": "望湘园(南京国际广场店)",//店名
			        "delivery_type": 0,//1代表美团专送，0代表不是
			        "pic_url": "http://p1.meituan.net/0.84.63/xianfu/2d91e93c70f91696907f040392c4835f13918.jpg",//图片地址
			        "avg_delivery_time": 30,//平均送达时间
			        "delivery_distance": 889,//平均送达距离(单位为米，超过一千米要转化成千米)
			        "min_price": 20,//起送价
			        "delivery_price": 3.5,//配送费
			        "wm_poi_score": 4.7,//评分
			        "month_sale_num": 1435,//月售
			        "shop_discount": {
			            "code":0,//是否能领代金券
			            "dis_money":[2,4]//返回的代金券(多张)
			        },
			        "shop_return_price": {
			            "code":0,//是否返券
			            "min_price":20,//返券起始价格
			            "dis_money":4//商家返券数
			        },
			        "shop_return_invoice": {
			            "code":1,//是否开发票
			            "min_price":0,//开票起始价格
			        },   
			    }
			]
		}
	}
}
</script>
<style lang="less">
.nearby{
	padding:0 5px;
	.shop{
		display: flex;
		margin-top:10px;
		border-bottom:1px solid #ccc;
		.right{
			padding-left:5px;
			h3{
				padding:0;
				margin:0;
				font-size:16px;
			}
		}
	}
}
</style>