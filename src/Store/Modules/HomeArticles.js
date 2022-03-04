import Vue from 'vue';
import { router } from '../../main';

const state = {
  articles: [],
  articleImageAddress:"http://localhost:8000/",
};
const getters = {
  getArticles(state) {
    return state.articles;
  },
  getArticleImageAddress(state) {
    return state.articleImageAddress;
  },
};
const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },

};
const actions = {
  getArticlesVisited(context) {
    Vue.axios.get('articles/all/visited')
      .then(function (response) {
        console.log(response.data.data);
        context.commit("setArticles", response.data.data);
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
