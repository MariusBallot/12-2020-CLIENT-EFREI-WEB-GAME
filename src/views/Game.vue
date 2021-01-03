<template>
  <div class="game">
    <FirstGame v-if="currUser.ngames == 0" />
    <div class="hud">
      <div class="hud_time">
        <p>
          Time
          <span ref="clock" class="hud_time_number"></span>
        </p>
      </div>
      <div class="hud_score">
        <p>
          Score
          <span ref="score" class="hud_score_number"></span>
        </p>
      </div>
      <div class="hud_notification">
        <GameNotification :animTrig="animTrig" :nTitle="nTitle" :bPoints="bPoints" />
      </div>
      <div class="hud_pb">
        Personnal best
        <span ref="pb" class="hud_pb_number">10</span>
      </div>
    </div>
    <GameCanvas />

    <div class="rival">
      <div class="rival_content">
        Next Rival
        <span ref="pb" class="rival_content_user">G@merGuy393YaNow</span>
        <div class="rival_content_progressBar">
          <ProgressBar :progress=".2" />
        </div>
      </div>
    </div>
    <DeathScreen :death="death" :score="score" :time="time" />
  </div>
</template>

<script>
import GameCanvas from "@/components/Game/GameCanvas";
import DeathScreen from "@/components/Game/DeathScreen";
import ProgressBar from "@/components/UI/ProgressBar";
import MainGame from "@/classes/game/MainGame";
import GameNotification from "@/components/Game/GameNotification";
import FirstGame from "@/components/Game/FirstGame";

export default {
  name: "Game",
  components: {
    GameCanvas,
    ProgressBar,
    GameNotification,
    DeathScreen,
    FirstGame
  },
  data() {
    return {
      nTitle: "yo",
      bPoints: "yo",
      animTrig: 0,
      death: false,
      score: null,
      time: null
    };
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    }
  },
  mounted() {
    MainGame.setClock(this.$refs.clock);
    MainGame.setScore(this.$refs.score);
    MainGame.setBonusCallback(this.onBonus);
    MainGame.setDeathCallback(this.onDeath);
  },
  methods: {
    onBonus: function(title, pts) {
      this.animTrig++;
      this.nTitle = title;
      this.bPoints = pts;
    },
    onDeath: function(score, time) {
      this.score = score;
      this.time = time;
      this.death = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
.game {
  font-size: 1.4em;

  .hud {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    padding: $headerPadding;
    display: flex;
    align-items: center;

    &_time {
      width: 200px;

      &_number {
        color: $neonRed;
      }
    }

    &_score {
      width: 200px;

      &_number {
        color: $neonRed;
      }
    }

    &_notification {
      width: 100vw;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
    }

    &_pb {
      margin-left: auto;

      &_number {
        color: $neonRed;
      }
    }
  }

  .rival {
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: $headerPadding;

    &_content {
      display: flex;
      justify-content: center;

      &_user {
        color: $neonRed;
      }

      &_progressBar {
        width: 200px;
        height: 30px;
      }
    }
  }
}
</style>
