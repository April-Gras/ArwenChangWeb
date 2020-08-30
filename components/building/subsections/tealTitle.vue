<template>
	<div class="subsectionsTealTitleWrapper">
		<div class="titleWrap">
			<slot name="title"></slot>
		</div>
		<div class="contentWrap">
			<slot name="content"></slot>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({});
</script>
<style scoped>
.subsectionsTealTitleWrapper {
	width: 100%;
	display: block;
	position: relative;
}

.titleWrap { margin-bottom: 16px; }

.titleWrap, .titleWrap > span {
	color: var(--color-teal);
	font-weight: 600;
	font-size: var(--font-size-regular);
}
</style>
<style scoped>
@media screen and (min-width: 1000px) {
	.subsectionsTealTitleWrapper {
		display: grid;
		grid-template-columns: 2fr 10fr;
		grid-gap: var(--grid-gap);
	}

	.titleWrap { margin-bottom: 0px; }
}
</style>