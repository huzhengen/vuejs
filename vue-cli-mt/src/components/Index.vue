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
	}
}
</script>