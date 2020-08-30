<template>
	<h4 class="regular title">
		<slot></slot>
	</h4>
</template>
<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
	});
</script>
<style scoped>
	.regular {
		font-size: var(--font-size-title-regular);
	}
</style>