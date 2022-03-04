<template>
  <header>
    <nav class="header">
      <img class="header-logo" src="/src/assets/images/logo-black.png" alt="" />
      <button class="header-menu-burger" onclick="showMenu()" type="button">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="header-menu" id="menu">
        <li
          class="header-menu-item"
          v-for="(category, index) in categories"
          :key="index"
        >
          <router-link
            class="header-menu-item-link"
            :to="{ name: 'CategoryContent', params: { id: category.id } }"
          >
            {{ category.name }}
          </router-link>
          <span v-if="category.child.length > 0">
            <div
              v-for="(catChild, i) in category.child"
              :key="i"
              style="text-align: center; margin-top: 10px"
            >
              <router-link style="display:block;text-align:center"
                :to="{ name: 'CategoryContent', params: { id: catChild.id } }"
              >
                {{ catChild.name }}
              </router-link>
          </div>
         </span>
        </li>
      </ul>
      <section class="clear-fix"></section>
    </nav>
    <!--end of navbar-->
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getMenu");
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
};
</script>

<style  scoped>
</style>


