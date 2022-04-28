const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		allowedHosts: 'all',
	},
	pluginOptions: {
		i18n: {
			locale: 'uz',
			fallbackLocale: 'uz',
			localeDir: 'locales',
			enableInSFC: false,
		},
	},
	
});