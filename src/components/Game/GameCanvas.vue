<template>
  <div class="gameCanvas">
    <!-- <canvas ref="gameCanvas"></canvas> -->
    <div class="canvasHolder" ref="gameCanvas"></div>
  </div>
</template>

<script>
import MainGame from "../../classes/game/MainGame";
import Controls from "../../classes/game/Controls";

export default {
  name: "GameCanvas",
  mounted() {
    Controls.start();
    MainGame.init(this.$refs.gameCanvas);
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

.canvasHolder {
  width: 100%;
  height: 100%;
}
</style>