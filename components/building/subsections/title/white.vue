<template>
	<SubsectionsTitleTemplate>
		<template #title>
			<slot name="title"></slot>
		</template>
		<template #content>
			<slot name="content"></slot>
		</template>
	</SubsectionsTitleTemplate>
</template>
<script lang="ts">
	import Vue from 'vue';

	import SubsectionsTitleTemplate from './template.vue';

	export default Vue.extend({
		components: {
			SubsectionsTitleTemplate,
		},
	})
</script>
<style scoped>
	div.subsectionsIndexWrapper >>> .contentWrap,
	div.subsectionsIndexWrapper >>> .titleWrap,
	div.subsectionsIndexWrapper >>> .titleWrap > span {
		color: var(--color-white);
	}

	div.subsectionsIndexWrapper >>> .titleWrap,
	div.subsectionsIndexWrapper >>> .titleWrap > span {
		font-size: var(--font-size-title-big);
	}
</style>
