import Vue from 'vue';

import PageHeader from '@/components/pageSplits/superbcut/header.vue'
import PageProjectContext from '@/components/pageSplits/superbcut/projectContext.vue';
import PageBulletPoints from '@/components/pageSplits/superbcut/bulletPoints.vue';
import PageRefactor from '@/components/pageSplits/superbcut/refactor.vue';
import PageOldVersion from '@/components/pageSplits/superbcut/oldVersion.vue';
import PageNewVersion from '@/components/pageSplits/superbcut/newVersion.vue';

import BuildingSection from '@/components/building/section.vue';
import BuildingSubsectionsCardNavigation from '@/components/building/subsections/cardNavigation.vue';

export default Vue.extend({
    components: {
        PageHeader,
        PageProjectContext,
        PageBulletPoints,
        PageRefactor,
        PageOldVersion,
        PageNewVersion,
        BuildingSection,
        BuildingSubsectionsCardNavigation,
    }
})