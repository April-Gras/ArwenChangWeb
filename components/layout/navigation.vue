<template>
	<nav class="navigatorWrapper" :class="{ expand }">
		<BuildingHeadersRegular
			class="bold"
			v-if="!expand"
		>ARWEN CHANG</BuildingHeadersRegular>
		<div class="burger" @click="expand = !expand">
			<transition name="fade" mode="out-in">
				<div
					key="not_expanded"
					class="icon"
					v-if="!expand"
				>a</div>
				<div
					key="expanded"
					class="icon"
					v-else
				>b</div>
			</transition>
		</div>
		<transition name="fade">
			<div
				class="dropDown"
				v-if="expand"
			>
				<div class="pageWrapper navigationHolder">
					<BuildingHeadersBig>作品</BuildingHeadersBig>
					<BuildingHeadersBig>聯絡</BuildingHeadersBig>
					<BuildingHeadersBig>關於</BuildingHeadersBig>
				</div>
			</div>
		</transition>
	</nav>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingHeadersRegular from '@/components/building/headers/regular.vue';
	import BuildingHeadersBig from '@/components/building/headers/big.vue';

	export default Vue.extend({
		components: {
			BuildingHeadersBig,
			BuildingHeadersRegular,
		},
		data: function() {
			return ({
				expand: false as Boolean,
			});
		},
		mounted: function() {},
	});
</script>
<style scoped>
	.navigatorWrapper {
		position: sticky;
		top: 0px;
		padding: var(--grid-gap) 14px;
		background-color: var(--color-white);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 52px;
		box-sizing: border-box;
	}

	.expand.navigatorWrapper {
		justify-content: flex-end;
	}

	.burger {
		width: 24px;
		height: 24px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: pink;
		cursor: pointer;
	}

	.dropDown {
		position: absolute;
		top: 100%;
		left: 0px;
		width: 100%;
		height: calc(100vh - 64px);
		background-color: var(--color-white);
	}

	.navigationHolder {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		margin-top: 40px;
	}

	.navigatorWrapper > .bold {
		line-height: 15px;
	}

	.navigationHolder > * { margin-bottom: 40px; }
	.navigationHolder > *:last-child { margin-bottom: 0px; }
</style>