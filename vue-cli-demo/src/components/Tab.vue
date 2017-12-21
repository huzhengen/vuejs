<template>
	<div class="tab">
	    <div class="tab_item">
	        <router-link to="/">index</router-link>
	    </div>
	    <div class="tab_item">
	        <router-link to="/tab1">tab1</router-link>
	    </div>
	</div>
</template>

<script>
	export default({
		name: 'Tab',
		data(){
			return {
				data: 'this is tab'
			}
		}
	})
</script>
<style>
    .tab{
        width: 100%;
        height: 30px;
        line-height: 30px;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .tab_item{
        width: 50%;
        box-sizing: border-box;
        border: 1px solid #ccc;
    }
</style>