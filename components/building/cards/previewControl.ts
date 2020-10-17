import Vue						from 'vue';
import { mapState }				from 'vuex';

import CardColor				from './color.vue';
import BuildingHeadersBigger	from '@/components/building/headers/bigger.vue';
import BuildingButtonTeal		from '@/components/building/buttons/teal.vue';

export default Vue.extend({
	components	: {
		CardColor,
		BuildingHeadersBigger,
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
				backgroundImage	: `url(${this.background_img_url})`,
				...this.add_style,
			});
		},
	},
	props		: {
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
	},
});