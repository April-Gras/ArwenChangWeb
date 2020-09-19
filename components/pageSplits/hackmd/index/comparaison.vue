<template>
	<div class="pageComparaisonWrapper">
		<div class="pageWrapper">
			<BuildingSubsectionsDoubleContent class="doubleContentOuterWrapper">
				<div
					class="content"
					v-for="(elem, config_index) in config"
					:key="config_index"
				>
					<div class="title bigGapMarge">{{ elem.title }}</div>
					<img :src="elem.img_url" class="mediumMarge" />
					<div class="bulletPointsOuterWrapper ">
						<BuildingBulletPoint
							:class="{ red : config_index === 0 }"
							v-for="(point_content, index) in elem.bullet_points"
							:index="index + 1"
							:key="index"
						>{{ point_content }}</BuildingBulletPoint>
					</div>
				</div>
			</BuildingSubsectionsDoubleContent>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';
	import BuildingSubsectionsDoubleContent from '@/components/building/subsections/doubleContent.vue';

	export default Vue.extend({
		components: {
			BuildingBulletPoint,
			BuildingSubsectionsDoubleContent,
		},
		computed: {
			config: function() {
				return [{
					title: '舊版',
					img_url: '/images/Overview-OldVersion.png',
					bullet_points: [
						'左上角的 LOGO 和 Intro 都會連到產品的 Landing page，可以只保留一個項目即可',
						'使用者登入後會看到自己的歷史瀏覽清單，無法分辨哪些是自己建立的筆記、哪些為他人的筆記',
						'新增筆記的按鈕很不明顯，甚至右側的帳戶頭像更為顯眼',
						'搜尋筆記標籤、標題分成兩個輸入框，造成使用者困惑',
						'僅顯示圖示的按鈕不夠直覺，難以辨識其功能',
						'卡片留白過大，單一畫面可瀏覽的項目數量很少 且卡片上的標題置中，造成在瀏覽多篇時視線需要上下移動，尋找的過程不夠流暢',
					]
				}, {
					title: '新版',
					img_url: '/images/Overview-NewVersion.png',
					bullet_points: [
						'左上角強調使用者目前所在的工作空間，點擊可切換不同的團隊空間',
						'使用者登入後會優先看到自己擁有的筆記清單',
						'強調新增筆記的按鈕，另外也可以透過右側選單從範本匯入內容',
						'精簡搜尋框數量，並提示可用快捷鍵迅速輸入',
						'分頁選項以圖示搭配文字描述，使用者可更快理解該項的用途',
						'卡片字級、留白做適當調整，並讓標題統一置左對齊，讓瀏覽體驗變好',
					]
				}]
			},
		}
	})
</script>
<style scoped>
	img {
		width: 100%;
		object-position: center;
		object-fit: contain;
		position: relative;
	}

	.bulletPointsOuterWrapper {
		display: grid;
		grid-gap: 8px;
	}

	.pageWrapper {
		padding: 60px 0px;
	}

	.title {
		text-align: center;
		color: var(--color-neutral);
	}

	.doubleContentOuterWrapper { grid-gap: 40px 32px; }
</style>