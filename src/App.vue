<template>
  <div id="app">
    <Header v-if="!(['game'].indexOf($route.name) == 0)" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/UI/Header.vue";

export default {
  components: {
    Header
  },
  created() {
    // this.$store.dispatch("loadCurrUser");
  }
};
</script>

<style lang="stylus">
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $neonBlue;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(116.87deg, #211F3A 0%, #131220 100.59%);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
