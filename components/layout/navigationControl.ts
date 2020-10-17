interface links {
	link : string,
	text: string,
	class: object,
}

import Vue from 'vue';
import { mapState } from 'vuex';

import BuildingHeadersRegular from '@/components/building/headers/regular.vue';
import BuildingHeadersBig from '@/components/building/headers/big.vue';
import BuildingButtonsBurger from '@/components/building/buttons/burger.vue';

export default Vue.extend({
	components: {
		BuildingHeadersBig,
		BuildingHeadersRegular,
		BuildingButtonsBurger,
	},
	data: function () {
		return ({
			inner_expand: false as Boolean,
		});
	},
	computed: {
		...mapState({
			SCREEN_X: (state: any) => state.resize.screen_x
		}),
		in_screen_range(): boolean {
			return this.SCREEN_X < 1000;
		},
		expand(): boolean {
			return this.inner_expand && this.in_screen_range;
		},
		links(): links[] {
			return [
				{ link : "/", text : "作品"},
				{ link : "/about/", text : "關於"}
			].map(e => {
				return {
					...e,
					class : { active : this.$route.path === e.link }
				}
			})
		}
	}
});