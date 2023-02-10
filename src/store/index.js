import { createStore } from "vuex";

export default createStore({
  state: {
    query: "",
    modal: false,
    CardWeather: [],
  },
  getters: {},
  mutations: {
    /// додати карточку
    SET_WEATHER_DATA(state, payload) {
      state.CardWeather = state.CardWeather.filter(
        (weather) => weather.id !== payload.id
      );
      if (state.CardWeather && state.CardWeather.length <= 4) {
        state.CardWeather.push(payload);
        console.log(state.CardWeather);
      }
    },
    /// видалення карточки по id
    DELETE_WEATHER_DATA(state, payload) {
      state.CardWeather = state.CardWeather.filter(
        (weather) => weather.id !== payload
      );
      localStorage.removeItem("weatherData");
    },
    /// модальне мікно
    MODAL_WINDOW_CLOSE(state) {
      state.modal = !state.modal;
    },
  },
  actions: {
    ADD_CARD_WEATHER({ commit }, dispatch) {
      commit("SET_WEATHER_DATA", dispatch);
    },
  },
  modules: {},
});
