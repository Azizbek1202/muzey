<template>
	<div>
		<Header />
		
		<MuseumAllComponent />
	
		<departaments-view />

		<QuestionView />
		<Maps />
		<Footer />
	</div>
</template>
<script>
import QuestionView from '../components/QuestionView.vue';
import Maps from '../components/Maps.vue';
import Footer from '../components/Footer.vue';
import Header from '@/components/Header.vue';
import MuseumAllComponent from '@/components/MuseumAllComponent.vue';
import DepartamentsView from '@/components/Sections/DepartamentsView.vue';

export default {
	name: 'sectionsView',
	components: {
		Header,
		Footer,
		MuseumAllComponent,
		Maps,
		QuestionView,
		DepartamentsView,
      
	},
	data() {
		return {
			slides: [
				'https://picsum.photos/id/234/600/350',
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/236/600/350',
				'https://picsum.photos/id/237/600/350',
				'https://picsum.photos/id/238/600/350',
			],
			visibleSlide: 0,
		};
	},
	computed: {
		slidesLen() {
			return this.slides.length;
		},
	},
};
</script>

<style scoped>
.box > img {
	width: 250px;
}
@media (max-width: 768px) {
	.slide-img img {
		max-width: 160px !important;
	}
}
</style>
