<template>
	<form
		class="search"
		@submit="onSubmit"
	>
		<UiTextField
			v-model="searchString"
			:label="props.label"
		/>
		<UiButton
			:is-loading="props.isLoading"
			:is-disabled="props.isDisabled"
		>
			Search
		</UiButton>
	</form>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['submit', 'input']);

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: false,
		default: () => '',
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

const searchString = ref('');

const onInput = (newValue) => {
	emit('update:modelValue', newValue);
};
const onSubmit = (event) => {
	event.preventDefault();
	emit('submit', event);
};

watch(searchString, onInput);
</script>

<style lang="scss" scoped>
.search {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	align-items: flex-end;
}

::v-deep(.text-field) {
	flex-grow: 1;
}
</style>
