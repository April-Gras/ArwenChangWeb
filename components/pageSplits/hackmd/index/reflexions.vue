<template>
	<div class="pageReflexionsWrapper">
		<BuildingSubsectionsTitleNeutral class="mediumMarge">
			<template v-slot:title>持續更迭</template>
			<template v-slot:content>
				<div class="darkerText bigGapMarge">MVP 版本上線後，我們在使用者容易發現的地方附上回饋表單的選項，積極聽取他們試用後的第一手回饋，並追蹤多少人不滿意換回舊版。透過 NPS (淨推薦值) 的方式量化使用者滿意程度。</div>
				<div class="darkerText bigGapMarge">再下一次的 sprint 裡，我們推出第二版上線並在一個月內全面切換為新版介面。然而優化的旅程至今仍然在進行中。</div>
				<img class="picture mediumMarge" src="/images/HackMD-Feedback_1.png" />
				<div class="darkerText bigGapMarge">至今仍在持續改良設計，提供使用者更好的操作體驗。</div>
				<img class="picture" src="/images/Overview-RightNow.png" />
			</template>
		</BuildingSubsectionsTitleNeutral>
		<BuildingSubsectionsTitleNeutral>
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