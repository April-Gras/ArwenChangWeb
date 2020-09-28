<template>
	<div class="refactorWrapper">
		<BuildingSubsectionsTealTitle class="mediumMarge">
			<template v-slot:title>重新設計</template>
			<template v-slot:content>
				<div class="content">
					<BuildingHeadersSmall class="miniMarge">使用者流程(User flow)</BuildingHeadersSmall>
					<div class="gapMarge">在前期階段，透過不同 User flow 的流程展示，跟開發者討論技術限制，找出最適合的解決方案。</div>
					<div class="mediumMarge">確認完操作流程後，根據目前的資訊架構系統，我開始著手在紙上畫出草稿框線圖，再跟團隊成員討論修正。在多次更改之後，使用者介面被調整得更為精簡直覺。</div>
					<img class="bigGapMarge" src="/images/Comment-UserFlow.png" />
					<img class="bigGapMarge" src="/images/Comment-MockUp.png" />
					<div class="smallOpaCenterText mediumMarge">根據紙上的流程，用既有的元件快速 mock-up 成初步的草稿，以此跟團隊成員討論</div>
					<BuildingHeadersSmall class="miniMarge">Prototype</BuildingHeadersSmall>
					<div class="bigGapMarge">為了能幫助大家了解實際操作起來的感受，我透過 Figma 製作了高擬真可操作原形（high-fidelity prototyping）以此做動態效果上的確認。</div>
					<img class="bigGapMarge" src="/images/CommentPrototype-GIF.png" />
					<div class="smallOpaCenterText">Prototype 主要是用來確認流程、互動方式，所以設計稿並沒有做得很精準</div>
				</div>
			</template>
		</BuildingSubsectionsTealTitle>
		<BuildingSubsectionsTealTitle>
			<template v-slot:title>設計交付</template>
			<template v-slot:content>
				<div class="content">
					<BuildingHeadersSmall class="miniMarge">驗收標準（Acceptance Criteria）</BuildingHeadersSmall>
					<div class="bigGapMerge">
						<span>在開發功能複雜的功能時，為了能避免溝通失誤，也減少佔用人腦記憶太多資訊，我會在完成設計稿後馬上撰寫此功能的驗收條件。</span>
						<b>盡可能使用開發者好理解的描述方式，列出精準的需求。</b>
					</div>
					<div class="smallTitleMarge">在寫完驗收標準後，我會和團隊內的工程師逐條檢視，確保雙方理解是一致無誤的，到這個步驟才算是完成設計交付。</div>
					<div class="bigGapMarge">驗收標準的作用：</div>
					<div class="bulletPointsWrapper">
						<BuildingBulletPoint
							v-for="(content, index) in bullet_content"
							:key="index"
							:index="index + 1"
						>{{ content }}</BuildingBulletPoint>
					</div>
				</div>
			</template>
		</BuildingSubsectionsTealTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingHeadersSmall from '@/components/building/headers/small.vue';
	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';
	import BuildingSubsectionsTealTitle from '@/components/building/subsections/title/teal.vue';

	export default Vue.extend({
		components : {
			BuildingBulletPoint,
			BuildingHeadersSmall,
			BuildingSubsectionsTealTitle,
		},
		computed: {
			bullet_content : function() {
				return [
					'幫助我自己在交付前，檢查有哪些部分想得不夠清楚',
					'開發者可以直接依據此列表實作，若有問題也能很快基於文件做討論、修改',
					'開發者實作功能完成後，可以依據這份驗收標準清單逐一測試驗收',
				]
			},
		},
	})
</script>
<style scoped>
img {
	width: 100%;
	overflow: hidden;
	object-fit: contain;
	object-position: center;
}

.bulletPointsWrapper {
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 8px;
	width: 100%;
}
</style>