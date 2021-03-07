<template>
	<div class="oldVersionWrapper">
		<div class="pageWrapper">
			<BuildingHeadersBig class="centerTitle smallTitleMarge">舊版的筆記留言功能</BuildingHeadersBig>
			<BuildingSubsectionsDoubleContent class="mediumMarge">
				<div v-for="(config, index) in doubleContentConfig" :key="index">
					<BuildingHeadersSmall class="bigGapMarge centerTitle">{{ config.title }}</BuildingHeadersSmall>
					<img class="picture" :src="config.pictureUrl" />
				</div>
			</BuildingSubsectionsDoubleContent>
			<div class="bulletPointGripWrapper">
				<BuildingBulletPoint
					class="red"
					v-for="(text, index) in buildPoints"
					:key="index"
					:index="index + 1"
				>{{ text }}</BuildingBulletPoint>
			</div>
			<div class="text">其它：筆記的靜態分享頁無法查閱及撰寫留言，與編輯頁不同步，造成使用者困惑</div>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingHeadersBig from "@/components/building/headers/big.vue"
	import BuildingHeadersSmall from "@/components/building/headers/small.vue"
	import BuildingSubsectionsDoubleContent from "@/components/building/subsections/doubleContent.vue"
	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';

	export default Vue.extend({
		components: {
			BuildingHeadersBig,
			BuildingHeadersSmall,
			BuildingSubsectionsDoubleContent,
			BuildingBulletPoint,
		},
		computed: {
			doubleContentConfig() {
				return [{
					title: "單欄預覽",
					pictureUrl: "/images/Comment-OldVersion-01.png"
				}, {
					title: "雙欄編輯",
					pictureUrl: "/images/Comment-OldVersion-02.png"
				}]
			},
			buildPoints():string[] {
				return [
					"只能對一整段文字留言，無法針對特定詞彙或句子留言討論",
					"展開留言區塊後，會蓋住筆記的目錄列表",
					"由於留言的圖示太不明顯，使用者不容易發現有其他人在這個段落留言，甚至不知道有留言的功能",
					"不知道留言區塊標題左側的箭頭是什麼意思（點擊後可 highlight 留言段落）",
					"筆記雙欄模式、或瀏覽器寬度較窄的狀態，留言顯示區域會蓋到筆記內文，造成閱讀體驗不佳",
					"留言的輸入框是固定大小，使用者在撰寫很長的留言內容時體驗不佳"
				]
			}
		}
	})
</script>
<style scoped>
	.bulletPoints {
		display: grid;
		gap: 16px;
	}

	.title,
	.title > span {
		color: var(--color-teal);
	}

	.centerTitle {
		text-align: center;
		width: 100%;
		display: block;
	}

	.title.regular {
		font-weight: 600;
	}

	.gridWrapper {
		width: 100%;
	}

	.picture {
		width: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	.bulletPointGripWrapper {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr;
		margin-bottom: 16px;
	}
</style>