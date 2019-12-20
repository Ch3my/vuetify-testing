<template>
  <layout-flipped>
    <div class="about">
      <h1>This is an about page</h1>
      <p>s</p>
      <p>ss</p>
      <p>s</p>
      <p>d</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  </layout-flipped>
</template>

<script>
// @ is an alias to /src
import LayoutFlipped from "../layouts/LayoutFlipped.vue";

export default {
  name: "home",
  created() {
    this.$emit("update:layout", LayoutFlipped);
  },
  components: {

}
};
</script>