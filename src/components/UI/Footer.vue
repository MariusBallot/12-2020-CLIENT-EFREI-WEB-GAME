<template>
  <footer class="footer">
    <nav class="footer_nav">
      <router-link
        v-if="!(currUser == null)"
        @click.native="logOut"
        to
        class="footer_nav_logout navChild"
      >Log out</router-link>
      <span v-if="!(currUser == null)" class="navChild">|</span>
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
  methods: {
    logOut: async function() {
      let prom = await this.$store.dispatch("logOut");
      if (prom.loggedOut) this.$router.push("/login");
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

  &_nav {
    display: flex;

    a {
      text-decoration: underline;
    }

    .navChild {
      margin-right: 10px;
    }
  }
}
</style>
