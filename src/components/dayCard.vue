<template>
    <div class="day-card" v-for="day in weatherDate" :key="day.dt">
        <p class="week-day">
            {{
                new Date(day.dt * 1000).toLocaleDateString(
                    "en-us",
                    {
                        weekday: "long",
                    }
                )
            }}
        </p>
        <img :src="
            `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
        " alt="" />
        <div>
            <p class="day-temp">day: {{ Math.round(day.temp.day) }} °C</p>
            <p class="day-temp">
                max:
                <img src="../assets/up.svg" alt="" />
                {{ Math.round(day.temp.max) }} °C
            </p>
            <p class="day-temp">
                min:
                <img src="../assets/down.svg" alt="" />
                {{ Math.round(day.temp.min) }} °C
            </p>
            <p class="day-temp">night: {{ Math.round(day.temp.night) }} °C</p>
        </div>


    </div>
</template>

<script>
export default {
    name: 'dayCard',
    props: {weatherDate:{
      type: Array,
      default: () => [],
    }},
}
</script>
<style>
.day-card {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 3px 6px rgb(0 0 0 / 25%);
    border-radius: 16px;
    padding: 20px 20px;
    margin-bottom: 30px;
    text-align: center;
}

.week-day {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
}

.day-temp {
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    font-style: italic;
    color: #fff;
    text-shadow: 3px 6px rgb(0 0 0 / 25%);
}
</style>