<template>
	<h2 class="title biggest">
		<slot></slot>
	</h2>
</template>
<script lang="ts">
	import Vue	from 'vue';

	export default Vue.extend({ });
</script>
<style scoped>
	.biggest {
		font-weight: bold;
		font-size: var(--font-size-title-biggest);
		line-height: 52px;
	}
</style>