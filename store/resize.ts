import { RootState } from '@/store';
import { MutationTree } from 'vuex';

export const state = function() {
	return ({
		screen_x : 1280 as Number,
		screen_y : 720 as Number,
	});
}

export type ResizeState = ReturnType<typeof state>

export const mutations: MutationTree<ResizeState> = {
	SET_SCREEN_SIZE	: function(state, { x_size, y_size }) {
		state.screen_y = y_size;
		state.screen_x = x_size;
	},
}