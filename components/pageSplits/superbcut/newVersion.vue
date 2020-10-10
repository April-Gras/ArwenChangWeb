<template>
    <div class="newVersionWrapper">
        <BuildingSubsectionsWineTitle>
            <template v-slot:title>新版</template>
            <template v-slot:content>
                <div class="content">
                    <img class="mediumMarge picture" src="/images/SuperbCut-NewDesign.png" />
                    <div class="bulletPointsWrapper">
                        <BuildingBulletPoint
                            v-for="(elem, index) in bullet_content"
                            :key="index"
                            :index="index + 1"
                            class="wineBright"
                        >
                            {{ elem }}
                        </BuildingBulletPoint>
                    </div>
                </div>
            </template>
        </BuildingSubsectionsWineTitle>
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
                    '重新整理導覽列，依照功能做分群：搜尋、商品分類、帳號操作',
                    '放上公司使命傳遞產品理念，幫助使用者認識品牌。放上 CTA 確保使用者能進一步瀏覽產品內容',
                    '透過服務擁有的實際數字，建立品牌可信度',
                    '原本放在導覽列上的客服選項，改成懸浮在畫面右下角的客服對談按鈕，隨時滿足顧客需要',
                    '手機版導覽列簡化成三個區塊：尋找功能（左）、企業識別（中）、個人帳戶（右）',
                    '在空間有限的狀態下，在第一頻就能看到推薦課程，引導使用者往下瀏覽更多內容',
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
    }
</style>