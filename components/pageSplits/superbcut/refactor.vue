<template>
	<div class="refactorWrapper">
		<BuildingSubsectionsWineTitle class="mediumMarge">
			<template v-slot:title>重新設計</template>
			<template v-slot:content>
				<div class="content">
					<BuildingHeadersSmall class="gapMarge">產品資訊架構（Information Architecture）</BuildingHeadersSmall>
					<div class="gapMarge">現行的設計在導覽列有太多選項，其中有很多重複出現的連結。</div>
					<div class="mediumMarge">透過重新整理產品的資訊架構，分辨出其階層關係，方便在後續的設計上合理擺放連結位置。</div>
					<img class="mediumMarge" src="/images/SuperbCut-IA.png" />
                    <BuildingHeadersSmall class="gapMarge">啟發式評估 (Heuristic Evaluation)</BuildingHeadersSmall>
                    <div class="gapMarge">為了確保重新設計的結果，能夠有效解決目前頁面上的所有問題，我訂定了一些使用者的目標。透過實際操作以完成目標的過程，評估並紀錄過程中所發現的問題。</div>
                    <div class="bigGapMarge">
                        <span>做這項評估的好處是：在產出解決方案時</span>
                        <b>，能夠有明確的改善目標及問題依據，有利於提高產品的可用性。</b>
                    </div>
                    <img class="bigGapMarge" src="/images/SuperbCut-Issues.png">
					<div class="smallOpaCenterText mediumMarge">將不同流程中的問題分類，用截圖、文字描述來紀錄</div>
                    <BuildingHeadersSmall class="gapMarge">設計規範</BuildingHeadersSmall>
                    <img src="/images/SuperbCut-GuideLine.png" />
				</div>
			</template>
		</BuildingSubsectionsWineTitle>
		<BuildingSubsectionsWineTitle>
			<template v-slot:title></template>
			<template v-slot:content>
				<div class="content">
					<BuildingHeadersSmall class="miniMarge"></BuildingHeadersSmall>
					<div class="bigGapMerge">
						<span></span>
						<b></b>
					</div>
					<div class="smallTitleMarge"></div>
				</div>
			</template>
		</BuildingSubsectionsWineTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingHeadersSmall from '@/components/building/headers/small.vue';
	import BuildingSubsectionsWineTitle from '@/components/building/subsections/title/wine.vue';

	export default Vue.extend({
		components : {
			BuildingHeadersSmall,
			BuildingSubsectionsWineTitle,
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
</style>