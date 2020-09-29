<template>
	<div class="finalProductWrapper">
		<div class="makeGrey commentDesign largeMarge">
			<BuildingHeadersBiggest class="overrideLineHeight">
				<div>HackMD</div>
				<div>選字留言功能</div>
			</BuildingHeadersBiggest>
			<img src="/images/Comment-Design.png" class="commentDesign" />
		</div>
		<div class="pageWrapper largeMarge">
			<img class="regularImage bigGapMarge" src="/images/CommentDiagrams.png" />
			<div class="smallOpaCenterText">除了 prototype 以外，我也做了靜態的介面稿，讓工程師了解每一個狀態的介面</div>
		</div>
		<div class="makeGrey largeMarge">
			<div class="deviceWrapper pageWrapper">
				<img class="regularImage" src="/images/macbookgrey_front 1.png" />
				<img class="regularImage" src="/images/iphone8spacegrey_portrait 1.png" />
			</div>
		</div>
		<div class="pageWrapper">
			<BuildingSubsectionsTealTitle>
				<template v-slot:title>反思與學習</template>
				<template v-slot:content>
					<div class="content">
						<BuildingBulletPoint
							v-for="(elem, index) in content"
							:key="index"
							:index="index + 1"
						>
							<span v-html="elem"></span>
						</BuildingBulletPoint>
					</div>
				</template>
			</BuildingSubsectionsTealTitle>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingHeadersBiggest from '@/components/building/headers/biggest.vue';
	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';
	import BuildingSubsectionsTealTitle from '@/components/building/subsections/title/teal.vue';

	export default Vue.extend({
		components: {
			BuildingHeadersBiggest,
			BuildingBulletPoint,
			BuildingSubsectionsTealTitle,
		},
		computed: {
			content() {
				return [
					'<span>若被交付一連串功能需求，</span><b>回頭詢問對方想解決的主要問題是什麼，再來討論解決方案</b>',
					'做完一小段 prototype 之後就給一兩個人看看，彼此對話討論可以幫助找出盲點',
					'<span>文件的目的是為了非同步的溝通，</span><b>給不同角色閱讀的文件有不同的溝通方式</b>',
					'儘早考慮如何追蹤上線後的成效，最好在規劃設計前期就跟工程師討論可行性。因為功能都做好之後再去埋資料的成本比較高',
				]
			}
		}
	})
</script>
<style scoped>
	.makeGrey {
		background-color: var(--color-grey);
		width: 100%;
		position: relative;
	}

	.commentDesign {
		display: flex;
		justify-content: flex-end;
	}

	.commentDesign > img {
		max-height: 800px;
		object-fit: contain;
		object-position: right;
	}

	.overrideLineHeight {
		line-height: 50px;
		position: absolute;
		left: var(--grid-side-pad);
		top: 70px;
	}

	.regularImage {
		width: 100%;
		object-position: center;
		object-fit: contain;
	}

	.deviceWrapper {
		overflow: hidden;
		display: grid;
		grid-template-columns: 8fr 2fr;
		align-items: flex-end;
		padding: 0px var(--grid-gap);
	}

	.content {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 8px;
	}
</style>