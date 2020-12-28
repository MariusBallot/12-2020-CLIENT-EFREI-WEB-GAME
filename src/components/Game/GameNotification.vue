<template>
  <div class="gameNotification">
    <div ref="content" class="gameNotification_content">
      <h2 class="gameNotification_content_title blueGlow">{{nTitle}}</h2>
      <h3 class="gameNotification_content_bonus">+{{bPoints}}</h3>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "GameNotification",
  props: {
    nTitle: null,
    bPoints: null,
    animTrig: null
  },
  data() {
    return {
      tl: new TimelineMax({
        paused: true
      })
    };
  },
  mounted() {
    this.tl.fromTo(
      this.$refs.content,
      0.2,
      {
        opacity: 0,
        y: -10
      },
      {
        opacity: 1,
        y: 0
      },
      0
    );

    this.tl.to(
      this.$refs.content,
      0.2,
      {
        opacity: 0,
        y: 10
      },
      1
    );
  },
  watch: {
    animTrig: function() {
      this.tl.restart();
      this.tl.play();
    }
  }
};
</script>


<style lang="stylus" scoped>
.gameNotification {
  &_content {
    display: flex;
    align-items: center;
    padding-top: 12px;
    opacity: 0;
    transform-origin: center;
    transform: rotate(-2deg);

    &_title {
      color: $neonBlue;
      font-weight: 700;
      font-size: 2.5em;
      text-transform: uppercase;
    }

    &_bonus {
      color: $neonRed;
      font-weight: 400;
      font-size: 1.2em;
      margin-left: 10px;
    }
  }
}
</style>