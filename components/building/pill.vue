<template>
	<div class="pillWrap">
		<slot></slot>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
<style scoped>
.pillWrap {
	border: 1px solid var(--color-teal-light);
	box-sizing: border-box;
	border-radius: 6px;
	padding: 8px 16px;
}
</style>