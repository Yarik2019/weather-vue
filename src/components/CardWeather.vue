<template>
    <div>
        <div class="weather-wrap" v-if="weather">
            <div class="location-box">
                <div class="location"> {{ weather.name }}, {{ weather.sys.country }}</div>
                <div class="date">{{ date }}</div>
            </div>

            <div class="weather-box">
                <div class="block-icon">
                    <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="WeatherIcon">
                    <h3 class="weather">{{ weather.weather[0].description }}</h3>
                </div>

                <div class="block-weather">
                    <div class="lowTempAndHighTemp">
                        <p class="lowTemp">
                            <img src="../assets/down.svg" alt="" />
                            {{ Math.round(weather.main.temp_min) }}&deg;C
                        </p>
                        <p class="highTemp">
                            <img src="../assets/up.svg" alt="" />
                            {{ Math.round(weather.main.temp_max) }}&deg;C
                        </p>
                    </div>
                    <div class="feelsAndHumidity">
                        <div class="feelsLike">
                            <p>{{ Math.round(weather.main.feels_like) }}&deg;C</p>
                            <span>Feels like</span>
                        </div>
                        <div class="humidity">
                            <p>{{ Math.round(weather.main.humidity) }}%</p>
                            <span>humidity</span>
                        </div>
                    </div>
                </div>
                <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
            </div>
        </div>

    </div>
</template>
<script>
import { dateBuilder } from '@/data/date';
export default {
    name: "CardWeather",
    props: {
        weather: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            date: null
        }
    },
    mounted() {
        /// перетворення  день тижння, сьогоднішнє число, місяць, рік.
        this.date = dateBuilder();
    },
}
</script>
<style>
.weather-wrap {
    background-color: rgba(255, 255, 255, 0.25);
    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 20px 20px;
}

.location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;

    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;

    text-align: center;
    font-style: italic;
}

.weather-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.block-icon {
    text-align: center;
}

.weather {
    font-size: 18px;
    font-weight: 700;
    font-style: italic;

    color: #fff;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.block-weather {
    max-width: 200px;
}

.lowTempAndHighTemp {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.lowTemp,
.highTemp {
    font-size: 15px;
    padding: 10px;
    font-weight: 700;
    font-style: italic;
    color: #fff;
    text-shadow: 3px 6px rgb(0 0 0 / 25%);
}

.feelsAndHumidity {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.feelsLike,
.humidity {
    text-align: center;

    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    font-style: italic;
    color: #fff;
    text-shadow: 3px 6px rgb(0 0 0 / 25%);

}

.temp {
    display: inline-block;
    padding: 10px 25px;
    font-size: 58px;
    font-weight: 900;

    color: #fff;
    text-shadow: 3px 6px rgba(255, 255, 255, 0.25);
}

.graph {
    width: 100%;
}

@media (max-width: 675px) {
    .weather-box {
        display: flex;
        flex-direction: column;
    }
}
</style>

