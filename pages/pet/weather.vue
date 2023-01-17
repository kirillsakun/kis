<template>
	<div class="weather">
		<UiSection
			class="weather__hero"
			type="hero"
		>
			<h1 class="heading heading--xl">Weather</h1>
			<p class="paragraph">
				Here you can find my solution for
				<a
					class="link"
					target="_blank"
					href="https://digitalbutlers.kaiten.ru/2905768"
				>
					that one task</a
				>. If you have any comments fill free to send me it using github.
			</p>
		</UiSection>
		<UiSection id="weather">
			<UiSearch
				v-model="searchString"
				:is-loading="isLoading"
				@submit="onSearchSubmit"
			/>
			<h2>{{ searchString }}</h2>
			<h2>{{ weatherRecords }}</h2>
			<h2>{{ weatherRecords.length }}</h2>
		</UiSection>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

const searchString = ref('');
const weatherRecords = ref([]);

const addWeatherRecord = (weatherRecord) => {
	const recordIndex = weatherRecords.value.findIndex((record) => {
		return record.value.id === weatherRecord.value.id;
	});

	if (recordIndex === -1) {
		weatherRecords.value.push(weatherRecord);
	} else {
		weatherRecords.value[recordIndex] = weatherRecord;
	}
};

const onSearchSubmit = () => {
	isLoading.value = true;

	const result = useFetch('/api/weather', {
		params: {
			name: searchString.value,
		},
	});

	result
		.then(({ data }) => {
			console.log(data);
			if (data.value.cod === 200) {
				addWeatherRecord(data);
			}
		})
		.catch((error) => {
			// TODO: handle error
			// eslint-disable-next-line no-console
			console.error(error);
		})
		.finally(() => {
			isLoading.value = false;
		});
};
</script>

<style lang="scss" scoped>
.weather {
	&__hero {
		background-image: url('~/assets/images/weather-hero-background.jpg');
	}
}
</style>
