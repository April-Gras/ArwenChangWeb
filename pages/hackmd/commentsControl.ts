import Vue from 'vue';

import PageHeader from '@/components/pageSplits/hackmd/comments/header.vue';
import PageProjectContext from '@/components/pageSplits/hackmd/comments/projectContext.vue';
import PageBulletPoints from '@/components/pageSplits/hackmd/comments/bulletPoints.vue';
import PageRefactor from '@/components/pageSplits/hackmd/comments/refactor.vue';
import PageFinalProduct from '@/components/pageSplits/hackmd/comments/finalProduct.vue';

import BuildingSection from '@/components/building/section.vue';
import BuildingSubsectionsCardNavigation from '@/components/building/subsections/cardNavigation.vue';

export default Vue.extend({
    components: {
        PageHeader,
        PageBulletPoints,
        PageProjectContext,
        PageRefactor,
        PageFinalProduct,
        BuildingSection,
        BuildingSubsectionsCardNavigation,
    },
})