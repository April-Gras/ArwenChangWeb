<template>
	<div class="pageReflexionsWrapper">
		<BuildingSubsectionsTitleNeutral class="largeMarge">
			<template v-slot:title>反思與學習</template>
			<template v-slot:content>
				<div class="outerPillWrapper">
					<BuildingBulletPoint
						v-for="(html, index) in content"
						:key="index"
						:index="index + 1"
					>
						<span v-html="html"></span>
					</BuildingBulletPoint>
				</div>
			</template>
		</BuildingSubsectionsTitleNeutral>
		<BuildingSubsectionsTitleNeutral>
			<template v-slot:title>持續更迭</template>
			<template v-slot:content>
				<div class="darkerText bigGapMarge">至今我們也在不斷收集使用者的回饋，持續改良設計，讓操作體驗更好用。</div>
				<img class="picture" src="/images/Overview-RightNow.png" />
			</template>
		</BuildingSubsectionsTitleNeutral>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';
	import BuildingSubsectionsTitleNeutral from '@/components/building/subsections/title/neutral.vue';

	export default Vue.extend({
		components: {
			BuildingBulletPoint,
			BuildingSubsectionsTitleNeutral
		},
		computed: {
			content: function() {
				return [
					'在規劃初期，盤點手上資源、確認商業目標，能讓團隊用更全面的觀點去考慮優先度、解決問題的方法',
					'任何階段都要<b>聽取使用者的聲音</b>並快速更迭，確保我們有在解決問題的道路上',
					'<b>要理解研究方法的目標是什麼，</b>照做書上的流程卻不知道為什麼，容易卡關或失焦',
					'定義清楚產品的資訊架構，才能因應未來的擴充需求'
				];
			}
		}
	});
</script>
<style scoped>
	.outerPillWrapper {
		display: grid;
		gap: 16px;
	}

	.outerPillWrapper > div {
		line-height: 24px;
	}

	.picture {
		display: block;
		width: 100%;
		object-fit: contain;
		display: block;
		object-position: center;
	}
</style>