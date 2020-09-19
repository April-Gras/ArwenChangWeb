<template>
	<div class="doubleContentWrapper">
        <slot></slot>
	</div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
<style scoped>
	.doubleContentWrapper {
		display: grid;
		position: relative;
		width: 100%;
		grid-template-columns: 1fr;
		grid-gap: 16px;
	}
</style>
<style scoped>
	@media screen and (min-width: 768px) {
		.doubleContentWrapper { grid-template-columns: 1fr 1fr; }
	}
</style>
<style scoped>
	@media screen and (min-width: 1000px) {
		.doubleContentWrapper { grid-gap: 32px; }
	}
</style>