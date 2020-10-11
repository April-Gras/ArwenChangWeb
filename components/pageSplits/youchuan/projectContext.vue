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
		<BuildingSubsectionsBrownTitle class="mediumMarge">
			<template v-slot:title>專案背景</template>
			<template v-slot:content>
				<div>依照業主的需求，設計一款企業網站。現有的臺灣機械貿易商的網頁都比較老舊，業主希望能夠參考日本或歐美的貿易網站，用較為明亮、現代的設計呈現企業形象。</div>
				<div>業主希望能夠容易讓消費者用電子郵件聯繫到他，另外也依照紙本的機械型錄，清楚呈現不同機具的規格。</div>
			</template>
		</BuildingSubsectionsBrownTitle>
		<BuildingSubsectionsBrownTitle>
			<template v-slot:title>視覺語言</template>
			<template v-slot:content>
				<div class="content">
					<img class="picture" src="/images/YouChuan-GuideLine.png"/>
				</div>
			</template>
		</BuildingSubsectionsBrownTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';
	
	import BuildingPill from '@/components/building/pill.vue';
	import BuildingSubsectionsBrownTitle from '@/components/building/subsections/title/brown.vue';

	export default Vue.extend({
		components: {
			BuildingPill,
			BuildingSubsectionsBrownTitle,
		},
		computed: {
			pill_content(): { title: string, text: string }[] {
				return [{
					title: '擔任角色及合作對象',
					text: '網頁設計師。與 1 名 PM 合作',
				}, {
					title: '負責項目',
					text: '設計完稿、靜態網站切版',
				}, {
					title: '專案期間',
					text: '2017 約',
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
		color: var(--color-brown);
	}

	.pills > .pillElement { margin-bottom: 8px; }
	.pills > .pillElement:last-child { margin-bottom: 0px; }
	.picture {
		width: 100%;
		position: relative;
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