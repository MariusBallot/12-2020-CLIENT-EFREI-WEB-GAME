<template>
  <div class="deathScreen" :class="{ on: death }">
    <div class="deathScreen_wrapper">
      <div class="deathScreen_wrapper_head">
        <h2>Not bad dude</h2>
        <h3>Better luck next time</h3>
      </div>
      <div class="deathScreen_wrapper_score" :class="{ on: death }">
        <h4>
          score
          <span class="deathScreen_wrapper_score_number">{{ score }}</span>
        </h4>
        <p v-if="pb" class="deathScreen_wrapper_score_pb">New record!</p>
        <p v-if="lvlUp" class="deathScreen_wrapper_score_lvlUp">Level up!</p>
      </div>
      <div class="deathScreen_wrapper_time" :class="{ on: death }">
        <p>
          In game time
          <span class="deathScreen_wrapper_time_number">{{
            time.toFixed(3)
          }}</span
          >s
        </p>
      </div>
      <div class="deathScreen_wrapper_level" :class="{ on: death }">
        <p>Level</p>
        <div class="deathScreen_wrapper_level_status">
          <p class="deathScreen_wrapper_level_status_from">
            {{ Math.floor(nData.level) }}
          </p>
          <div class="deathScreen_wrapper_level_status_bar">
            <ProgressBar :progress="progress" />
          </div>
          <p class="deathScreen_wrapper_level_status_to">
            {{ Math.floor(nData.level) + 1 }}
          </p>
        </div>
      </div>
      <div class="deathScreen_wrapper_nav" :class="{ on: death }">
        <router-link to="/" class="deathScreen_wrapper_nav_dash">
          <CusButton bCol="blue" bText="Dash board" />
        </router-link>
        <div class="deathScreen_wrapper_nav_play">
          <CusButton
            @click.native="resetGame"
            bCol="red"
            bText="Play again ⏎"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/UI/ProgressBar";
import CusButton from "@/components/UI/CusButton";
import MainGame from "@/classes/game/MainGame";
import { TweenLite } from "gsap";
export default {
  name: "DeathScreen",
  props: {
    death: false,
    score: false,
    pb: false,
    time: false,
    nData: null,
    currUser: null,
  },
  components: {
    ProgressBar,
    CusButton,
  },

  data() {
    return {
      progress: 0,
      lvlUp: false,
    };
  },

  mounted() {
    this.progressAnim();
    this.getLvlUp();
    window.addEventListener("keydown", this.onKeyDown);
  },
  methods: {
    onKeyDown(e) {
      if (e.keyCode == 13) {
        this.resetGame();
      }
    },
    resetGame() {
      MainGame.reset();
    },
    getLvlUp() {
      if (Math.floor(this.nData.level) > Math.floor(this.currUser.level)) {
        this.lvlUp = true;
      }
    },
    progressAnim() {
      TweenLite.to(this, 0.5, {
        delay: 0.5,
        progress: this.nData.level - Math.floor(this.nData.level),
      });
    },
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeyDown);
  },
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

      opacity: 0;
      transform: translate3d(0, 10px, 0);
      transition: all $animTime $animTime;

      &.on {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }

      &_pb, &_lvlUp {
        color: $neonGold;
        glow($neonGold, 10px);
        text-align: center;
        text-transform: uppercase;
        font-size: 2em;
        font-weight: 700;
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