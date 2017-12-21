<template lang="pug">
	div(class="pug-demo")
		span(class="pug-demo-text") {{data}}
</template>

<script>
	export default({
		name: 'PugDemo',
		data(){
			return {
				data: 'this is PugDemo'
			}
		}
	})
</script>

<style lang="scss">
.pug-demo{
	height:100px;
	line-height:100px;
	background: #ccc;
	text-align: center;
	.pug-demo-text{
		color:#fff;
		font-size:20px;
		font-weight:bold;
	}
}
</style>