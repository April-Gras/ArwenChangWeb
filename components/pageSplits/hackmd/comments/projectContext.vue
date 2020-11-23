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
			<template v-slot:title>問題及目標</template>
			<template v-slot:content>
				<div class="content">
					<div class="text">為了提高使用者的筆記貢獻度，嘗試了解使用者在團隊協作的流程中，有哪些溝通的痛點。</div>
					<div class="text">過去沒有有系統地統整團隊協作所碰到的問題，我試著透過使用者研究發現亮點，提出適合的解決方案，協助團隊決定逐步開發或優化產品的方向和順序。</div>
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
					text: '使用者研究、設計完稿、專案管理',
				}, {
					title: '專案期間',
					text: '2019 九 - 十月：定義問題\n2020 一 - 二月：設計規劃',
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