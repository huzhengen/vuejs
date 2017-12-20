<template>
	<div class="tab1">
		<p>{{tab1}}</p>
		<p>count: {{count}}</p>
	</div>
</template>

<script>
export default{
	name: 'tab1',
	data(){
		return{
			tab1: 'this is tab1'
		}
	},
	computed:{
		count(){
			return this.$store.state.count
		}
	}
}
</script>