// chart dependecies
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

export default defineNuxtPlugin((nuxtApp) => {
	// register chart dependencies
	ChartJS.register( Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,  PointElement, LineElement );
})