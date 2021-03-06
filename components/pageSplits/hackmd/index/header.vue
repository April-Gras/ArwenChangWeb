<template>
	<div class="makeGrey">
		<BuildingSection class="pageWrapper pageTopContent">
			<BuildingHeadersBigger class="titleMarge">
				<span>HackMD</span>
				<br/>
				<span>強化使用者體驗</span>
			</BuildingHeadersBigger>
			<img src="/images/HackMD-Overview-MainPic.png">
		</BuildingSection>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingSection from '@/components/building/section.vue';
	import BuildingHeadersBigger from '@/components/building/headers/bigger.vue';

	export default Vue.extend({
		components: {
			BuildingSection,
			BuildingHeadersBigger,
		}
	})
</script>
<style scoped>
.pageTopContent > img {
	display: block;
	width: 100%;
	position: relative;
	object-position: center;
	object-fit: contain;
	margin: 0px auto;
	filter: drop-shadow(var(--shadow-picture));
}
</style>