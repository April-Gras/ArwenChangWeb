import Vue from 'vue';

import PageHeader from '@/components/pageSplits/hackmd/index/header.vue';
import PageRedesign from '@/components/pageSplits/hackmd/index/redesign.vue';
import PageReflexions from '@/components/pageSplits/hackmd/index/reflexions.vue';
import PageComparaison from '@/components/pageSplits/hackmd/index/comparaison.vue';
import PageBulletPoints from '@/components/pageSplits/hackmd/index/bulletPoints.vue';
import PageProjectContext from '@/components/pageSplits/hackmd/index/projectContext.vue';
import PageProblemDefinition from '@/components/pageSplits/hackmd/index/problemDefinition.vue';

import BuildingSection from '@/components/building/section.vue';
import BuildingSubsectionsCardNavigation from '@/components/building/subsections/cardNavigation.vue';

export default Vue.extend({
	components: {
		PageHeader,
		PageRedesign,
		PageReflexions,
		PageComparaison,
		PageBulletPoints,
		PageProjectContext,
		PageProblemDefinition,

		BuildingSection,
		BuildingSubsectionsCardNavigation,
	},
});
