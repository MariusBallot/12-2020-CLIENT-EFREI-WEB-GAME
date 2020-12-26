<template>
  <div class="game">
    <!-- <div class="clock">Cojcou</div> -->
    <GameCanvas />
  </div>
</template>

<script>
import GameCanvas from "../components/Game/GameCanvas";

export default {
  name: "Game",
  components: {
    GameCanvas
  }
};
</script>
