<template>
	<div class="index">
		<swipe></swipe>
		<type-item></type-item>
	</div>
</template>

<script>
import Swipe from '@/components/Swipe'
import TypeItem from '@/components/TypeItem'
export default{
	name: 'Index',
	components: {
		'swipe': Swipe,
		'type-item': TypeItem,
	}
}
</script>