<template>
  <div class="home section" :class="isDay ? 'day' : 'night'">
    <div class="bg-color">
      <loading-vue v-if="loading" />

      <div class="container" v-else>
        <div class="search-box">
          <div>
            <input type="text" class="search-bar" autocomplete="off" v-model="queryCity" @keypress="PressQueryhhWeather"
              @input="fetchCity" @focus="modalFocus = true" placeholder="Search....">
            <div class="block-autocomplete" v-if="modalFocus">
              <ul>
                <li class="list-country" v-for="city in citys" :key="city.id" @click="setCountry(city.text)">{{
                  city.text
                }}</li>
              </ul>
            </div>
          </div>
          <button class="add-card" @click="addCard()"><img src="../assets/add-white.png" alt=""></button>
        </div>

        <error-message :error="errorMessage" v-if="errorMessage" />

        <card-weather :weather="weather" v-else />
        <graph-line :weatherDate="weatherDate.hourly" />

        <div class="dayOfWeek">
          <day-card :weatherDate="weatherDate.daily" />
        </div>

        <div class="map-block">
          <Map :lat="lat" :lon="lon" />
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { mapActions } from 'vuex';
import { getIPAdress, getWeater, getWeatherData, getSearchResultes } from '@/ipa/ipa';
import { CurrentDateAndTime, HourlyWeatherShift } from '@/data/date';
import LoadingVue from '@/components/Loading';
import errorMessage from '@/components/errorMessage';
import CardWeather from '@/components/CardWeather';
import graphLine from '@/components/graphLine.vue';
import dayCard from '@/components/dayCard.vue';
import Map from '@/components/Map.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      loading: true,
      ipAdress: null,
      citys: null,
      filteredCountrys: [],
      modalFocus: false,
      weather: null,
      weatherDate: null,
      isDay: true,
      queryCity: "London",
      errorMessage: '',
      lat: null,
      lon: null
    }
  },
  components: {
    LoadingVue,
    errorMessage,
    CardWeather,
    graphLine,
    dayCard,
    Map
  },
  methods: {
    ...mapActions(['ADD_CARD_WEATHER']),
    setCountry(query) {
      this.queryCity = query;
      this.modalFocus = false;
      this.fetchhWeather();
    },

    addCard() {
      this.ADD_CARD_WEATHER(this.weather);
      localStorage.setItem("weatherData", JSON.stringify(this.weather));
    },

    PressQueryhhWeather(event) {
      if (event.key == "Enter") {
        this.fetchhWeather();
        this.modalFocus = false;
      }
    },

    // ip адреса
    fetchIpAdress() {
      setTimeout(async () => {
        try {
          const data = await getIPAdress();

          this.queryCity = data.city;
          console.log(this.queryCity)
        } catch (error) {
          this.errorMessage = error;
        }
      }, 300);
    },

    // запить на  міста світу автокомпліт
    fetchCity() {
      setTimeout(async () => {
        try {
          const data = await getSearchResultes(this.queryCity);
          this.citys = data.features;
        } catch (error) {
          this.errorMessage = error;
        }
      }, 300);
    },
    //  запитм на погоду
    fetchhWeather() {
      setTimeout(async () => {
        try {
          const data = await getWeater(this.queryCity);
          this.loading = true;

          this.weather = data;
          this.lat = this.weather.coord.lat;
          this.lon = this.weather.coord.lon;
          this.fetchWeatherData(this.lat, this.lon);
          this.WeatherTimeOfDay(this.weather.weather[0].icon);

          this.loading = false;
        } catch (error) {
          this.errorMessage = error;
        }
      }, 300);
    },

    /// перевірка часу доби
    WeatherTimeOfDay(timeOfDay) {
      console.log(timeOfDay)
      if (timeOfDay.includes("n")) {
        this.isDay = false;
      } else {
        this.isDay = true;
      }
    },

    //запитм на погоду дні тижнів та графіка
    fetchWeatherData(lat, lon) {
      setTimeout(async () => {
        try {
          const data = await getWeatherData(lat, lon);

          CurrentDateAndTime(data)
          HourlyWeatherShift(data);

          this.weatherDate = data;
        } catch (error) {
          this.errorMessage = error;
        }
      }, 300);
    },
  },
  mounted() {
    this.fetchIpAdress();

    this.fetchhWeather();

    this.fetchCity();
  },
}
</script>
<style>
.home {
  min-height: 100vh;
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  position: relative;
}

.bg-color {
  background-color: rgba(0, 0, 0, 0.40);
}

.day {
  background-image: url("../assets/cold-bg.jpg");
}

.night {
  background-image: url('../assets/warm-bg.jpg');
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
  position: relative;
}

.search-box .search-bar {
  display: flex;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  background: none;
  outline: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.27);
  border-radius: 6px 0px 16px 0px;
}

.block-autocomplete {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2%;
  right: 0;
  left: 0;
}

.list-country {
  padding: 15px;
  color: #313131;
  font-size: 20px;
}

.add-card {
  margin-top: 20px;
}

.dayOfWeek {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.map-block {
  padding-bottom: 20px;
}
</style>
