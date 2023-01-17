<template>
	<div class="home">
		<UiSection
			class="home__hero"
			type="hero"
		>
			<h1 class="heading heading--xl">Kirill Sakun</h1>
		</UiSection>
	</div>
</template>

<script>
export default {
	name: 'HomePage',
};
</script>

<style lang="scss" scoped>
.home {
	height: 200vh;
	&__hero {
		background-image: url('~/assets/images/homepage-hero-background.jpg');
	}
}
</style>
