// https://nuxt.com/docs/api/configuration/nuxt-config

import config from './config.private';
export default defineNuxtConfig({
	modules: ['@nuxtjs/supabase'],
	runtimeConfig: {
		public: {
			name: 'kis',
			socialMedia: {
				github: 'https://github.com/kirillsakun',
				telegram: 'https://t.me/kirillsakun',
				instagram: 'https://instagram.com/tortik_s_vishney',
			},
		},
		...config.privateRuntimeConfig,
	},
	css: ['~/assets/styles/main.scss'],
	...config.supabase,
});
