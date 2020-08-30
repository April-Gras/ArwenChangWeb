import Vue						from 'vue';
import { mapState }				from 'vuex';

import BuildingHeadersBig		from '@/components/building/headers/big.vue';
import BuildingButtonTeal		from '@/components/building/buttons/teal.vue';

export default Vue.extend({
	components	: {
		BuildingHeadersBig,
		BuildingButtonTeal,
	},
	data		: function(): object {
		return ({ hovered : false });
	},
	computed	: {
		...mapState({
			SCREEN_X	: (state: any) => state.resize.screen_x,
		}),
		computed_style	: function(): object {
			return ({
				backgroundColor	: `var(--color-${ this.color })`,
				backgroundImage	: `url(${this.background_img_url})`,
				...this.add_style,
			});
		},
	},
	props		: {
		color	: {
			type		: String,
			required	: true,
			validator	: function(color) {
				return [
					'grey',
					'teal-bg',
					'wine-bg',
					'brown-bg',
				].includes(color);
			}
		},
		background_img_url	: {
			type		: String,
			required	: false,
		},
		add_style			: {
			type		: Object,
			required	: false,
			default		: function() { return ({}) },
		},
		to		: {
			type		: String,
			required	: false,
			default		: '/',
		},
	},
});