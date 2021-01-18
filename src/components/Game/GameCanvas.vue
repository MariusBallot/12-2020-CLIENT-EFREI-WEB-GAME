<template>
  <div class="gameCanvas">
    <div
      v-if="gameConfig.matterDebug"
      class="debugCanvas"
      ref="debugCanvas"
    ></div>
    <div
      class="gameContainer"
      ref="gameCanvas"
      :class="{ debug: gameConfig.matterDebug }"
    ></div>
  </div>
</template>

<script>
import MainGame from "../../classes/game/MainGame";
import Controls from "../../classes/game/Controls";
import gameConfig from "@/classes/game/gameConfig";

export default {
  name: "GameCanvas",
  data() {
    return {
      gameConfig: gameConfig,
    };
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
  mounted() {
    console.log("yo");
    Controls.start();
    MainGame.init(this.$refs.gameCanvas, this.$refs.debugCanvas);

    if (this.currUser.ngames > 0) {
      MainGame.start();
    }
  },
  destroyed() {
    MainGame.stop();
  },
};
</script>


<style lang="stylus" scoped>
.gameCanvas {
  width: 100vw;
  height: 100vh;

  .gameContainer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &.debug {
      opacity: 0.3;
    }
  }

  .debugCanvas {
    width: 100vw;
    height: 100vh;
  }
}
</style>