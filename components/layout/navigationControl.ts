import Vue from 'vue';
import { mapState } from 'vuex';

import BuildingHeadersRegular from '@/components/building/headers/regular.vue';
import BuildingHeadersBig from '@/components/building/headers/big.vue';

export default Vue.extend({
	components: {
		BuildingHeadersBig,
		BuildingHeadersRegular,
	},
	data: function() {
		return ({
			inner_expand: false as Boolean,
		});
	},
	computed: {
		...mapState({ SCREEN_X : (state: any) => state.resize.screen_x }),
		in_screen_range: function(): boolean { return this.SCREEN_X < 1000; },
		expand: function(): boolean { return this.inner_expand && this.in_screen_range; },
	}
});