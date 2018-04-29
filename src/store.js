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
    },

    // 1D) getter is a listener that would
    // observe changes in state
    getters:{
        isTrue(state){
            return state.isTrue;
        },
        getCityNames(state){
            return state.cityNames;
        }
    },

    // 1C) mutations would be the only
    // method changing state directly
    mutations: {
        toggle(state){
            state.isTrue = !state.isTrue;
        },
        SetCityNames(state, cityNames){
            state.cityNames = cityNames
        }
    },

    // 1B) action would only dispatch
    // asynchronously onto mutations
    actions: {
        toggle(context){
            context.commit('toggle')

        },
        loadData({commit}){
            axios.get('http://localhost:3000/allCities')
                .then(function (response) {
                    commit('SetCityNames', response.data)
                }).catch(function (error) {
                    console.log(error);
                });

        }
    },

});