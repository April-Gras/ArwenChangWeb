<template>
	<button class="button regular" @click="$emit('click')">
		<slot></slot>
	</button>
</template>
<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({});
</script>
<style scoped>
	.regular {
		background-color: var(--color-teal);
		color: var(--color-white);
		border: 1px solid var(--color-teal);
	}

	.regular:hover {
		color: var(--color-teal);
		background-color: var(--color-white);
	}
</style>

<style scoped src="./shared.css"></style>