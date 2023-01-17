<template>
	<table class="ui-table">
		<thead
			v-if="props.headings"
			class="ui-table__head"
		>
			<tr class="ui-table__row">
				<th
					v-for="heading in props.headings"
					:key="heading.id"
					class="ui-table__cell ui-table__cell--heading"
				>
					{{ heading.value }}
				</th>
			</tr>
		</thead>
		<tbody class="ui-table__body">
			<tr
				v-for="(valueArray, index) in transformValues"
				:key="index"
				class="ui-table__row"
			>
				<td
					v-for="(value, valueIndex) in valueArray"
					:key="valueIndex"
					class="ui-table__cell"
				>
					{{ value }}
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup>
const props = defineProps({
	headings: {
		required: false,
		type: Array,
		validator(headings) {
			return headings.every(({ id, name }) => {
				const isIdDuplicated = headings.filter((heading) => heading.id === id).length > 1;

				return id && name && !isIdDuplicated;
			});
		},
		default: null,
	},
	values: {
		required: true,
		type: Array,
	},
});

const transformValues = computed(() => {
	const columnsIds = props.headings.map(({ id }) => id);

	return props.values.map((valueObject) => {
		return columnsIds.map((columnId) => valueObject[columnId] || '-');
	});
});
</script>

<style lang="scss" scoped>
$border-secondary: 1px solid var(--color-outline-secondary);

.ui-table {
	overflow: auto;
	width: 100%;
	border-radius: var(--radius-base);
	border: $border-secondary;
	border-collapse: separate;

	&__row {
		&:not(.ui-table__body :last-child) .ui-table__cell {
			border-block-end: $border-secondary;
		}
	}

	&__cell {
		padding: 0.5em 1em;
		&:not(:last-child) {
			border-inline-end: $border-secondary;
		}
	}
}
</style>
