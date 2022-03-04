<template>
  <section class="content">
    <section class="container">
      <main class="main">
        <section class="main-news">
          <h2 class="title">{{ article.title }}</h2>
          <article>
            <img
              class="main-news-img"
              :src="articleImageAddress + article.image['thumb']"
              alt=""
            />
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
            <p>
              {{ article.summary }}
            </p>

            <p class="footer-p-margin-20">
              {{ article.body }}
            </p>
          </article>
          <section
            class="comment-box"
            v-for="(comment, index) in article.comments.data"
            :key="index"
          >
            <h3 class="comment-box-header">
              {{ comment.user.name }}
              <span class="comment-box-date" style="margin-left: 10px">{{
                comment.created_at
              }}</span>
            </h3>
            <comment>{{ comment.comment }}</comment>

            <div v-if="comment.child.length > 0">
              <p style="color: red; font-size: 20px; margin-top: 25px">
                نمایش پاسخ از مدیر سایت :
              </p>
              <section
                style="margin-right: 10px"
                class="comment-box"
                v-for="(response, index) in comment.child"
                :key="index"
              >
                <comment>{{ response.comment }}</comment>
              </section>
            </div>
          </section>

          <form action="" method="post">
            <input name="article_id" type="hidden" value="" />
            <textarea
              class="comment"
              name="comment"
              rows="4"
              required
              placeholder="your comment ..."
              v-model="comment"
            ></textarea>
            <input
              class="submit"
              v-on:click.prevent="send_comment"
              type="submit"
              value="store comment"
            />
          </form>
        </section>
        <!--end of main news-->
      </main>
      <!--end of main-->

      <!--start of sidebar-->
      <home-sidebar></home-sidebar>
      <section class="clear-fix"></section>
    </section>
  </section>
</template>

<script>
import HomeSidebar from "../HomeSidebar.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      article: {},
      comment: "",
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      let app = this;
      this.axios
        .get("article/one/content/" + this.id)
        .then(function (response) {
          app.article = response.data.data;
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
    send_comment() {
      let app = this;
      if (this.comment.length != 0) {
        this.axios
        .post("articles/comments/send_comment/" + this.id, {
          comment: this.comment,
        })
        .then(function (response) {
          console.log(response.data.status);
          //app.article = response.data.data;
        })
        .catch(function (error) {
          //console.log(error);
        })
        .then(function () {
          // always executed
        });
      }
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


