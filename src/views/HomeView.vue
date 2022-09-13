<template>
	<div class="">
		<Header />
		<MuseumAllComponent />

		<div class="mt-4 box">
			<div class="">
				<div class="py-5 px-3 mb-4 rounded bg">
					<div class="row align-items-center text-end">
						<div class="col-md-6">
							<div class="card-img-top">
								<img src="../assets/3-floor_guiide.jpg" alt="" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="card-body">
								<h5 class="card-title mb-4">Muzey qavatlarining joylashuvi</h5>
								<p>I. O‘ZBEKISTON HUDUDIDA
TOSH DAVRI
MILODDAN AVVALGI 1,5 MLN YIL – 
MILODDAN AVVALGI 5 MING YILLIK. 	10</p><p>

II. O‘ZBEKISTON HUDUDIDA
BRONZA DAVRI
MILODDAN AVVALGI
3–2 MING YILLIKLAR 	20</p><p>

III. O‘ZBEKISTON HUDUDIDA DAVLATCHILIKNING SHAKLLANISHI VA RIVOJLANISHI
MIL. AV. 1 MING YILLIK – MILODIY IV asr 	32</p><p>

IV. O‘ZBEKISTON HUDUDIDAGI DAVLATCHILIK KO‘RINISHLARI
V–VIII asrlar 	54</p><p>

V. FAN VA MADANIYATNING RIVOJLANISHI
IX–XIII asrlar 	68</p><p>

VI. AMIR TEMUR VA
TEMURIYLAR DAVRI RENESSANSI
XIV–XV asrlar 	82</p><p>

VII. XVI–XIX ASRLARDA
O‘ZBEKISTON ....................................92</p>
								
							</div>
						</div>
						<!-- modal -->
						<div
							class="modal fade"
							id="staticBackdrop1"
							data-bs-backdrop="static"
							data-bs-keyboard="false"
							tabindex="-1"
							aria-labelledby="staticBackdropLabel1"
							aria-hidden="true"
						>
							<div class="modal-dialog modal-lg modal-dialog-scrollable">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="staticBackdropLabel1">"Mo'jizalar olami" muzeyi haqida</h5>
										<button
											type="button"
											class="btn-close"
											data-bs-dismiss="modal"
											aria-label="Close"
										></button>
									</div>
									<div class="modal-body">
										<div>
											<p>
												Oʼzbekistonda ilk bora OʼZR FА Oʼzbekiston tarixi davlat muzeyi qoshida 2011 yil avgust oyida “Moʼjizalar olamida” bolalar muzeyi tashkil etildi. Mazkur bolalar muzeyi 4 yoshdan 14 yoshgacha boʼlgan barcha bolalarga moʼljallangan.
Bolalar muzeyining vazifasi bolalarga tarixga oid bilimlarini rivojlantirishda koʼmak bergan holda, noanʼanaviy dasturlar va koʼrgazmalar orqali ularning qiziqishlari va imkoniyatlarini yuzaga chiqarishdan iborat.
 “Аrxeologiya” boʼlimi orqali, Kampirtepa yodgorlikligi tasviri bilan oʼygʼunlashtirilgan qazilma maydonchasida qazish ishlarini olib borishlari, “Numizmatika” boʼlimida tangalarni zarb qilish tarixi bilan tanishgan holda, turli tarixiy davrlarga oid tangalarning ahamiyatli jihatlarini oʼrganishlari, “Kulolchilik” boʼlimida esa nafaqat milliy sopol buyumlarni, balki, tarixiy davrga oid tangalarni ham yasab, ularning yaratilish tarixi bilan tanishishlari mumkin. 
“Kashtachilik ” boʼlimida esa kashta tikish, doʼppidoʼzlik mashgʼulotlari bilan shugʼullanishlari, “Tasviriy sanʼat” boʼlimida rassomchilikka oid bilimlar bilan bir qatorda, turli rasm va miniatyuralar chizishni oʼrganadilar. 
“Qoʼgʼirchoq teatri” boʼlimida esa muzey fondidagi 100 yillik tarixga ega milliy qoʼgʼirchoqlar kollektsiyasi bilan tanishishlari va bevosita bolalar oʼzlari sevgan qahramonlari asosida ertaklarni sahnalashtirishlari mumkin.
 ”Oʼzbekiston noz-neʼmatlari” boʼlimida yurtimizdagi meva-sabzavotlar turlari, pilla, paxta va makkajoʼxori maxsulotlarini yetishtirilishi jarayonlari toʼgʼrisida maʼlumotlar beriladi.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- modall -->
					</div>
				</div>
			</div>
		</div>
		<!-- carusel photo -->
		<div class="container my-5">
			<p class="title_all">• "Mo'jizalar olami" bolalar muzeyi</p>
			<button
									type="button"
									class="btn btn-primary"
									data-bs-toggle="modal"
									data-bs-target="#staticBackdrop1"
								>
									Read More
								</button>
		</div>
		<!-- carusel photo -->

		<!-- question savollar -->
		<div class="my-5 container"><Question /></div>
		<!-- question savollar -->

		<!-- email and maps -->
		<div class="">
			<Maps />
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import MuseumAllComponent from '../components/MuseumAllComponent.vue';
import Question from '@/components/QuestionView.vue';
import Maps from '../components/Maps.vue';

export default {
	name: 'HomeView',
	data() {
		return {
			activeNames: [],
		};
	},

	components: {
		Header,
		Footer,
		MuseumAllComponent,
		Question,
		Maps,
		
	},
};
</script>
<style scoped>
.bg {
	background: url('https://ritm.uz/static/media/section_bg.b8a00fd9.svg') center
		center / cover;
	background-image: url('https://ritm.uz/static/media/section_bg.b8a00fd9.svg');
	background-position-x: center;
	background-position-y: center;
	background-size: cover;
}
.modal-body p {
	font-size: 16px !important;
	font-weight: 500 !important;
	color: rgba(24, 24, 24, 0.5) !important;
}
.card-img-top {
	width: 100%;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
}
.card-img-top img {
	width: 100%;
	height: 100%;
}
.card-body .card-title {
	font-size: 30px;
	font-weight: 700;
	color: rgb(0, 0, 255);
}
.card-body .card-text {
	font-size: 16px !important;
	font-weight: 600;
	line-height: 1.5;
	color: rgba(24, 24, 24, 0.4);
}
.box p:nth-child(1) {
	font-size: 35px;
	font-weight: 700;
}
.box p:nth-child(2) {
	font-size: 18px;
	font-weight: 500;
}
.box p:nth-child(3) {
	font-size: 18px;
	font-weight: 500;
}
.btn{
	margin-left: 500px;
}
@media (max-width: 768px) {
	.card-img-top {
		height: 200px;
	}
	.box p:nth-child(1) {
		font-size: 22px;
	}
	.box p:nth-child(2) {
		font-size: 14px;
	}
	.box p:nth-child(3) {
		font-size: 14px;
	}
} ;
</style>
