const getCityWeather = (cityName) => {
	const {
		weather: { baseUrl, apiKey },
	} = useRuntimeConfig();
	return fetch(`${baseUrl}?q=${cityName}&appid=${apiKey}`);
};

export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	const response = await getCityWeather(query.name);

	return response.json();
});
