<template>
	
	<bar
		v-if="movies.length"
		:data="chartData" 
		 
	/>
	<!-- add ( :options="{ plugins:{ legend:{ display: false },}}"  ) to <bar> to remove top legend-->
	<!-- <pre>{{ movies }}</pre> -->

</template>

<script setup lang="ts">
 // import data type for ts
 //import { ChartData } from 'chart.js';
// import chart.js
import { Bar } from 'vue-chartjs';

type movie = { title: string; rating: number; }
const movies = ref<movie[]>( [] );

// fetching api data
fetch ( "api.json" )
	.then( async (res) =>( movies.value = await res.json() ))
	.catch( error => alert(error.message) );

const chartData = computed(():ChartData<"bar"> => {
	return {
		labels: movies.value.map(movie => movie.title),
		datasets: [
			{
				label:"first",
				borderColor: "orange",
				borderWidth: {right: 4, left: 1},
				borderRadius: {topLeft: 10, topRight: 3},
				backgroundColor: ['cyan', 'violet'],
				data: movies.value.map(movie => movie.rating),
			},
			{
				label:"second",
				backgroundColor: ['blue', 'magenta'],
				data: movies.value.map(movie => movie.rating +1),
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