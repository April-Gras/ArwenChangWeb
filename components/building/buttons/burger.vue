<template>
	<div class="burgerWrapper" :class="{ expanded }">
		<div class="bar top"/>
		<div class="bar mid"/>
		<div class="bar bot"/>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		props: {
			expanded: {
				type: Boolean,
				required: true,
			},
		},
	})
</script>
<style scoped>
	.burgerWrapper {
		width: 20px;
		height: 20px;
		position: relative;
	}

	.bar {
		width: 20px;
		height: 4px;
		border-radius: 1px;
		background-color: var(--color-darkest);
		transition: 0.15s;
		position: absolute;
		left: 0px;
	}

	.top { top: 0px; }
	.mid { top: calc(50% - 2px); }
	.bot { bottom: 0px; }

	.expanded .top {
		transform-origin: center left;
		transform: rotate(45deg) scale(1.1);
		background-color: #86878B;
	}

	.expanded .bot {
		transform-origin: center left;
		transform: rotate(-45deg) scale(1.1);
		background-color: #86878B;
	}

	.expanded .mid {
		transform: scale(0);
	}
</style>