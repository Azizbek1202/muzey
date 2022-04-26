const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
});
module.exports = {
	pluginOptions: {
		i18n: {
			locale: 'uz',
			fallbackLocale: 'uz',
			localeDir: 'locales',
			enableInSFC: false,
		},
	},
	devServer: {
		// host: '127.0.0.1',
    	// port: 8080,
   		// public: 'localhost:8080',
	  }
};
