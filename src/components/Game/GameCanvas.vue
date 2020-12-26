<template>
  <div class="gameCanvas">
    <canvas ref="gameCanvas"></canvas>
    <div v-if="config.matterDebug" class="debugCanvas" ref="debugCanvas"></div>
  </div>
</template>

<script>
import MainGame from "../../classes/game/MainGame";
import Controls from "../../classes/game/Controls";
import config from "@/utils/config";

export default {
  name: "GameCanvas",
  data() {
    return {
      config: config
    };
  },
  mounted() {
    Controls.start();
    MainGame.init(this.$refs.gameCanvas, this.$refs.debugCanvas);
  }
};
</script>


<style lang="stylus" scoped>
.gameCanvas {
  width: 100vw;
  height: 100vh;
  background: pink;
}

canvas {
  width: 100%;
  height: 100%;
}

.debugCanvas {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
  background: grey;
}
</style>