module.exports = {
	transpileDependencies: true,
	pluginOptions: {
		i18n: {
			locale: 'uz',
			fallbackLocale: 'uz',
			localeDir: 'locales',
			enableInSFC: false,
		},
	},
	devServer: {
		disableHostCheck: true,
		allowedHosts: 'all',
	}
}