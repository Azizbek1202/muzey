import Vue from 'vue';
import VueI18n from 'vue-i18n';
import uz from './uz/index';
import en from './en/index';
import rus from './rus/index.js'
Vue.use(VueI18n);
const messages = {
	uz: uz,
	en: en,
	rus: rus,
};


export default new VueI18n({
	locale: localStorage.getItem('lang'), // locall
	messages, 
});
