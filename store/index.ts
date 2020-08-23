import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = function() {
	return ({});
}

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
}

export const actions: ActionTree<RootState, RootState> = {

}