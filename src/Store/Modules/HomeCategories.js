import Vue from 'vue';
import { router } from '../../main';

const state = {
  categories: [],
};
const getters = {
  getCategories(state) {
    return state.categories;
  },
};
const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
};
const actions = {
  getMenu(context) {
    Vue.axios.get('home/categories/all')
      .then(function (response) {
        context.commit("setCategories", response.data.data);
      })
      .catch(function (error) {
        //console.log(error);
      })
      .then(function () {
        // always executed
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
