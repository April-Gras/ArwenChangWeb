import Vue from 'vue';

import PageHeader from '@/components/pageSplits/hackmd/index/header.vue';
import PageRedesign from '@/components/pageSplits/hackmd/index/redesign.vue';
import PageBulletPoints from '@/components/pageSplits/hackmd/index/bulletPoints.vue';
import PageProjectContext from '@/components/pageSplits/hackmd/index/projectContext.vue';
import PageProblemDefinition from '@/components/pageSplits/hackmd/index/problemDefinition.vue';

export default Vue.extend({
	components: {
		PageHeader,
		PageRedesign,
		PageBulletPoints,
		PageProjectContext,
		PageProblemDefinition,
	},
});
