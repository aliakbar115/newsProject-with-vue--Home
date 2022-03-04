import Vue from 'vue';
import Vuex from 'vuex';
import HomeArticles from './Modules/HomeArticles'
import HomeCategories from './Modules/HomeCategories'
import User from './Modules/User'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {},
  modules: {
    HomeArticles,
    HomeCategories,
    User
  }
});
