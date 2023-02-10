<template>
    <div class="graph">
        <canvas id="myChart" style="margin-top: 30px; background-color:rgba(255, 255, 255, 0.25)" width="100%"
            height="300"></canvas>
    </div>
</template>
<script>
import Chart from 'chart.js/auto';
import { grapChartLine } from '@/graphs/graph';
export default {
    name: "CardWeather",
    props: {
        weatherDate: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            hour: [],
            temp: []
        }
    },
    methods: {
        HoursTemp() {
            for (let i = 0; i < this.weatherDate.length; i++) {
                this.hour.push(this.hours(this.weatherDate[i]))
                this.temp.push(this.temps(this.weatherDate[i]))
            }
        },
        hours(hourData) {
            return new Date(
                hourData.currentTime
            ).toLocaleTimeString("en-us", {
                hour: "numeric",
            })
        },
        temps(hourData) {
            return Math.round(hourData.temp);
        },
        graphLine() {
            const ctx = document.getElementById('myChart');
            grapChartLine(Chart, ctx, 50, -50, this.hour, this.temp);
        },
    },
    mounted() {
        this.HoursTemp();
        this.graphLine();
    },
}
</script>
<style>
.graph {
    width: 100%;
}
</style>

