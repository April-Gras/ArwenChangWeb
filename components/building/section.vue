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
		border-bottom: 1px solid var(--color-main-one-light);
	}
</style>