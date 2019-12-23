<template>
<!-- Este component es un layout dinamico que se puede definir. cada vista tiene su layout lo que puede dar -->
<!-- Flexibilidad en la aplicacion -->
  <component :is="layout">
    <router-view :layout.sync="layout"></router-view>
  </component>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      layout: 'div',
    };
  },
};
</script>