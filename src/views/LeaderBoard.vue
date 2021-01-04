<template>
  <div class="container">
    <div class="container_wrapper">
      <div class="container_wrapper_title">
        <h2>leaderboard</h2>
        <h3>For the champions of the champions</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeaderBoard",
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
  mounted() {
    console.log(this.$store.state.users);
  },
};
</script>

<style lang="stylus" scoped>
.container {
  &_wrapper {
  }
}
</style>
