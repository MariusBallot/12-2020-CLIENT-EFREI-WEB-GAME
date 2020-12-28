<template>
  <div class="cusButton">
    <div
      class="cusButton_but"
      @mouseover="onMouseIn"
      @mouseleave="onMouseOut"
      ref="but"
      :class="bCol"
    >
      <p ref="preText">{{bText}}</p>
      <div class="cusButton_but_filler" ref="filler" :class="bCol">
        <p ref="fillerText">{{bText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from "gsap";

export default {
  name: "ProgressBar",
  props: {
    bText: null,
    bCol: null
  },
  mounted() {},
  methods: {
    onMouseIn() {
      TweenLite.to(this.$refs.filler, 0.2, {
        top: "0"
      });
      TweenLite.to(this.$refs.fillerText, 0.2, {
        opacity: "1",
        y: 0,
        delay: 0.2
      });
      TweenLite.to(this.$refs.preText, 0.2, {
        opacity: "0"
      });
    },
    onMouseOut() {
      TweenLite.to(this.$refs.filler, 0.2, {
        top: "100%"
      });
      TweenLite.to(this.$refs.fillerText, 0.2, {
        opacity: "0",
        y: 20,
        delay: 0.2
      });
      TweenLite.to(this.$refs.preText, 0.2, {
        opacity: "1"
      });
    }
  },
  watch: {}
};
</script>

<style lang="stylus" scoped>
.cusButton {
  width: 100%;
  height: 100%;

  &_but {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 3px;
    text-transform: uppercase;
    background: none;
    font-weight: 700;
    font-size: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    transform-origin: center;
    transition: all 0.3s;

    &:hover {
      transform: scale(0.95);
      cursor: pointer;
    }

    &_filler {
      background: pink;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 100%;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: $bgBlue;
        opacity: 0;
        transform: translate3d(0, 20px, 0);
      }

      &.blue {
        background: $neonBlue;
      }

      &.red {
        background: $neonRed;
      }
    }
  }

  .blue {
    color: $neonBlue;
    border-color: $neonBlue;
  }

  .red {
    color: $neonRed;
    border-color: $neonRed;
  }
}
</style>
