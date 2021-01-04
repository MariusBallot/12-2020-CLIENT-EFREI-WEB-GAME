<template>
  <div class="firstGame">
    <div class="firstGame_wrapper">
      <div class="firstGame_wrapper_head">
        <h2>First time ?</h2>
        <h3>Did you take a look at the tutorial ?</h3>
      </div>
      <div class="firstGame_wrapper_nav">
        <router-link to="/tutorial" class="firstGame_wrapper_nav_dash">
          <CusButton bCol="blue" bText="Tutorial" />
        </router-link>
        <div class="firstGame_wrapper_nav_play">
          <CusButton @click.native="onPlayNow()" bCol="red" bText="Play now" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton";
import MainGame from "@/classes/game/MainGame";

export default {
  name: "FirstGame",

  components: {
    CusButton,
  },
  data() {
    return {};
  },
  methods: {
    onPlayNow() {
      this.$store.dispatch("newGame");
      MainGame.start();
    },
  },
};
</script>


<style lang="stylus" scoped>
$animTime = 0.3s;

.firstGame {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 150px;
  transition: opacity $animTime;

  &_wrapper {
    width: 100%;
    height: 100%;
    neonBorder();
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

      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;
    }

    &_time {
      p {
        text-align: center;
      }

      &_number {
        color: $neonRed;
      }

      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;
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

      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;
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
      }

      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;
    }
  }
}
</style>