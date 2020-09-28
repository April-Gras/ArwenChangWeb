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
		<BuildingSubsectionsTealTitle class="mediumMarge">
			<template v-slot:title>專案背景</template>
			<template v-slot:content>
				<div>既有的留言功能只能對一段文字段落留言，不少使用者在協作過程中，時常有針對特定字串做討論的需求。</div>
				<div>為了提供使用者更好的留言體驗，修改重點著重在能夠選取特定字串做留言討論，並有基礎的權限控管、設定留言狀態（此留言已被解決、隱藏留言）。</div>
			</template>
		</BuildingSubsectionsTealTitle>
		<BuildingSubsectionsTealTitle>
			<template v-slot:title>問題及目標</template>
			<template v-slot:content>
				<div>我們的目標是透過優化過去的留言功能，讓使用者能更直覺地基於文件內容互動、討論。</div>
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
					text: '設計完稿、專案管理',
				}, {
					title: '專案期間',
					text: '2020 設計規劃 1 個月、開發 3 個月',
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