import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

    //state, getters, mutations = synchronous
    //actions is the only one that is Asynchronous
    state: {
        isTrue: true,
        cityNames: [],
        isLoaded: false,
        theAutoComplete:{
            search: '',
            results: [],
            isOpen: false,
        }
    },

    // 1D) getter is a listener that would
    // observe changes in state
    getters: {
        isTrue(state) {
            return state.isTrue;
        },
        getCityNames(state) {
            return state.cityNames;
        },
        didItLoad(state) {
            return state.isLoaded;
        }
    },

    // 1C) mutations would be the only
    // method changing state directly
    mutations: {
        toggle(state) {
            state.isTrue = !state.isTrue;
        },
        SetCityNames(state, cityNames) {
            state.cityNames = cityNames;
            state.theAutoComplete.results = cityNames
        },
        changeLoadedState(state) {
            state.isLoaded = true
        }
    },

    // 1B) action would only dispatch
    // asynchronously onto mutations
    actions: {
        toggle(context) {
            context.commit('toggle')
        },
        loadData({commit}) {
            axios.get('http://localhost:3000/allCities')
                .then(function (response) {
                    commit('SetCityNames', response.data);
                    commit('changeLoadedState');
                }).catch(function (error) {
                console.log(error);
            });
        }
    },

});