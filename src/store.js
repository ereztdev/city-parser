import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    //state, getters, mutations = synchronous
    //actions is the only one that is Asynchronous
    state: {
        isTrue: true
    },

    // 1D) getter is a listener that would
    // observe changes in state
    getters:{
        isTrue(state){
            return state.isTrue;
        }
    },

    // 1C) mutations would be the only
    // method changing state directly
    mutations: {
        toggle(state){
            state.isTrue = !state.isTrue;
        }
    },

    // 1B) action would only dispatch
    // asynchronously onto mutations
    actions: {
        toggle(context){
            context.commit('toggle')

        }
    },

});