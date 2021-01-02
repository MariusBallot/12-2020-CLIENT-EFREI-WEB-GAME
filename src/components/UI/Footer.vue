<template>
  <footer class="footer">
    <nav class="footer_nav">
      <router-link to class="footer_nav_logout">Log out</router-link>
      <router-link to class="footer_nav_credits">Credits</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currUser() {
      return this.$store.state.currUser;
    }
  },
  created() {}
};
</script>

<style lang="stylus" scoped>
.footer {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: $headerPadding;
  color: $neonRed;
}
</style>
