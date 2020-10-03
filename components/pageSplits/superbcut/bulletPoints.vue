<template>
	<div class="bulletPointsWrapper">
		<div class="pageWrapper">
			<BuildingSubsectionsWhiteTitle>
				<template v-slot:title>專案重點</template>
				<template v-slot:content>
					<div class="bulletPoints">
						<BuildingBulletPoint
							class="bulletPoint wineBright"
							v-for="(elem, index) in main_points_content"
							:key="index"
							:index="index + 1"
						>
							<span>{{ elem }}</span>
						</BuildingBulletPoint>
					</div>
				</template>
			</BuildingSubsectionsWhiteTitle>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';
	import BuildingSubsectionsWhiteTitle from '@/components/building/subsections/title/white.vue';

	export default Vue.extend({
		components: {
			BuildingBulletPoint,
			BuildingSubsectionsWhiteTitle,
		},
		computed: {
			main_points_content: function(): string[] {
				return [
					'透過簡易的啟發式評估 (Heuristic Evaluation)，找出目前流程中可優化的部分，使流程設計符合基礎的易用性原則',
					'透過低擬真原型與業主溝通使用者操作流程、介面調整事項，確保符合業主需求',
					'重新設計整體設計語言，使其符合企業形象'
				]
			},
		}
	})
</script>
<style scoped>
	.bulletPoint { margin-bottom: 20px; }
	.bulletPoints > .bulletPoint:last-child { margin-bottom: 0px }
</style>