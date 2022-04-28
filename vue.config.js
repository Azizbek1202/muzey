const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		disableHostCheck: true,
		allowedHosts: 'all',
	}
});
module.exports = {
	pluginOptions: {
		i18n: {
			locale: 'uz',
			fallbackLocale: 'uz',
			localeDir: 'locales',
			enableInSFC: false,
		},
	}
};