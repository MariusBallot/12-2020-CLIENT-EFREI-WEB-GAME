<template>
  <div class="game">
    <div class="hud">
      <div class="hud_time">
        Time :
        <span ref="clock"></span>s
      </div>
      <div class="hud_score">
        Score :
        <span ref="score"></span>
      </div>
    </div>
    <GameCanvas />
  </div>
</template>

<script>
import GameCanvas from "../components/Game/GameCanvas";
import MainGame from "@/classes/game/MainGame";

export default {
  name: "Game",
  components: {
    GameCanvas
  },
  mounted() {
    MainGame.setClock(this.$refs.clock);
    MainGame.setScore(this.$refs.score);
  }
};
</script>

<style lang="stylus" scoped>
.hud {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
