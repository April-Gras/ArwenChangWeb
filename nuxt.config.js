export default {
	mode: 'universal',
	target: 'server',
	pageTransition: {
		name: 'layout',
		mode: 'out-in',
	},
	head: {
		title: process.env.npm_package_name || '',
		meta: [{
			charset: 'utf-8'
		}, {
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		}, {
			hid: 'description',
			name: 'description',
			content: 'Arwen Chang professional portfolio'
		}, {
			hid: 'title',
			name: 'title',
			content: 'Arwen Chang'
		}, {
			hid: 'og:title',
			property: 'og:title',
			content: 'Arwen Chang'
		}, {
			hid: 'og:description',
			property: 'og:description',
			content: 'Arwen Chang professional portfolio'
		}],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/images/favicon.ico'
		}]
	},
	css: [
		'~/assets/colors.css',
		'~/assets/fonts.css',
		'~/assets/transition.css',
		'~/assets/font-sizes.css',
		'~/assets/shared.css',
		'~/assets/grid.css',
		'~/assets/shadows.css',
	],
	plugins: [
		'plugins/resize.ts',
	],
	buildModules: [ '@nuxt/typescript-build' ],
	modules: [ '@nuxtjs/axios' ],
	axios: {},
	build: { parallel: true },
	router: { middleware: 'slash' }
}
