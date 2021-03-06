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
	div >>> .titleWrap, div >>> .titleWrap > span {
		color: var(--color-teal);
	}
</style>
