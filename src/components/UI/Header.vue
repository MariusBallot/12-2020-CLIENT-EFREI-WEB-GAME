<template>
  <header class="header">
    <div class="header_left">
      <router-link to="/">
        <h1>the game</h1>
      </router-link>
      <router-link v-if="checkRoute()" to="/" class="back"><</router-link>
    </div>
    <div v-if="currUser != null" class="header_right">
      <div class="header_right_text">
        <p class="header_right_text_gt">
          GameTag :
          <strong>{{ currUser.gametag }}</strong>
        </p>
        <p class="header_right_text_lvl">
          level :
          <strong>{{ Math.floor(currUser.level) }}</strong>
        </p>
        <!-- <p class="header_right_text_setting">
          <router-link to="/profileSetting">Profile settings</router-link>
        </p>-->
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
  },
  methods: {
    checkRoute() {
      let r = false;
      switch (this.$route.name) {
        case "rewards":
          r = true;
          break;
        case "leaderboard":
          r = true;
          break;
        case "tutorial":
          r = true;
          break;
        case "credits":
          r = true;
          break;
      }
      return r;
    }
  }
};
</script>

<style lang="stylus" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: $headerPadding;

  &_left {
    h1 {
      text-transform: uppercase;
      font-weight: 400;
    }

    .back {
      position: absolute;
      top: 80px;
      left: 30px;
      cursor: pointer;
      font-size: 2em;
      width: 70px;
      height: 70px;
      border: solid $neonBlue 1px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;

      +below(800px) {
        top: 25px;
        left: inherit;
        right: 25px;
        width: 50px;
        height: 50px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &_right {
    display: flex;
    align-items: center;

    +below(800px) {
      display: none;
    }

    &_text {
      strong {
        color: $neonRed;
        font-weight: inherit;
      }

      &_gt {
        font-size: 2em;
      }

      &_lvl {
        text-align: right;
        font-size: 1.4em;
      }

      &_setting {
        text-align: right;
        color: $neonRed;
        text-decoration: underline;

        &:hover {
          cursor: pointer;
        }
      }
    }

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
