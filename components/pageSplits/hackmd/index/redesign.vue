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
				<div class="mediumMarge">
					<BuildingHeadersSmall class="darkerText gapMarge">重新定義功能區塊</BuildingHeadersSmall>
					<div class="darkerText bigGapMarge">我們發現頁面上有太多項目，過去開發新功能都是直接找個空位塞，沒有考量到使用者找尋時是否流暢。</div>
					<div class="darkerText bigGapMarge">重新定義不同區塊的目標，除了能夠讓每個按鈕分門別類，更重要的是讓使用者順利找到需要的功能。未來即將推出的各種新功能，也能找到合理的位置擺放。</div>
					<img src="/images/DefineBlock.png" class="defineImage" />
				</div>
				<div class="mediumMarge">
					<BuildingHeadersSmall class="darkerText gapMarge">Prototype</BuildingHeadersSmall>
					<div class="darkerText bigGapMarge">在梳理過操作流程，且決定大致的設計方向後，我產出一版 prototype 讓團隊成員試用獲取回饋。</div>
					<div class="darkerText bigGapMarge">過去我常會利用紙上草稿來跟團隊成員溝通，這次試著透過簡單的 prototype 來討論，因為能夠實際操作、元件比例也接近最後完稿的狀態，成員可以更好想像完成後的樣子，避免焦點發散。</div>
					<img class="bigGapMarge" src="/images/OverviewPrototype-GIF.png" />
				</div>
				<div>
					<BuildingHeadersSmall class="darkerText gapMarge">易用性測試（Usability test）</BuildingHeadersSmall>
					<div class="darkerText bigGapMarge">
						<span>為了</span>
						<b>驗證新的設計能有效解決目前使用者提及的問題，</b>
						<span>與 7 名受測者進行了線上易用性測試。我紀錄了他們的操作過程，並請他們在操作完畢後分享當時的感受，作為修正設計的參考。</span>
					</div>
					<img class="bigGapMarge" src="/images/Overview-UsabilityTest.png" />
					<div class="smallOpaCenterText">我會請受測者分享螢幕畫面，逐一進行操作任務</div>
				</div>
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
<style scoped>
	img {
		width: 100%;
		position: relative;
		object-fit: contain;
		object-position: center;
	}
</style>