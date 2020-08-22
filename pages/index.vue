<template>
	<div class="pageWrapper">
		<div class="titleContainer" v-if="false">
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
		<div class="gridWrapper">
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
			<div class="elem"></div>
		</div>
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
	.gridWrapper {
		display: grid;
		grid-template-columns: repeat(var(--grid-count), 1fr);
		grid-gap: var(--grid-gap);
	}

	.gridWrapper > .elem {
		background-color: red;
		height: 150px;
	}
</style>