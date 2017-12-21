<template>
	<div class="tab1">
		<div class="store-demo">
	        <button @click="addCount">click</button>
	        <!-- <p v-text="count"></p> -->
	    </div>
		<p>{{tab1}}</p>
		<p>count: {{count}}</p>
	</div>
</template>

<script>
export default{
	name: 'Tab1',
	data(){
		return{
			tab1: 'this is tab1'
		}
	},
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