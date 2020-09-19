<template>
	<h5 class="small title">
		<slot></slot>
	</h5>
</template>
<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
	});
</script>
<style scoped>
	.small {
        font-size: var(--font-size-regular);
        font-weight: 600;
	}
</style>
<style scoped src="./shared.css"></style>