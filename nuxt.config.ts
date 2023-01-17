// https://nuxt.com/docs/api/configuration/nuxt-config

import privateRuntimeConfig from './config.private';
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			name: 'kis',
			socialMedia: {
				github: 'https://github.com/kirillsakun',
				telegram: 'https://t.me/kirillsakun',
				instagram: 'https://instagram.com/tortik_s_vishney',
			},
		},
		...privateRuntimeConfig,
	},
	css: ['~/assets/styles/main.scss'],
});
