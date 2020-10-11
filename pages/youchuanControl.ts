import Vue from 'vue';

import PageHeader from '@/components/pageSplits/youchuan/header.vue';
import PageProjectContext from '@/components/pageSplits/youchuan/projectContext.vue';
import PagePreview from '@/components/pageSplits/youchuan/preview.vue';

import BuildingSection from '@/components/building/section.vue';
import BuildingSubsectionsCardNavigation from '@/components/building/subsections/cardNavigation.vue';

export default Vue.extend({
    components: {
        PageHeader,
        PageProjectContext,
        PagePreview,
        BuildingSection,
        BuildingSubsectionsCardNavigation,
    }
})