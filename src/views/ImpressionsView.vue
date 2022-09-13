<template>
	<div>
		<Header />
		<MuseumAllComponent />
		<div class="container my-5 p-5 rounded">
			<div class="row align-items-center">
				<div class="col-md-6">
					<p class="title_all text-start">
						<span class="text-primary">O‘zbekiston tarixi muzeyi ko‘rgazmalari</span> 
					</p>
					<!-- <p>
						<span class="fw-bold"
							>Государственный Музей Истории Узбекистана</span
						>
						был основан 12 июля 1876 года в качестве Народного Музея Туркестана.
					</p> -->
					<p>
						O‘zbekiston tarixi davlat muzeyi hamda Tarix instituti hamkorlikda 2014 yil 15 may kuni “Moddiy-maʼnaviy meros va umumbashariy qadriyatlar” mavzuida Respublika ilmiy-amaliy anjumani o‘tkazishini maʼlum qiladi.
Anjuman O‘zbekistonning moddiy, maʼnaviy merosini, yaʼni O‘zbekiston muzeylarida saqlanayotgan arxeologiya, numizmatika, etnografiya va h.k. oid ashyolar, ularning saqlanishi, konservatsiya va restavratsiya muammolarini yoritishga qaratilgan mavzularni umumlashtiradi. Shuningdek, nomoddiy madaniy meros bo‘lgan og‘zaki anʼanalar va ifoda shakllari, til, ijro sanʼati, urf-odatlar, marosimlar, bayramlar bo‘yicha olib borilgan ilmiy tadqiqot natijalarini yoritish, yoshlarni muzey kolleksiyalarida saqlanayotgan madaniy boyliklarni asrash, tiklash va targ‘ib etish, ilmiy muomalaga kiritishda faol ishtirok etishga jalb qilish kabi muammolarni muhokama qilish, madaniy-maʼnaviy merosni saqlash, tadqiq etish va ro‘yxatga kiritish bo‘yicha tavsiyalar ishlab chiqishga bag‘ishlangan mavzular ham anjuman doirasiga kiritiladi.
Shu munosabat bilan muzeyshunoslik, tarix, arxeologiya, etnografiya va sanʼatshunoslik kabi turli yo‘nalishlarda izlanishlar olib borayotgan yosh olimlar, ilmiy xodimlar, mutaxassislar, magistrlarning ilmiy maʼruzalari bilan anjumanda ishtirok etishga taklif etadi.
Maʼruzalarni rasmiylashtirishga doir talablar:
</p>

				</div>
				<div class="col-md-6 box">
					<p>Maʼruzalar matni o‘zbek va rus tillarida qabul qilinadi va 6 betdan oshmasligi lozim. Matn Microsoft Office Word dasturida (Times New Roman) 14 kegl kattaligida, qator orasi 1.5 interval, chapdan 30 mm., o‘ngdan 15 mm., yuqori va pastdan 20 mm. terilib, bosma nusxasi va elektron varianti bilan birga tashkiliy qo‘mitaga yuboriladi. Tahririy jihatdan kamchiliklari ko‘p, ilmiy saviyasi past maqolalar ko‘rib chiqilmaydi va egasiga qaytarilmaydi.Matnda muallifning ish joyi va lavozimi, ilmiy darajasi va unvoni, xizmat va uy manzillari hamda telefonlari ilova qilinishi kerak. Anjuman materiallari bo‘yicha maʼruzalar to‘plami chop etish rejalashtirilgan. Mualliflar maqolalarning har bir sahifasi uchun 4000 so‘m miqdorda badal pulini oldindan to‘lashlari shart.
Anjumanda ishtirok etish uchun maqolalar yuqoridagi talablarga muvofiq tayyorlanib, quyidagi manzilga 2014 yil 1 aprelga qadar topshirilishi lozim. 
100029, Toshkent sh., Sh. Rashidov ko‘chasi, 3 uy, 7-xona, Tel: +99871 239-10-83,  e-mail: uzb.historymuseum@gmail.com

					</p>
					<el-carousel indicator-position="none" arrow="always" trigger="click">
						<el-carousel-item v-for="(item, index) in slides" :key="index">
							<img :src="item" alt="" class="w-100 h-100" />
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Footer from '../components/Footer.vue';
import Header from '@/components/Header.vue';
import MuseumAllComponent from '@/components/MuseumAllComponent.vue';
export default {
	name: 'ImpressionsView',
	components: { Header, Footer, MuseumAllComponent,  },
	data() {
		return {
			slides: [
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/235/600/350',
				'https://picsum.photos/id/236/600/350',
				'https://picsum.photos/id/237/600/350',
				'https://picsum.photos/id/238/600/350',
			],
			visibleSlide: 0,
		};
	},
};
</script>
<style scoped>
.el-carousel__container img {
	width: 100%;
	height: 100%;
}
@media (max-width: 400px) {
	.el-carousel__container {
		height: 250px !important;
	}
}
</style>
