<template>
  <aside class="sidebar">
    <section class="sidebar-item">
      <ul class="sidebar-list">
        <li v-for="(category, index) in categories" :key="index">
          <router-link
            style="
              width: 100%;
              display: block;
              height: 30px;
              text-align: center;
            "
            :to="{ name: 'CategoryContent', params: { id: category.id } }"
          >
            <b>{{ category.name }}</b>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="sidebar-item">
      <h2 class="title">پست با بیشترین نظر</h2>
      <section
        class="popular-post"
        v-for="(article, index) in articles"
        :key="index"
      >
        <img
          class="popular-post-img"
          :src="articleImageAddress + article.image['thumb']"
          alt=""
        />
        <section class="popular-post-title">
          <h3>
            <router-link
              :to="{ name: 'ArticleContent', params: { id: article.id } }"
              class="color-black"
              ><b>{{ article.title }}</b></router-link
            >
          </h3>
          <ul class="info-bar">
            <li class="">
              <span class="text-muted">by</span>
              <a href="#" class="color-black"
                ><b>{{ article.user.name }}</b></a
              >
              <span class="text-muted">{{ article.created_at }}</span>
            </li>
          </ul>
        </section>
        <section class="clear-fix"></section>
      </section>
    </section>
  </aside>
</template>

<script>
export default {
  data() {
    return { articles: {} };
  },
  created() {
    this.$store.dispatch("getMenu");
    this.commentArticles();
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
    articleImageAddress() {
      return this.$store.getters.getArticleImageAddress;
    },
  },

  mounted() {},

  methods: {
    commentArticles() {
      let app = this;
      this.axios
        .get("home/articles/commentArticles")
        .then(function (response) {
          app.articles = response.data.data;
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
};
</script>

<style  scoped>
</style>


