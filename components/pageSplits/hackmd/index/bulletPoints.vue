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
					'<span>運用不同研究方法廣泛蒐集資訊，從多個面向分析待解決痛點的優先順序</span>',
					'<span>邀請使用者進行易用性測試，</span><b>確保新設計能有效解決使用者的困擾，再請開發團隊實作上線</b>',
					'<b>建立有系統地搜集使用者回饋的方式，</b><span>提供產品更迭方向的參考</span>'
				]
			},
		}
	})
</script>
<style scoped>
	.bulletPoints {
		display: grid;
		gap: 16px;
	}
</style>