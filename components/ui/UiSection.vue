<template>
	<section
		class="section"
		:class="customSectionClasses"
	>
		<div
			class="container"
			:class="customContainerClasses"
		>
			<slot />
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	containerClasses: {
		type: Array,
		required: false,
		default: () => [],
	},
	type: {
		type: String,
		required: false,
		default: () => 'default',
		validator: (value) => ['default', 'hero'].includes(value),
	},
});

const customSectionClasses = computed(() => {
	switch (props.type) {
		case 'hero':
			return ['hero'];

		default:
			return [];
	}
});
const customContainerClasses = computed(() => {
	switch (props.type) {
		case 'hero':
			return ['hero__container', ...props.containerClasses];

		default:
			return props.containerClasses;
	}
});
</script>
