<template>
  <div class="header">
    <div class="header_left">
      <img class="header_left_logo" src="/assets/images/faces.png" />
      <h1>the game</h1>
    </div>
    <div class="header_right">
      <h1>{{ currUser.gametag }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  justify-content: flex-start;

  #img {
    width: 63px;
    height: 63px;
    margin: 20px;
  }

  h1 {
    padding-top: 33px;
    text-transform: uppercase;
  }
}
</style>
