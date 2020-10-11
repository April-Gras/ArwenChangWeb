<template>
	<div class="learnedAndReflected">
		<BuildingSubsectionsWineTitle>
			<template v-slot:title>反思與學習</template>
			<template v-slot:content>
				<div class="content">
					<BuildingBulletPoint
						v-for="(elem, index) in content"
						:key="index"
						:index="index + 1"
						class="wineBright"
					>
						<span v-html="elem"></span>
					</BuildingBulletPoint>
				</div>
			</template>
		</BuildingSubsectionsWineTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingSubsectionsWineTitle from '@/components/building/subsections/title/wine.vue';
	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';

	export default Vue.extend({
		components: {
			BuildingSubsectionsWineTitle,
			BuildingBulletPoint,
		},
		computed: {
			content() {
				return [
					"<span>一開始我對美髮師的進修需求並不了解，於是趁機在剪髮時跟我的美髮師聊關於他們的上課方式、學習頻率或添購器材的流程<span><b>，這樣的對談幫助我獲取第一手資訊，以顧客需求為出發點做設計</b>",
					"不同人做啟發式評估，會發現不同的問題。因為資源有限，只有我自己評估雖然可發現大部分的易用性問題，可能仍有疏漏的地方",
				]
			}
		}
	})
</script>
<style scoped>
	.content {
		display: grid;
		gap: 16px;
		grid-template-columns: 1fr;
	}
</style>