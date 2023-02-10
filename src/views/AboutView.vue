<template>
  <div>
  <Modal :deleteId="DeleteId" v-if="modal" />
    <div class="about section">
      <div class="container">
        <div class="" v-if="CardWeather.length">
          <div class="cards-block" v-for="c in CardWeather" :key="c.weather[0].id">
            <div class="weather-icon">
              <img :src="`https://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`" alt="WeatherIcon">
              <h3 class="description">{{ c.weather[0].description }}</h3>
            </div>

            <div class="location-chosened">
              <div class="location"> {{ c.name }}, {{ c.sys.country }}</div>
              <div class="date">{{ date }}</div>
            </div>

            <div class="temperature">{{ Math.round(c.main.temp) }}°c</div>
            <button class="b-remove" @click="remocveCard(c.id)">
              <img src="../assets/cross.png" />
            </button>
          </div>
        </div>
        <div class="not-cards" v-else>
          Excuse me, add the card! {{ CardWeather.length }}
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { dateBuilder } from '@/data/date';
import Modal from '@/components/Modal.vue';
export default {
  name: 'AboutView',
  data() {
    return {
      date: null,
      DeleteId: null
    }
  },
  components: {
    Modal
  },
  computed: {
    ...mapState(['CardWeather', 'modal'])
  },
  methods: {
    ...mapMutations(['DELETE_WEATHER_DATA', 'MODAL_WINDOW_CLOSE']),

    //запит на видалення карточки
    remocveCard(id) {
      // виклик модального вікна
      this.MODAL_WINDOW_CLOSE();
      // передача id для пітверження видалення
      this.DeleteId = id;
    }
  },
  mounted() {
    /// перетворення  день тижння, сьогоднішнє число, місяць, рік.
    this.date = dateBuilder();
  }
}
</script>
<style>
.about {
  min-height: 100vh;
  padding-bottom: 20px;
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  background-image: linear-gradient(to bottom, rgb(22, 46, 75), rgba(29, 36, 45));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.cards-block {
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 3px 6px rgb(0 0 0 / 25%);
  border-radius: 16px;
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
}

.weather-icon {
  text-align: center;
}

.description {
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: #fff;
  text-shadow: 3px 6px rgb(0 0 0 / 25%);
}

.location-chosened .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;

  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);

}

.location-chosened .date {
  color: #fff;
  font-size: 20px;
  font-weight: 300;

  text-align: center;
  font-style: italic;
}

.temperature {
  display: inline-block;
  padding: 10px 25px;
  font-size: 58px;
  font-weight: 900;
  color: #fff;
  text-shadow: 3px 6px rgb(255 255 255 / 25%);
}

.b-remove {}

.not-cards {
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  color: #fff;
  text-shadow: 3px 6px rgb(255 255 255 / 25%);
}

@media (max-width: 700px) {
  .about {
    height: auto;
  }

  .cards-block {
    flex-direction: column;
  }

  .location-chosened {
    margin-top: 20px;
  }

  .b-remove {
    width: 100%;
  }
}
</style>