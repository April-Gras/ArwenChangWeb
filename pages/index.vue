<template>
	<div class="pageWrapper">
		<BuildingHeadersRegular>
			<span>Header H4</span>
		</BuildingHeadersRegular>
		<BuildingHeadersBig>
			<span>Header H3</span>
		</BuildingHeadersBig>
		<BuildingHeadersBigger>
			<span>Header H2</span>
		</BuildingHeadersBigger>
		<BuildingHeadersBiggest>
			<span>Header H1</span>
		</BuildingHeadersBiggest>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingHeadersBig		from '@/components/building/headers/big.vue';
	import BuildingHeadersBigger	from '@/components/building/headers/bigger.vue';
	import BuildingHeadersBiggest	from '@/components/building/headers/biggest.vue';
	import BuildingHeadersRegular	from '@/components/building/headers/regular.vue';

	export default Vue.extend({
		components	: {
			BuildingHeadersBig,
			BuildingHeadersBigger,
			BuildingHeadersBiggest,
			BuildingHeadersRegular,
		},
	});
</script>
<style scoped>
	.pageWrapper > * {
		margin-bottom: 8px;
		padding-bottom: 8px;
		border-bottom: 1px solid #;
	}

	.pageWrapper {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
	}
</style>