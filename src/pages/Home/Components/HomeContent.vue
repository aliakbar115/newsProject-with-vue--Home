<template>
  <section class="content">
    <!--  (6) پست پر بازدید-->
    <section class="intro intro-h-600px">
      <section class="intro-row intro-h-2-3 mb-10x">
        <!--  1  -->
        <section class="intro-2-3-col intro-h-100 position-relative h-md-300px">
          <router-link   :to="{name: 'ArticleContent',params: { id: articles[0]['id'] }}">
            <section class="intro-2-3-item img-bg bg-1 intro-h-100"  v-bind:style="{ 'background-image': 'url(' +articleImageAddress + articles[0]['image']['thumb'] + ')' }" ></section>
            <section class="intro-item-caption">
              <h3 class="caption-title">
                <span>
                  {{ articles[0]['title'] }}
                </span>
              </h3>
              <ul class="caption-info-bar">
                <li class="">
                  by
                  <b class="text-yellow">{{ articles[0]['user']['name'] }}</b>
                  {{ articles[0]['created_at'] }}
                </li>
                <li>
                  <i class="fas fa-bolt text-yellow"></i>
                  {{ articles[0]['view_count'] }}
                </li>
                <li>
                  <i class="fas fa-comments text-yellow"></i>
                  {{ articles[0]['comment_count'] }}
                </li>
              </ul>
            </section>
          </router-link>
        </section>
        <section class="intro-1-3-col intro-h-100">
          <!--  2 , 3  -->
          <section
            class="intro-1-3-item intro-h-50 position-relative h-md-300px"
          >
            <router-link   :to="{name: 'ArticleContent',params: { id: articles[1]['id'] }}">
              <section class="img-bg bg-2 intro-h-100"  v-bind:style="{ 'background-image': 'url(' +articleImageAddress + articles[1]['image']['thumb'] + ')' }"></section>
              <section class="intro-item-caption">
                <h3 class="caption-title">
                  <b>{{ articles[1]['title'] }}</b>
                </h3>
                <ul class="caption-info-bar">
                  <li>{{ articles[1]['created_at ']}}</li>
                  <li>
                    <i class="fas fa-bolt text-yellow"></i>
                    {{ articles[1]['view_count'] }}
                  </li>
                  <li>
                    <i class="fas fa-comments text-yellow"></i>
                    {{ articles[1].comment_count }}
                  </li>
                </ul>
              </section>
            </router-link>
          </section>
          <section
            class="intro-1-3-item intro-h-50 position-relative h-md-300px"
          >
            <router-link   :to="{name: 'ArticleContent',params: { id: articles[2]['id'] }}">
              <section class="img-bg bg-3 intro-h-100" v-bind:style="{ 'background-image': 'url(' +articleImageAddress + articles[2]['image']['thumb'] + ')' }"></section>
              <section class="intro-item-caption">
                <h3 class="caption-title">
                  <b>{{ articles[2].title }}</b>
                </h3>
                <ul class="caption-info-bar">
                  <li>{{ articles[2].created_at }}</li>
                  <li>
                    <i class="fas fa-bolt text-yellow"></i>
                    {{ articles[2].view_count }}
                  </li>
                  <li>
                    <i class="fas fa-comments text-yellow"></i>
                    {{ articles[2].comment_count }}
                  </li>
                </ul>
              </section>
            </router-link>
          </section>
        </section>
        <section class="clear-fix"></section>
      </section>
      <!--  3,4,5  -->
      <section class="intro-row intro-h-1-3">
        <section
          class="intro-1-3-col-item intro-h-100 position-relative h-md-300px"
        >
          <router-link   :to="{name: 'ArticleContent',params: { id: articles[3]['id'] }}">
            <section class="img-bg bg-4 intro-h-100" v-bind:style="{ 'background-image': 'url(' +articleImageAddress + articles[3]['image']['thumb'] + ')' }"></section>
            <section class="intro-item-caption">
              <h3 class="caption-title">
                <b>{{ articles[3].title }}</b>
              </h3>
              <ul class="caption-info-bar">
                <li>{{ articles[3].created_at }}</li>
                <li>
                  <i class="fas fa-bolt text-yellow"></i>
                  {{ articles[3].view_count }}
                </li>
                <li>
                  <i class="fas fa-comments text-yellow"></i>
                  {{ articles[3].comment_count }}
                </li>
              </ul>
            </section>
          </router-link>
        </section>
        <section
          class="intro-1-3-col-item intro-h-100 position-relative h-md-300px"
        >
          <router-link   :to="{name: 'ArticleContent',params: { id: articles[4]['id'] }}">
            <section class="img-bg bg-5 intro-h-100" v-bind:style="{ 'background-image': 'url(' +articleImageAddress + articles[4]['image']['thumb'] + ')' }"></section>
            <section class="intro-item-caption">
              <h3 class="caption-title">
                <b>{{ articles[4].title }}</b>
              </h3>
              <ul class="caption-info-bar">
                <li>{{ articles[4].created_at }}</li>
                <li>
                  <i class="fas fa-bolt text-yellow"></i>
                  {{ articles[4].view_count }}
                </li>
                <li>
                  <i class="fas fa-comments text-yellow"></i>
                  {{ articles[4].comment_count }}
                </li>
              </ul>
            </section>
          </router-link>
        </section>
        <section
          class="intro-1-3-col-item intro-h-100 position-relative h-md-300px"
        >
          <router-link   :to="{name: 'ArticleContent',params: { id: articles[5]['id'] }}">
            <section class="img-bg bg-6 intro-h-100" v-bind:style="{ 'background-image': 'url(' +articleImageAddress + articles[5]['image']['thumb'] + ')' }"></section>
            <section class="intro-item-caption">
              <h3 class="caption-title">
                <b>{{ articles[5].title }}</b>
              </h3>
              <ul class="caption-info-bar">
                <li>{{ articles[5].created_at }}</li>
                <li>
                  <i class="fas fa-bolt text-yellow"></i>
                  {{ articles[5].view_count }}
                </li>
                <li>
                  <i class="fas fa-comments text-yellow"></i>
                  {{ articles[5].comment_count }}
                </li>
              </ul>
            </section>
          </router-link>
        </section>
        <section class="clear-fix"></section>
      </section>
    </section>
    <section class="container">
      <main class="main">
        <!-- (1) جدیدترین خبر-->
        <section class="main-news">
          <h2 class="title">جدیدترین خبر</h2>
          <article>
            <img
              class="main-news-img"
              :src="articleImageAddress+recentArticle.image['thumb']"
              alt=""
            />
            <h3 class="article-title">
              <router-link   :to="{name: 'ArticleContent',params: { id: recentArticle.id }}">
                {{ recentArticle.title }}
              </router-link>
            </h3>
            <ul class="info-bar">
              <li class="">
                <span class="text-muted">by</span>
                <a href="#" class="color-black"
                  ><b>{{ recentArticle.user.name }}</b></a
                >
                <span class="text-muted">{{ recentArticle.created_at }}</span>
              </li>
              <li>
                <i class="fas fa-bolt text-yellow"></i>
                {{ recentArticle.view_count }}
              </li>
              <li>
                <i class="fas fa-comments text-yellow"></i>
                {{ recentArticle.comment_count }}
              </li>
            </ul>
            <p>
              {{ recentArticle.summary }}
            </p>
          </article>
        </section>
        <!-- (2) پربازدید ترین  -->
        <section class="main-crypto-mining-news" >
          <h2 class="title">پربازدید ترین خبر ها</h2>
          <section class="main-news-w-50" v-for="(viewArticle, index) in viewArticles" :key="index">
            <article>
            <router-link :to="{name: 'ArticleContent',params: { id: viewArticle.id }}">
              <img style="min-height: 270px;"
                class="main-news-img"
                :src="articleImageAddress+viewArticle.image['thumb']"
                alt=""
              />
              </router-link>
              <h3 class="article-title">
                <router-link :to="{name: 'ArticleContent',params: { id: viewArticle.id }}">{{viewArticle.title}}</router-link>
              </h3>
              <ul class="info-bar">
                <li class="">
                  <span class="text-muted">by</span>
                  <a href="#" class="color-black"><b>{{viewArticle.user.name}}</b></a>
                  <span class="text-muted">{{viewArticle.created_at}}</span>
                </li>
                <li><i class="fas fa-bolt text-yellow"></i> {{viewArticle.view_count}}</li>
                <li><i class="fas fa-comments text-yellow"></i>{{viewArticle.comment_count}}</li>
              </ul>
            </article>
          </section>
          <section class="clear-fix"></section>
        </section>
      </main>

      <!--start of sidebar-->
      <home-sidebar></home-sidebar>
      <section class="clear-fix"></section>
    </section>
  </section>
</template>

<script>
import HomeSidebar from "./HomeSidebar.vue";
export default {
  data() {
    return {
      recentArticle: {},
      viewArticles:[]
    };
  },
  components: {
    "home-sidebar": HomeSidebar,
  },
  computed: {
    articles() {
      console.log(this.$store.getters.getArticles);
      return this.$store.getters.getArticles;
    },
    articleImageAddress() {
      return this.$store.getters.getArticleImageAddress;
    },
  },
  methods: {
    recentNews() {
      let app = this;
      this.axios
        .get("articles/one/recentNews")
        .then(function (response) {
          app.recentArticle = response.data.data;
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    viewNews() {
      let app = this;
      this.axios
        .get("articles/tow/viewNews")
        .then(function (response) {
          console.log(response.data.data);
          app.viewArticles = response.data.data;
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
  created() {
    this.$store.dispatch("getArticlesVisited");
    this.recentNews();
    this.viewNews();
  },
};
</script>

<style  scoped>
</style>


