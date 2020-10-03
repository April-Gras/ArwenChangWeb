<template>
	<div class="makeWineLight">
		<BuildingSection class="pageWrapper pageTopContent">
			<BuildingHeadersBigger class="titleMarge">
				<span>好剪才職能訓練所</span>
				<br/>
				<span>課程購買流程</span>
			</BuildingHeadersBigger>
			<img src="/images/SuperbCut-MainPic.png">
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
	width: 100%;
	max-width: 787px;
	position: relative;
	object-position: center;
	object-fit: contain;
	margin: 0px auto;
	filter: drop-shadow(var(--shadow-picture));
}

.titleMarge {
	color: #575153;
}
</style>