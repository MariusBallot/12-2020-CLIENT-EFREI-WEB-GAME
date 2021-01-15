<template>
  <div class="loader">
    <ul ref="bars">
      <li class="bar"></li>
      <li class="bar"></li>
      <li class="bar"></li>
      <li class="bar"></li>
      <li class="bar"></li>
    </ul>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  name: "Loader",
  data() {
    return {
      tweens: []
    };
  },
  mounted() {
    this.$refs.bars.children.forEach((el, i) => {
      this.tweens[i] = TweenLite.to(el, 0.5, {
        height: "100%",
        delay: 0.1 * i,
        yoyo: true,
        repeat: -1
      });
    });
  },
  destroyed() {
    console.log("yeay");
    this.tweens.forEach(tween => {
      tween.kill();
    });
  }
};
</script>

<style lang="stylus" scoped>
.loader {
  ul {
    display: flex;
    height: 50px;
    align-items: center;

    li {
      width: 3px;
      height: 0;
      background: $neonRed;
      margin-right: 5px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
