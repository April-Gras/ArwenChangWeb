<template>
	<h2 class="title bigger">
		<slot></slot>
	</h2>
</template>
<script lang="ts">
	import Vue	from 'vue';

	export default Vue.extend({ });
</script>
<style scoped>
	.bigger {
		font-weight: 700;
		font-size: var(--font-size-title-bigger);
		line-height: 40px;
	}
</style>