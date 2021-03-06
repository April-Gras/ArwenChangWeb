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
		<BuildingSubsectionsTealTitle class="titleMarge">
			<template #title>專案背景</template>
			<template #content>
				<div class="content">
					<div class="text">HackMD 是一個基於 Markdown 語法的即時協作知識庫。自 2016 提供服務以來，使用者持續成長，在 2020 年每月月活躍用戶有 45 萬名，使用者撰寫了超過 260 萬份筆記。用戶遍及台灣、日本、美國及法國、德國等地區。</div>
				</div>
			</template>
		</BuildingSubsectionsTealTitle>
		<BuildingSubsectionsTealTitle>
			<template #title>挑戰</template>
			<template #content>
				<div class="content">
					<div class="text">優化既有的筆記留言功能，讓使用者能更有效率地基於文件內容做溝通討論。</div>
				</div>
			</template>
		</BuildingSubsectionsTealTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	
	import BuildingPill from '@/components/building/pill.vue';
	import BuildingSubsectionsTealTitle from '@/components/building/subsections/title/teal.vue';

	export default Vue.extend({
		components: {
			BuildingPill,
			BuildingSubsectionsTealTitle,
		},
		computed: {
			pill_content: function(): { title: string, text: string }[] {
				return [{
					title: '擔任角色及合作對象',
					text: '產品設計師。與 PO、 3 名工程師合作',
				}, {
					title: '負責項目',
					text: 'UI 及 UX、專案管理',
				}, {
					title: '專案期間',
					text: '2020 年 一 - 二月',
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
		color: var(--color-teal);
	}

	.pills > .pillElement { margin-bottom: 8px; }
	.pills > .pillElement:last-child { margin-bottom: 0px; }

	.content {
		display: grid;
		grid-template: 1fr;
		gap: 4px;
	}

	.content > .text {
		line-height: 24px;
	}
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