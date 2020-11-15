<template>
	<div class="oldVersionWrapper">
		<div class="pageWrapper">
			<BuildingSubsectionsWineTitle>
				<template v-slot:title>舊版</template>
				<template v-slot:content>
					<div class="content">
						<img class="mediumMarge picture" src="/images/SuperbCut-OldDesign.png" />
						<div class="bulletPointsWrapper">
							<BuildingBulletPoint
								v-for="(elem, index) in bullet_content"
								:key="index"
								:index="index + 1"
								class="red"
							>
								{{ elem }}
							</BuildingBulletPoint>
						</div>
					</div>
				</template>
			</BuildingSubsectionsWineTitle>
		</div>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'

	import BuildingSubsectionsWineTitle from '@/components/building/subsections/title/wine.vue';
	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';

	export default Vue.extend({
		components: {
			BuildingBulletPoint,
			BuildingSubsectionsWineTitle,
		},
		computed: {
			bullet_content(): string[] {
				return [
					'導覽列上項目占去過多區塊，不同功能的選項都混在一起，需要花費一點時間找到自己需要的功能在哪裡',
					'購物車佔去很大的空間，擠壓到搜尋框的位置，造成整個導覽列的瀏覽視線不順暢',
					'自動輪播的 Banner 廣告區塊，點擊率沒有期望中高',
					'往下滑瀏覽更多課程的文字可讀性不佳',
					'上下都有導覽列在手機瀏覽網頁時，會壓縮使用者可瀏覽的空間',
				]
			}
		}
	})
</script>
<style scoped>
	.bulletPointsWrapper {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr;
	}

	.picture {
		width: 100%;
		display: block;
	}
</style>