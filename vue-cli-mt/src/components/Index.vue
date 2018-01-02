<template>
	<div class="index">
		<swipe></swipe>
		<type-item></type-item>
		<shop-list></shop-list>
	</div>
</template>

<script>
import Swipe from '@/components/Swipe'
import TypeItem from '@/components/TypeItem'
import ShopList from '@/components/ShopList'
export default{
	name: 'Index',
	components: {
		'swipe': Swipe,
		'type-item': TypeItem,
		'shop-list': ShopList,
	},
	methods: {
		_initShopData(){
			this.axios.get('/api/shops', {
				params:{}
			}).then(res=>{
				if(res.data.code == 0){
					this.shopList = res.data.data
				}
			}).catch(error=>{
				console.log(error)
			})
		}
	},
	mounted(){
		this._initShopData()
	}
}
</script>