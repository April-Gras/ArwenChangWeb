import Vue from 'vue';

import PageHeader from '@/components/pageSplits/hackmd/comments/header.vue';
import PageProjectContext from '@/components/pageSplits/hackmd/comments/projectContext.vue';
import PageBulletPoints from '@/components/pageSplits/hackmd/comments/bulletPoints.vue';
import PageRefactor from '@/components/pageSplits/hackmd/comments/refactor.vue'

export default Vue.extend({
    components: {
        PageHeader,
        PageBulletPoints,
        PageProjectContext,
        PageRefactor,
    },
})