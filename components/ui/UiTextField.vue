<template>
	<label :class="classes">
		<span
			v-if="props.label"
			class="text-field__label"
		>
			{{ props.label }}
		</span>
		<input
			:value="modelValue"
			:placeholder="props.placeholder"
			type="text"
			class="text-field__input"
			:disabled="disabled"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<span
			v-if="errorMessage"
			class="text-field__error-message"
		>
			{{ errorMessage }}
		</span>
	</label>
</template>

<script setup>
// TODO: add name prop
import { computed } from 'vue';

defineEmits(['update:modelValue']);

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	placeholder: {
		type: String,
		required: false,
		default: () => '',
	},
	label: {
		type: String,
		required: false,
		default: () => '',
	},
	disabled: {
		type: Boolean,
		required: false,
		default: () => false,
	},
});

const classes = computed(() => {
	const classes = ['text-field'];

	if (props.disabled) {
		classes.push('text-field--disabled');
	}

	return classes;
});

const errorMessage = computed(() => {
	return '';
});
</script>

<style lang="scss" scoped>
.text-field {
	display: block;
	position: relative;

	&::placeholder {
		color: #6a6a6a;
	}

	&__input {
		display: block;
		width: 100%;
		font-size: 1.125rem;
		padding: 0.75em 1em;
		line-height: 1.15em;
		border: 1px solid var(--color-outline-secondary);
		border-radius: var(--radius-base);
		outline: transparent solid 1px;
		outline-offset: 0;

		transition: var(--transition-default);

		&:focus-visible {
			border-color: var(--color-outline-primary);
		}
	}

	&__label {
		display: inline-block;
		margin-bottom: 0.75em;
	}

	&__error-message {
		position: absolute;
		inset-block-start: calc(100% + 0.5em);
		font-size: max(0.8em, 0.5rem);
		color: var(--color-error);
	}
}
</style>
