<template>
	<div class="cardNavigationWrapper">
		<BuildingHeadersBigger class="upperTitle mediumMarge">其它作品</BuildingHeadersBigger>
		<div class="cardsOuterWrapper">
			<BuildingCardColor
				class="card"
				v-for="(card) in available"
				:key="card.path"
				:to="card.path"
				:color="card.color"
			>
				<BuildingHeadersRegular class="head preWrap">{{ card.text }}</BuildingHeadersRegular>
			</BuildingCardColor>
		</div>	
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingCardColor from '@/components/building/cards/color.vue';
	import BuildingHeadersRegular from '@/components/building/headers/regular.vue';
	import BuildingHeadersBigger from '@/components/building/headers/bigger.vue';

	export default Vue.extend({
		components: {
			BuildingCardColor,
			BuildingHeadersBigger,
			BuildingHeadersRegular,
		},
		computed: {
			available: function() {
				return [{
					color: 'grey',
					text: 'HackMD\nOverview 重新設計',
					path: '/hackmd/',
				}, {
					color: 'teal-bg',
					text: 'HackMD\n團隊協作留言功能',
					path: '/hackmd/comments/',
				}, {
					color: 'wine-bg',
					text: '好剪才職能訓練所\n課程購買流程',
					path: '/superbcut/',
				}, {
					color: 'brown-bg',
					text: '祐全貿易\n形象網站設計',
					path: '/youchuan/',
				}].filter(e => e.path !== this.$route.path).slice(0, 3);
			},
		}
	});
</script>
<style scoped>
	.cardsOuterWrapper {
		display: grid;
		gap: 16px;
		grid-template: 1fr;
	}

	.card {
		padding: 32px;
		border-radius: 4px;
	}

	.head { font-weight: 600; }
	.upperTitle { text-align: center; }

	@media screen and (min-width: 1000px) {
		.cardsOuterWrapper {
			grid-template-columns: repeat(3, 1fr);
			gap: 32px;
		}
	}
</style>