<template>
  <div class="game">
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
