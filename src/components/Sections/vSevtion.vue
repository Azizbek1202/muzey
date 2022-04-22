<template>
	<div>
		<Header />
		<h1 class="text-center">Bo'lim:{{ this.sectionId }}</h1>
		<Footer />
	</div>
</template>
<script>

export default {
	name: 'vSection',
	
	data() {
		return { sectionId: this.$route.params.id };
	},
};
</script>
<style scoped></style>
