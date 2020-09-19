<template>
	<div>
		<BuildingSubsectionsNeutralTitle>
			<template v-slot:title>定義問題</template>
			<template v-slot:content>
				<div class="mediumMarge">
					<BuildingHeadersSmall class="darkerText gapMarge">競品分析 (Competitor analysis)</BuildingHeadersSmall>
					<div class="darkerText">在此項目開始前進行全面的評估。我收集了幾個 HackMD 的競爭對手，包含直接競爭（文件撰寫服務，例如 Notion、Gitbook、Google document 等）及間接競爭（文件社群平台，如 Medium、stackoverflow、Qiita 等）。以此找出 HackMD 在市場上的定位。</div>
				</div>
				<div class="bigGapMarge">
					<BuildingHeadersSmall class="darkerText gapMarge">人物誌 (Persona)</BuildingHeadersSmall>
					<div class="darkerText">整理過去的使用者訪談紀錄，轉化成主要的三個人物誌。它可以幫助團隊在思考解決方案時，以同理心去設想使用者真實的需求，提供最適合的解法。</div>
				</div>
				<BuildingSubsectionsTrippleCard class="mediumMarge" :config="sliding_cards_config"/>
				<div class="bigGapMarge">
					<BuildingHeadersSmall class="darkerText gapMarge">產品資訊架構（Information Architecture）</BuildingHeadersSmall>
					<div class="darkerText">這次也必須支援新增的功能：讓使用者能夠切換自己的工作空間、團隊空間、公開頁面。為了讓使用者能夠操作流暢，在著手進行視覺設計改版前，重新定義目前資訊架構的層級關聯，讓功能擺放更合理。</div>
				</div>
				<div class="darkerText bigGapMarge">若需要疊加新的功能時，能有邏輯地加在合理的類別中，降低未來維護成本。</div>
				<img class="mediumMarge" src="/images/Overview-IA.png"/>
				<div class="mediumMarge">
					<BuildingHeadersSmall class="darkerText gapMarge">使用者回饋收集</BuildingHeadersSmall>
					<div class="darkerText">我們從各種管道獲取使用者的聲音：Facebook、Twitter、客服信箱、訪談等。在資源有限的情況下，我們需要考量使用者需求、開發可行性、商業目標，找出最適合團隊目前目標的開發順序。因此集中整理並分類使用者的回饋，對於決定產品開發方向會有顯著的幫助。</div>
				</div>
				<div class="bigGapMarge">
					<BuildingHeadersSmall class="darkerText smallTitleMarge">Design sprint</BuildingHeadersSmall>
					<div
						class="bulletPointsOuterWrapper bigGapMarge"
						v-for="(content, index) in bullet_points_content"
						:key="index"
					>
						<BuildingBulletPoint :index="index + 1">{{ content }}</BuildingBulletPoint>
					</div>
					<img src="/images/Overview-DesignSprint.png" />
					<div class="darkerText smallOpaCenterText">我們將使用者需求、商業目標、團隊資源等資訊整理成產品藍圖，幫助我們評估優先順序</div>
				</div>
			</template>
		</BuildingSubsectionsNeutralTitle>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue';

	import BuildingBulletPoint from '@/components/building/bulletPoint.vue';
	import BuildingHeadersSmall from '@/components/building/headers/small.vue';
	import BuildingSubsectionsTrippleCard from '@/components/building/subsections/tripleCard.vue';
	import BuildingSubsectionsNeutralTitle from '@/components/building/subsections/title/neutral.vue';

	export default Vue.extend({
		components: {
			BuildingBulletPoint,
			BuildingHeadersSmall,
			BuildingSubsectionsTrippleCard,
			BuildingSubsectionsNeutralTitle,
		},
		computed: {
			sliding_cards_config: function() {
				return [{
					title: 'Steven / 26 歲 / 軟體工程師',
					text: '資工系畢業，在公司裡隸屬 10 人的開發部門。時常需要跟同事合作開發專案，會一起協作文件或線上會議記錄。',
					subtext: '休閒之餘撥空學習新的後端技術，以適應更迭快速的資訊產業。',
					url: '/images/Overview-Persona-Steven.png',
				}, {
					title: 'Bob / 42 歲 / 軟體工程師主管',
					text: '公司裡的技術部主管，時常會有跨部門會議、內部討論，因此需要 Google Calendar 來管理每日行程。',
					subtext: '定期請同仁輪流分享新的生產力工具，確保整個團隊的成員持續學習成長。',
					url: '/images/Overview-Persona-Bob.png',
				}, {
					title: 'Victor / 32 歲 / Technical PM',
					text: '以前是工程師，懂技術且也用 github，現在單純執行專案管理、撰寫開發規格書。',
					subtext: '管理所有團隊成員的進度，有效率管理每日時程。',
					url: '/images/Overview-Persona-Victor.png',
				}]
			},
			bullet_points_content: function() {
				return [
					'將不同資訊整理成一張產品藍圖，讓團隊成員分別以對使用者影響力、商業影響力、可行性三個面向進行投票，決定下一步解決什麼問題（Epic）',
					'透過腦力激盪列出 Epic 底下的 user story，每項 user story 思考 ”How might we?”，成員們各自提出解決方案並進行討論',
					'每個成員在白紙上畫出解決辦法，向其他人解說並獲取回饋',
					'設計師收集所有素材，繪製 user fow 並提出最終的解決方案',
				];
			},
		}
	})
</script>
<style scoped>
	img {
		width: 100%;
		object-position: center;
		object-fit: contain;
	}

	.bulletPointWrapper >>> .index > span {
		color: var(--color-white);
	}

	.bigGapMarge > div.bulletPointsOuterWrapper:last-child { margin-bottom: 0; }
</style>