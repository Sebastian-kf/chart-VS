<template>
	
	<Line
		v-if="weatherData"
		:data="chartData" 
	/>
	<!-- add ( :options="{ plugins:{ legend:{ display: false },}}"  ) to <bar> to remove top legend-->
	<!-- <pre>{{ movies }}</pre> -->

</template>

<script setup lang="ts">
 // import data type for ts
 //import { ChartData } from 'chart.js';
// import chart.js
import { Line } from 'vue-chartjs';

const weatherData = ref();

// fetching api data
fetch ( "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m" )
	.then( async (res) =>( weatherData.value = await res.json() ))
	.catch( error => alert(error.message) );

const chartData = computed(():ChartData<"line"> => {
	return {
		labels: weatherData.value.hourly.time/*.map((timestamp: string) => useDataFormat(timestamp, "dddd h aa").value)*/,
		datasets: [
			{
				label:"Temperature",
				backgroundColor: '#660000',
				data: weatherData.value.hourly.temperature_2m,
			},
		],
	};
});

/* //hard coded data
const chartData = ref<ChartData<"bar">>({

	labels: [
		  "Spider-Man (2002)",
		  "Spider-Man 2 (2004)",
		  "Spider-Man 3 (2007)",
		  "The Amazing Spider-Man (2012)",
		  "The Amazing Spider-Man 2 (2014)",
		  "Spider-Man: Homecoming (2017)",
		  "Spider-Man: Far From Home (2019)",
		  "Spider-Man: No Way Home (2021)",
		  "Spider-Man: Into the Spider-Verse (2018)",
		  "Spider-Man: Across the Spider-Verse (2023)",
	],

	datasets: [
		{
			backgroundColor: ['cyan', 'violet'],
			data: [7.3, 7.3, 6.2, 6.9, 6.6, 7.4, 7.5, 8.0, 8.4, 8.9],
		},
	],
});
*/

</script>

<style scoped>

body {
	padding: 50px;
}

</style>