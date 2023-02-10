<template>
    <div class="search-box">
        <div>
            <input type="text" class="search-bar" autocomplete="off" v-model="search" @keypress="PressQueryhhWeather()"
                @focus="modalFocus = true" placeholder="Search....">
            <div class="block-autocomplete" v-if="filteredCountrys && modalFocus">
                <ul>
                    <li class="list-country" v-for="filteredCountry in filteredCountrys" :key="filteredCountry"
                        @click="setCountry(filteredCountry)">{{ filteredCountry }}</li>
                </ul>
            </div>
        </div>
        <button @click="add()"><img src="../assets/add-white.png" alt=""></button>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'QueryAutocomplete',
    props: ['weather', 'query', 'fetchhWeather'],
    data() {
        return {
            search: "",
            countrys: ['Florida', "Alabama", "Alaska", "Texas", "Mast", "London"],
            filteredCountrys: [],
            modalFocus: false,
        }
    },
    computed: {
        // ...mapState(['query'])
    },
    methods: {
        ...mapActions(['ADD_CARD_WEATHER']),
        PressQueryhhWeather(event) {
            if (event.key == "Enter") {
                this.fetchhWeather();
                this.search = '';
            }
        },
        filterStates() {
            if (this.query.length == 0) {
                this.filteredCountrys = this.search;
                console.log(this.filteredCountrys)
                this.modalFocus = false;
            } else {
                this.modalFocus = true;
            }

            this.filteredCountrys = this.countrys.filter(country => {
                return country.toLowerCase().startsWith(this.search.toLowerCase());
            })
        },

        setCountry(query) {
            this.search = query;
            this.modalFocus = false;
            this.fetchhWeather();
        },
        add() {
            this.ADD_CARD_WEATHER(this.weather);
            localStorage.setItem("weatherData", JSON.stringify(this.weather));
        }
    },
    watch: {
        search() {
            this.filterStates();
        }
    },
    mounted() {
        console.log(this.fetchhWeather())
        this.search = this.query;
    }

}
</script>
<style>
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
</style>