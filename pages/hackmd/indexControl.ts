import Vue from 'vue';

import BuildingPill from '@/components/building/pill.vue';
import BuildingSection from '@/components/building/section.vue';
import BuildingBulletPoint from '@/components/building/bulletPoint.vue';
import BuildingHeadersBigger from '@/components/building/headers/bigger.vue';
import BuildingSubsectionsWhiteTitle from '@/components/building/subsections/title/white.vue';
import BuildingSubsectionsNeutralTitle from '@/components/building/subsections/title/neutral.vue';


export default Vue.extend({
	components: {
		BuildingPill,
		BuildingSection,
		BuildingBulletPoint,
		BuildingHeadersBigger,
		BuildingSubsectionsWhiteTitle,
		BuildingSubsectionsNeutralTitle,
	},
	computed: {
		intro_pill_content: function(): { title: string, text: string }[] {
			return [{
				title: '擔任角色及合作對象',
				text: '產品設計師。\n與 PO、 3 名工程師、設計顧問合作',
			}, {
				title: '負責項目',
				text: '使用者經驗研究、設計完稿、排程管理',
			}, {
				title: '專案期間',
				text: '2019 年四月 - 九月',
			}]
		},
		main_points_content: function(): string[] {
			return [
				'<span>運用不同研究方法廣泛蒐集資訊，從多個面向分析待解決痛點的優先順序</span>',
				'<span>邀請使用者進行易用性測試，</span><b>確保新設計能有效解決使用者的困擾，再請開發團隊實作上線</b>',
				'<b>建立有系統地搜集使用者回饋的方式，</b><span>提供產品更迭方向的參考</span>'
			]
		},
	},
});
