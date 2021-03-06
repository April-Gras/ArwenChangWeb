<template>
	<div class="refactorWrapper">
		<BuildingSubsectionsTealTitle class="mediumMarge">
			<template #title>重新設計</template>
			<template #content>
				<div class="content">
					<BuildingHeadersSmall class="gapMarge">確定功能開發的規模</BuildingHeadersSmall>
					<div class="gapMarge">蒐集整理使用者反應的易用性問題，將痛點整理成 User story。</div>
					<div class="gapMarge">依據商業目標、開發資源來決定開發多少內容即可推出新版本，並把尚未開發的優化計畫紀錄下來。</div>
					<div class="bigGapMarge">
						<span>在設計第一版時，也會</span>
						<b>一併考量相關功能的流程及設計，避免後續功能擴充時大幅度調整介面，讓使用者要重新學習且造成困惑。</b>
					</div>
					<img class="mediumMarge" src="/images/Comment-Scope.png" />
				</div>
			</template>
		</BuildingSubsectionsTealTitle>
		<BuildingSubsectionsTealTitle class="mediumMarge">
			<template #title>重新設計</template>
			<template #content>
				<div class="content">
					<BuildingHeadersSmall class="gapMarge">使用者流程(User flow)</BuildingHeadersSmall>
					<div class="gapMarge">在前期階段，透過不同 User flow 的流程展示，跟開發者討論技術限制，找出最適合的解決方案。</div>
					<div class="bigGapMarge">確認完操作流程後，根據目前的資訊架構系統，我開始著手在紙上畫出草稿框線圖，再跟團隊成員討論修正。在多次更改之後，使用者介面被調整得更為精簡直覺。</div>
					<img class="bigGapMarge" src="/images/Comment-UserFlow.png" />
					<img class="bigGapMarge" src="/images/Comment-MockUp.png" />
					<div class="smallOpaCenterText mediumMarge">根據紙上的流程，用既有的元件快速 mock-up 成初步的草稿，以此跟團隊成員討論</div>
					<BuildingHeadersSmall class="gapMarge">Prototype</BuildingHeadersSmall>
					<div class="bigGapMarge">為了能幫助大家了解實際操作起來的感受，我透過 Figma 製作了高擬真可操作原形（high-fidelity prototyping）以此做動態效果上的確認。</div>
					<img class="bigGapMarge" src="/images/CommentPrototype.gif" />
					<div class="smallOpaCenterText">Prototype 主要是用來確認流程、互動方式，所以設計稿並沒有做得很精準</div>
				</div>
			</template>
		</BuildingSubsectionsTealTitle>
		<BuildingSubsectionsTealTitle>
			<template #title>設計交付</template>
			<template #content>
				<div class="content">
					<BuildingHeadersSmall class="gapMarge">驗收標準（Acceptance Criteria）</BuildingHeadersSmall>
					<div class="bigGapMarge">
						<span>在開發功能複雜的功能時，為了能避免溝通失誤，也減少佔用人腦記憶太多資訊，我會在完成設計稿後馬上撰寫此功能的驗收條件。</span>
						<b>盡可能使用開發者好理解的描述方式，列出精準的需求。</b>
					</div>
					<div class="smallTitleMarge">在寫完驗收標準後，我會和團隊內的工程師逐條檢視，確保雙方理解是一致無誤的，到這個步驟才算是完成設計交付。</div>
					<div class="bigGapMarge">驗收標準的運用時機：</div>
					<div class="bulletPointsWrapper bigGapMarge">
						<BuildingBulletPoint
							v-for="(content, index) in bullet_content"
							:key="index"
							:index="index + 1"
						>{{ content }}</BuildingBulletPoint>
					</div>
					<div class="asymetricGridWrapper">
						<img class="picture" src="/images/Comment-AcceptanceCriteria-01.png" />
						<img class="picture" src="/images/Comment-AcceptanceCriteria-02.png" />
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
					'交付設計稿給工程師前，檢查流程是否有疏漏',
					'工程師實作及拆分成任務的依據文件',
					'實作功能完成後，依照驗收標準的清單逐一測試',
				]
			},
		},
	})
</script>
<style scoped>
.placeholder, img {
	display: block;
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

.content {
	line-height: 24px;
}

.placeholder {
	height: 440px;
	background-color: var(--color-grey);
}

.picture {
	display: block;
	object-position: cover;
	object-position: center;
}

.asymetricGridWrapper {
		display: grid;
		position: relative;
		width: 100%;
		grid-template-columns: 1fr;
		grid-gap: 16px;
}
</style>
<style scoped>
	@media screen and (min-width: 768px) {
		.asymetricGridWrapper { grid-template-columns: 6fr 4fr; }
	}
</style>
<style scoped>
	@media screen and (min-width: 1000px) {
		.asymetricGridWrapper { grid-gap: 32px; }
	}
</style>