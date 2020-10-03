<template>
	<SubsectionsTitleTemplate>
		<template v-slot:title>
			<slot name="title"></slot>
		</template>
		<template v-slot:content>
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
	div >>> > .titleWrap, div >>> > .titleWrap > span {
		color: var(--color-wine);
	}
</style>
