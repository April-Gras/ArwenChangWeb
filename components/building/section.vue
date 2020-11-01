<template>
	<section class="section">
		<slot></slot>
	</section>
</template>
<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({});
</script>
<style scoped>
	.section {
		padding-top: 60px;
		padding-bottom: 60px;
		position: relative;
	}

	.section:before:not(.nobar) {
		position: absolute;
		content: '';
		left: calc(var(--grid-side-pad) * -1);
		bottom: 0px;
		width: 100vw;
		height: 1px;
		background-color: var(--color-teal-light);
	}
</style>