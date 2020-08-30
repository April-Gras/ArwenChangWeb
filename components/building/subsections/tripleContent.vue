<template>
	<section class="trippleContentWrapper">
		<div class="title" v-if="$slots.title">
			<slot name="title"></slot>
		</div>
		<div class="subtitle" v-if="$slots.subtitle">
			<slot name="subtitle"></slot>
		</div>
		<div class="text" v-if="$slots.text">
			<slot name="text"></slot>
		</div>
	</section>
</template>
<script lang="ts">
	import Vue from 'vue';
	export default Vue.extend({});
</script>
<style scoped>
	.title {
		margin-bottom: 8px;
		color: var(--color-darker);
		font-size: var(--font-size-regular);
		font-weight: 600;
	}

	.subtitle {
		margin-bottom: 16px;
		color: var(--color-darkest);
		font-size: var(--font-size-regular);
		display: flex;
		flex-direction: column;
	}

	.text {
		display: flex;
		flex-direction: column;
		color: var(--color-darkest);
		opacity: 0.6;
	}
</style>