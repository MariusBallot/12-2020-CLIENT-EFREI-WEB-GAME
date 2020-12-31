<template>
  <header class="header">
    <div class="header_left">
      <img class="header_left_logo" src="/assets/images/faces.png" />
      <h1>the game</h1>
    </div>
    <div v-if="currUser != null" class="header_right">
      <div class="header_right_text">
        <p class="header_right_gt">{{ currUser.gametag }}</p>
        <p class="header_right_setting">Profile settings</p>
      </div>
      <div class="header_right_icon">
        <img v-if="currUser.iconObj" :src="currUser.iconObj.image[0].url" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
    icons() {
      return this.$store.state.rewards.icons;
    }
  },
  created() {
    this.$store.dispatch("loadIcons");
  }
};
</script>

<style lang="stylus" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: $headerPadding;

  &_left {
    display: flex;
    align-items: center;

    &_logo {
      width: 63px;
      height: 63px;
      margin-right: 10px;
    }

    h1 {
      text-transform: uppercase;
      font-weight: 400;
    }
  }

  &_right {
    display: flex;
    align-items: center;

    &_icon {
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 100%;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 110%;
        height: auto;
      }
    }

    h4 {
      font-weight: 400;
    }
  }
}
</style>
