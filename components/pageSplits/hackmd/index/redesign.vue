<template>
	<div class="pageRedisignWrapper">
		<BuildingSubsectionsNeutralTitle>
			<template v-slot:title>重新設計</template>
			<template v-slot:content>
				<div class="bigGapMarge">
					<BuildingHeadersSmall class="darkerText gapMarge">框線圖 (Wireframe)</BuildingHeadersSmall>
					<div class="darkerText bigGapMarge">經過討論，我們決定優先解決使用者者 Overview 上難以找到筆記的問題。</div>
					<div class="darkerText">我參考產品架構圖，以及 Design sprint 中各個成員所提出的構想，找出最適合使用者能快速切換空間、並找到筆記的解決方案。繪製了許多草稿後，我們決定採用有側邊欄的版本。</div>
				</div>
				<BuildingSubsectionsDoublePicture
					class="doublePictureContainer mediumMarge"
					:url_set="picture_url_set"
				></BuildingSubsectionsDoublePicture>
			</template>
		</BuildingSubsectionsNeutralTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingHeadersSmall from '@/components/building/headers/small.vue';
	import BuildingSubsectionsNeutralTitle from '@/components/building/subsections/title/neutral.vue';
	import BuildingSubsectionsDoublePicture from '@/components/building/subsections/doublePicture.vue';

	export default Vue.extend({
		components: {
			BuildingHeadersSmall,
			BuildingSubsectionsNeutralTitle,
			BuildingSubsectionsDoublePicture,
		},
		computed: {
			picture_url_set: function() {
				return [
					'/images/OverviewWireframe01.png',
					'/images/OverviewWireframe02.png',
				]
			}
		}
	});
</script>
<style scoped></style>