<template>
	<div class="makeGrey">
		<BuildingSection class="pageWrapper topContent">
		<BuildingHeadersBigger class="titleMarge">
			<span>HackMD</span>
			<br/>
			<span>Overview 重新設計</span>
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
.header {
	margin-bottom: 60px;
}

.topContent {
	text-align: center;
	padding-top: 64px;
	padding-bottom: 0px;
	margin-bottom: 0px;
	display: flex;
	flex-direction: column;
}

.topContent > img {
	width: 100%;
	max-width: 787px;
	position: relative;
	object-position: center;
	object-fit: contain;
	margin: 0px auto;
	filter: drop-shadow(var(--shadow-picture));
}
</style>