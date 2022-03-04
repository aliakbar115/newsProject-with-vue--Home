<template>
  <div>
    <section class="app">
      <home-header></home-header>
      <router-view></router-view>
    </section>
    <!--start of footer-->
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from "./Components/HomeHeader.vue";
import HomeFooter from "./Components/HomeFooter.vue";
export default {
  data() {
    return {};
  },
  components: {
    "home-header": HomeHeader,
    "home-footer": HomeFooter,
  },
};
</script>

