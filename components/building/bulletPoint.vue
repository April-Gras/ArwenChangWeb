<template>
	<div class="bulletPointWrapper">
		<div class="index">
			<span>{{ index }}</span>
		</div>
		<div class="text">
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		props: {
			index: {
				type: Number,
				required: true,
			},
		}
	})
</script>
<style scoped>
	.bulletPointWrapper {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.index {
		margin-right: 8px;
		width: 16px;
		height: 16px;
		font-weight: 600;
		font-size: var(--font-size-small);
		background-color: var(--color-teal-bright);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.index > span {
		transform: translateY(1px);
		color: var(--color-white);
	}

	.text {
		line-height: 24px;
	}

	.red .index { background-color: var(--color-red); }
	.wineBright .index { background-color: var(--color-wine-bright); }
</style>
