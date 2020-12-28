<template>
  <div class="deathScreen" :class="{ on:death}">
    <div class="deathScreen_wrapper">
      <div class="deathScreen_wrapper_head">
        <h2>Not bad dude</h2>
        <h3>Better luck next time</h3>
      </div>
      <div class="deathScreen_wrapper_score" :class="{ on:death}">
        <h4>
          score
          <span class="deathScreen_wrapper_score_number">{{score}}</span>
        </h4>
      </div>
      <div class="deathScreen_wrapper_time" :class="{ on:death}">
        <p>
          In game time
          <span class="deathScreen_wrapper_time_number">{{time}}</span>s
        </p>
      </div>
      <div class="deathScreen_wrapper_level" :class="{ on:death}">
        <p>Level</p>
        <div class="deathScreen_wrapper_level_status">
          <p class="deathScreen_wrapper_level_status_from">31</p>
          <div class="deathScreen_wrapper_level_status_bar">
            <ProgressBar progress=".2" />
          </div>
          <p class="deathScreen_wrapper_level_status_to">32</p>
        </div>
      </div>
      <div class="deathScreen_wrapper_nav" :class="{ on:death}">
        <div class="deathScreen_wrapper_nav_dash">
          <CusButton bCol="blue" bText="Dash board" />
        </div>
        <div class="deathScreen_wrapper_nav_play">
          <CusButton bCol="red" bText="Play again ⏎" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/UI/ProgressBar";
import CusButton from "@/components/UI/CusButton";
export default {
  name: "DeathScreen",
  props: {
    death: false,
    score: false,
    time: false
  },
  components: {
    ProgressBar,
    CusButton
  },
  data() {
    return {};
  },
  methods: {}
};
</script>


<style lang="stylus" scoped>
$animTime = 0.3s;

.deathScreen {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 150px;
  opacity: 0;
  transition: opacity $animTime;
  pointer-events: none;

  &.on {
    opacity: 1;
    pointer-events: all;
  }

  &_wrapper {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: solid $neonBlue 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &_head {
      border-bottom: solid $neonBlue 2px;
      padding-bottom: 30px;
      margin: 0 80px;

      h2 {
        color: $neonRed;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        font-size: 2.3em;
        glow($neonRed, 10px);
      }

      h3 {
        color: $neonBlue;
        font-weight: 400;
        text-align: center;
        font-size: 1em;
        margin-top: 5px;
      }
    }

    &_score {
      padding: 20px 0;

      h4 {
        text-transform: uppercase;
        font-weight: 700;
        text-align: center;
        font-size: 4em;
        glow($neonBlue, 10px);
      }

      &_number {
        color: $neonRed;
        glow($neonRed, 10px);
      }

      opacity: 0;
      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;

      &.on {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &_time {
      p {
        text-align: center;
      }

      &_number {
        color: $neonRed;
      }

      opacity: 0;
      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;

      &.on {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &_level {
      padding: 20px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &_status {
        margin-left: 10px;
        display: flex;
        align-items: center;

        &_bar {
          height: 20px;
          width: 200px;
          margin: 0 5px;
        }
      }

      opacity: 0;
      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;

      &.on {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }

    &_nav {
      width: 100%;
      display: flex;
      justify-content: center;

      &_dash, &_play {
        width: 20%;
        height: 100px;
        margin: 0 10px;
        margin-top: 50px;
        // background: pink;
      }

      opacity: 0;
      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;

      &.on {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
</style>