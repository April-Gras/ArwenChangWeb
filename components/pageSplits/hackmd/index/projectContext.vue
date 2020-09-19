<template>
	<div class="projectContextWrapper">
		<div class="pills largeMarge">
			<BuildingPill
				v-for="(elem, index) in pill_content"
				:key="index"
				class="pillElement"
			>
				<div class="pillTitle">{{ elem.title }}</div>
				<div class="pillText preWrap">{{ elem.text }}</div>
			</BuildingPill>
		</div>
		<BuildingSubsectionsNeutralTitle class="mediumMarge">
			<template v-slot:title>專案背景</template>
			<template v-slot:content>
				<span>目前的使用者們有不同類型的痛點，我們想知道：</span>
				<b>該如何決定優先解決哪些問題？用什麼方式解決最符合使用者的需要？</b>
				<span>我們希望能有效運用已知的資料，有系統地規劃接下來開發的方向。</span>
			</template>
		</BuildingSubsectionsNeutralTitle>
		<BuildingSubsectionsNeutralTitle class="largeMarge">
			<template v-slot:title>問題及目標</template>
			<template v-slot:content>
				<div>開發者面臨管理多個不同專案資料的問題。在使用過程中，如何快速在文件間切換、管理文件，對講求效率的使用者來說是最重要的事。</div>
				<div>我們的目標是優化筆記清單頁，確保使用者能更快地找到、分類筆記，並且為未來開發新功能、整合其它生產力工具做準備。</div>
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