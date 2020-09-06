import Vue from 'vue';

import BuildingPill from '@/components/building/pill.vue';
import BuildingSection from '@/components/building/section.vue';
import BuildingHeadersBigger from '@/components/building/headers/bigger.vue';
import BuildingSubsectionsTealTitle from '@/components/building/subsections/tealTitle.vue';
import BuildingSubsectionsTripleContent from '@/components/building/subsections/tripleContent.vue';

export default Vue.extend({
	components: {
		BuildingPill,
		BuildingSection,
		BuildingHeadersBigger,
		BuildingSubsectionsTealTitle,
		BuildingSubsectionsTripleContent,
	},
	computed: {
		conception_skills: function(): string[] {
			return new Array(
				'資訊架構',
				'高擬真原型製作',
				'易用性測試',
				'介面設計',
				'競品分析',
				'使用者研究',
				'互動設計',
				'網頁切版(HTML & CSS)'
			);
		},
		tool_skills: function(): string[] {
			return new Array(
				'Figma',
				'Sketch',
				'Axure',
				'Zeplin',
				'Photoshop',
				'Illustrator',
				'Usabilityhub'
			);
		},
	}
});