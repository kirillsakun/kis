<template>
	<component
		:is="tag"
		:class="classes"
		:disabled="isDisabled || isLoading"
		:to="props.to"
		:target="$attrs.target"
	>
		<slot name="prepend" />
		<span class="button__content">
			<slot />
		</span>
		<slot name="append" />

		<UiLoader />
	</component>
</template>

<script setup>
import { computed } from 'vue';
import NuxtLink from '../../node_modules/nuxt/dist/app/components/nuxt-link.mjs';

const props = defineProps({
	to: {
		type: String,
		required: false,
		default: () => '',
	},
	isOutline: {
		type: Boolean,
		required: false,
		default: () => false,
	},
	isLoading: {
		type: Boolean,
		required: false,
		default: () => false,
	},
	isDisabled: {
		type: Boolean,
		required: false,
		default: () => false,
	},
});

const classes = computed(() => {
	const classes = ['button'];

	if (props.isOutline) {
		classes.push('button--outline');
	}
	if (props.isLoading) {
		classes.push('button--loading');
	}

	return classes;
});

const tag = computed(() => {
	return props.to ? NuxtLink : 'button';
});
</script>

<style lang="scss" scoped>
.button {
	font-size: 1.125rem;
	padding: 0.75em 1em;
	text-align: center;
	line-height: 1.15em;
	display: inline-flex;
	justify-content: center;
	min-width: 10ch;
	background-color: var(--color-text-primary);
	color: var(--color-background-primary);
	border-radius: var(--radius-base);
	transition: var(--transition-default);
	border: 1px solid var(--color-text-primary);
	outline: none;

	&:not(:last-child) {
		margin-inline-end: 0.5em;
	}

	&:hover,
	&:focus-visible {
		background-color: var(--color-text-secondary);
		border-color: var(--color-text-secondary);
	}

	&--outline {
		color: var(--color-text-primary);
		background-color: transparent;
		border-color: var(--color-text-primary);
		&:hover,
		&:focus-visible {
			background-color: rgba(88, 88, 88, 0.2);
		}
	}

	&--loading {
		pointer-events: none !important;

		*:not(.loader) {
			opacity: 0 !important;
		}
		.loader {
			opacity: 1 !important;
		}
	}
}

::v-deep(.loader) {
	position: absolute;
	opacity: 0;
}
</style>
