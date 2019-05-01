import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import topics from './modules/topics'

const store = new Vuex.Store({
    modules: { topics },
    state: {},
    getters: {},
    mutations: {},
    actions: {}
});

export default store