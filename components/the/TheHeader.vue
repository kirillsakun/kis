<template>
	<header class="the-header">
		<div class="container the-header__container">
			<NuxtLink
				to="/"
				class="the-header__logo"
			>
				kis
			</NuxtLink>

			<nav class="the-header__navigation">
				<ul class="the-header__list">
					<li class="the-header__list-item">
						<NuxtLink
							to="/"
							class="the-header__link link"
						>
							Home
						</NuxtLink>
					</li>
					<li class="the-header__list-item">
						<NuxtLink
							to="/ui"
							class="the-header__link link"
						>
							UI
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
.the-header {
	padding: var(--padding-base) 0;
	position: sticky;
	top: 0;
	background-color: var(--color-background-primary);

	&__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		row-gap: 2rem;
	}

	&__logo {
		font-size: 2rem;
		font-weight: 700;
	}

	&__list {
		display: flex;
		gap: calc(var(--padding-base) / 2);
	}
}
</style>
