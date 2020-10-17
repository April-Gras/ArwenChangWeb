<template>
	<div class="bulletPointsWrapper">
		<div class="pageWrapper">
			<BuildingSubsectionsWhiteTitle>
				<template v-slot:title>專案重點</template>
				<template v-slot:content>
					<div class="bulletPoints">
						<BuildingBulletPoint
							class="bulletPoint"
							v-for="(elem, index) in main_points_content"
							:key="index"
							:index="index + 1"
						>
							<span v-html="elem"></span>
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
					'優化既有的留言功能，使筆記中用留言討論的次數成長 250%',
					'建立撰寫需求文件的交付流程，確保和工程師有效溝通，提升團隊協作效率',
					'引入成效追蹤的機制，用數據協助下決策'
				]
			},
		}
	})
</script>
<style scoped>
	.bulletPoint { margin-bottom: 20px; }
	.bulletPoints > .bulletPoint:last-child { margin-bottom: 0px }
</style>