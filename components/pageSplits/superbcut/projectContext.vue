<template>
	<div class="projectContextWrapper">
		<div class="pills largeMarge">
			<BuildingPill
				v-for="(elem, index) in pill_content"
				:key="index"
				class="pillElement"
			>
				<div class="pillTitle gapMarge">{{ elem.title }}</div>
				<div class="pillText preWrap">{{ elem.text }}</div>
			</BuildingPill>
		</div>
		<BuildingSubsectionsWineTitle class="mediumMarge">
			<template #title>專案背景</template>
			<template #content>
				<div>好剪才職能訓練所是為了希望精進自己技術的新進美髮師、實習師，提供精進技術的機會。透過進修學習提升服務品質，改善美髮業獲利，進一步提升美髮產業。</div>
				<div>這個網站提供美髮師一個線上課程學習、購買線下課程講座的平台。</div>
			</template>
		</BuildingSubsectionsWineTitle>
		<BuildingSubsectionsWineTitle>
			<template #title>問題及目標</template>
			<template #content>
				<div>除了改善既有的購買課程流程以外，業主希望也能夠讓更多同業認識好剪才這個品牌。</div>
			</template>
		</BuildingSubsectionsWineTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	
	import BuildingPill from '@/components/building/pill.vue';
	import BuildingSubsectionsWineTitle from '@/components/building/subsections/title/wine.vue';

	export default Vue.extend({
		components: {
			BuildingPill,
			BuildingSubsectionsWineTitle,
		},
		computed: {
			pill_content: function(): { title: string, text: string }[] {
				return [{
					title: '擔任角色及合作對象',
					text: 'UI 設計師。與 1 位 PM 合作',
				}, {
					title: '負責項目',
					text: '操作流程、整理資訊架構、介面完稿',
				}, {
					title: '專案期間',
					text: '2020 一月 ~ 三月',
				}]
			},
		}
	})
</script>
<style scoped>
	.pillTitle {
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		color: var(--color-wine);
	}

	.pills > .pillElement { margin-bottom: 8px; }
	.pills > .pillElement:last-child { margin-bottom: 0px; }
</style>
<style scoped>
	@media screen and (min-width: 1000px) {
		.pills {
			display: grid;
			grid-gap: 32px;
			grid-template-columns: repeat(3, 1fr);
		}

		div.pills > div.pillElement {
			margin-bottom: 0px;
			padding: 32px;
		}
	}
</style>