<template>
  <section class="container">
    <main class="main">
      <section class="main-crypto-mining-news">
        <h2 class="title">اخبار مربوط به دسته بندی -- {{ categoryName }}</h2>
        <section
          class="main-news-w-50"
          v-for="(article, index) in articles"
          :key="index"
        >
          <article>
            <router-link
              :to="{ name: 'ArticleContent', params: { id: article.id } }"
            >
              <img
                class="main-news-img"
                :src="articleImageAddress + article.image.thumb"
                alt=""
              />
            </router-link>
            <h3 class="article-title">
              <router-link
                :to="{ name: 'ArticleContent', params: { id: article.id } }"
                >{{ article.title }}</router-link
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
              <li>
                <i class="fas fa-bolt text-yellow"></i> {{ article.view_count }}
              </li>
              <li>
                <i class="fas fa-comments text-yellow"></i>
                {{ article.comment_count }}
              </li>
            </ul>
          </article>
        </section>
        <section class="clear-fix"></section>
      </section>
      <!--end of main crypto mining news-->
    </main>
    <!--end of main-->

    <!--start of sidebar-->
    <home-sidebar></home-sidebar>
    <section class="clear-fix"></section>
  </section>
  <!--end of container-->
</template>

<script>
import HomeSidebar from "../../Components/HomeSidebar.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      articles: [],
      categoryName: "",
    };
  },
  created() {
    this.getCategoryArticles();
  },
  methods: {
    getCategoryArticles() {
      let app = this;
      this.axios
        .get("articles/category/content/" + this.id)
        .then(function (response) {
          app.articles = response.data.data;
          app.categoryName = response.data.data[0].category.name;
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
  computed: {
    articleImageAddress() {
      return this.$store.getters.getArticleImageAddress;
    },
  },
  components: {
    "home-sidebar": HomeSidebar,
  },
};
</script>

<style  scoped>
</style>


