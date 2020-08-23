import { Plugin } from '@nuxt/types';

const PRESETS = {
	DESKTOP: { x_size : 1280, y_size : 720 },
	MOBILE: { x_size : 375, y_size : 720 }
}

const ResizePuglin: Plugin = ({ store, req }) => {
	const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

	if (/mobile/i.test(userAgent ?? ''))
		store.commit('resize/SET_SCREEN_SIZE', PRESETS.MOBILE);
	else store.commit('resize/SET_SCREEN_SIZE', PRESETS.DESKTOP);
}

export default ResizePuglin;