<template>
	<div class="ui">
		<!-- TODO: work on semantic -->
		<UiSection
			type="hero"
			class="ui__hero"
		>
			<h1 class="heading heading--xl">UI guide</h1>
			<p class="paragraph">Here you can find all common layouts</p>
		</UiSection>

		<UiSection>
			<h2 class="heading heading--lg">Typography</h2>
			<hr class="divider" />
			<div>
				<div class="heading heading--xl">Extra large heading</div>
				<div class="heading heading--lg">Large heading</div>
				<div class="heading heading--md">Medium heading</div>
				<div class="heading heading--sm">Small heading</div>
				<div class="heading heading--xs">Extra small heading</div>
			</div>
			<hr class="divider" />
			<div>
				<p class="paragraph">
					Default paragraph. <br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut posuere sem. Phasellus ut lorem vel urna
					luctus sollicitudin. Proin non turpis erat. Pellentesque gravida, metus et laoreet volutpat, ligula nisl
					convallis odio, imperdiet tincidunt massa risus cursus nisi. Sed tempus nisi nunc, ut gravida leo varius
					vitae. Morbi mattis sollicitudin ex, non suscipit lacus. Maecenas vehicula risus ac fermentum tempus.
					Vestibulum a ornare sem, non auctor mauris.
				</p>
				<p class="paragraph paragraph--secondary">
					Secondary paragraph. <br />
					Pellentesque accumsan nec dui quis condimentum. In posuere porttitor est, in feugiat orci scelerisque at.
					Aliquam semper, dui non sollicitudin scelerisque, erat elit consectetur arcu, vitae pretium ante lorem a
					lacus. Vivamus hendrerit, turpis a vehicula posuere, diam magna lacinia lorem, a condimentum purus quam at
					risus. Maecenas a tortor accumsan, vehicula dui sed, aliquam tellus.
				</p>
			</div>
		</UiSection>

		<UiSection class="section--secondary">
			<h2 class="heading heading--lg">Buttons and links</h2>
			<hr class="divider" />
			<div>
				<UiButton> Button </UiButton>
				<UiButton
					:to="github"
					target="_blank"
					:is-outline="true"
				>
					Github
				</UiButton>
				<UiButton to="/pet/weather"> Weather </UiButton>
				<UiButton :is-loading="true"> Button </UiButton>
				<UiButton
					:is-loading="true"
					:is-outline="true"
				>
					Button
				</UiButton>
			</div>
			<hr class="divider" />
			<div>
				<NuxtLink
					:to="github"
					class="link"
					target="_blank"
				>
					Link
				</NuxtLink>
			</div>
			<hr class="divider" />
			<div>
				<UiSearch
					v-model="searchTextInputValue"
					@submit="onSearchSubmit"
				/>
			</div>
		</UiSection>

		<UiSection>
			<h2 class="heading heading--lg">Inputs</h2>
			<hr class="divider" />
			<form class="form">
				<div class="form__grid">
					<UiTextField
						v-model="defaultTextInputValue"
						placeholder="Placeholder"
						label="Label"
					/>

					<UiTextField
						v-model="disabledTextInputValue"
						placeholder="Disabled input"
						label="Label"
						:disabled="true"
					/>
				</div>
			</form>
		</UiSection>

		<UiSection>
			<UiTable
				:headings="tableHeadings"
				:values="tableValues"
			/>
		</UiSection>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const config = useRuntimeConfig();

const github = ref(config.public.socialMedia.github);

const defaultTextInputValue = ref('');
const disabledTextInputValue = ref('');

const searchTextInputValue = ref('');

const tableHeadings = ref([
	{
		id: 'id',
		value: 'ID',
		isSortable: true,
		sortFunction: (a, b) => +a < +b,
	},
	{
		id: 'name',
		value: 'Name',
		isSortable: true,
	},
	{
		id: 'value',
		value: 'Value',
	},
]);
const tableValues = ref([
	{
		name: 'name 1',
		id: 'id 1',
		value: 'value1',
	},
	{
		name: 'name 2',
		id: 'id 2',
		value: 'value2',
	},
	{
		name: 'name 3',
		id: 'id 3',
		value: 'value3',
	},
]);

const onSearchSubmit = (event) => {
	alert('Search form submitted! \n You can find event in the console.');
	// eslint-disable-next-line no-console
	console.log(event);
};
</script>

<style lang="scss" scoped>
.ui {
	&__hero {
		background-image: url('~/assets/images/ui-hero-background.jpg');
	}
}
</style>
