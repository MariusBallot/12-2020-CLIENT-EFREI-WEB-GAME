<template>
  <header class="header">
    <div class="header_left">
      <h1>the game</h1>
      <router-link v-if="checkRoute()" to="/" class="back"><</router-link>
    </div>
    <div v-if="currUser != null" class="header_right">
      <div class="header_right_text">
        <p class="header_right_text_gt">{{ currUser.gametag }}</p>
        <p class="header_right_text_setting">
          <router-link to="/profileSetting">Profile settings</router-link>
        </p>
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
      margin-top: 20px;
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

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &_right {
    display: flex;
    align-items: center;

    &_text {
      &_gt {
        font-size: 2em;
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
