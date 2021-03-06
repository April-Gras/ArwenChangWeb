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
		<BuildingSubsectionsNeutralTitle class="largeMarge">
			<template #title>專案背景</template>
			<template #content>
				<span>HackMD 是一個基於 Markdown 語法的即時協作知識庫。自 2016 提供服務以來，使用者持續成長，在 2020 年每月月活躍用戶有 45 萬名，使用者撰寫了超過 260 萬份筆記。用戶遍及台灣、日本、美國及法國、德國等地區。</span>
			</template>
		</BuildingSubsectionsNeutralTitle>
				<BuildingSubsectionsNeutralTitle>
			<template #title>挑戰</template>
			<template #content>
				<span>進一步改善使用體驗，幫助使用者能夠更快更精準地找到文件，並與使用者的工作流程整合得更好。</span>
			</template>
		</BuildingSubsectionsNeutralTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	
	import BuildingPill from '@/components/building/pill.vue';
	import BuildingSubsectionsNeutralTitle from '@/components/building/subsections/title/neutral.vue';

	export default Vue.extend({
		components: {
			BuildingPill,
			BuildingSubsectionsNeutralTitle,
		},
		computed: {
			pill_content: function(): { title: string, text: string }[] {
				return [{
					title: '擔任角色及合作對象',
					text: '產品設計師。\n與 PO、 3 名工程師、設計顧問合作',
				}, {
					title: '負責項目',
					text: '使用者經驗研究、設計完稿、排程管理',
				}, {
					title: '專案期間',
					text: '2019 年四月 - 九月',
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
		color: var(--color-neutral);
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