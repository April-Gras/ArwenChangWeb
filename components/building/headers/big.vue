<template>
	<h3 class="big title">
		<slot></slot>
	</h3>
</template>
<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({});
</script>
<style scoped>
	.big {
		font-weight: bold;
		font-size: var(--font-size-title-big);
	}
</style>