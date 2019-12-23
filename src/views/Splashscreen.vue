<template>
  <div>
    <h1>Im Splash Screen</h1>
    <div class="my-2">
      <v-btn color="primary" @click="showSplashScreen">Show SplashScreen</v-btn>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import LayoutDefault from "../layouts/LayoutDefault.vue";

export default {
  name: "home",
  created() {
    this.$emit("update:layout", LayoutDefault);
  },
  components: {},
  methods: {
    showSplashScreen: function() {
      navigator.splashscreen.show();
      setTimeout(function() {
        navigator.splashscreen.hide();
      }, 5000);
    }
  }
};
</script>
