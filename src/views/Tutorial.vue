<template>
  <div class="tutorial">
    <div class="tutorial_wrapper">
      <div class="tutorial_wrapper_title">
        <h2>how to play</h2>
        <h3>What you need to know</h3>
      </div>
      <div class="tutorial_wrapper_instru">
        <div class="tutorial_wrapper_instru_illus">
          <img src="assets/images/tutoKeys.png" alt />
          <img src="assets/images/tutoMove.png" alt />
        </div>
        <div class="tutorial_wrapper_instru_text">
          <h3>Become the best</h3>
          <p>You play as a space ship going through quite an adventure !</p>
          <p>
            Using your
            <strong>Z</strong> and <strong>S</strong> keys on your keyboard,
            pilote your ship and go as far as possible ! But be aware of the
            <strong>deadly red obstacles</strong> comming for you ! The longer
            you go the quicker the become.
          </p>
          <p>
            At the end of each run you win levels with which you can earn
            multiple
            <strong class="gold">rewards</strong> and maybe one day be the very
            best captain on the top of the leader board.
          </p>
          <p>Good luck captain</p>
        </div>
        <router-link to="game" class="tutorial_wrapper_instru_but">
          <CusButton bText="Play" bCol="red" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton";
export default {
  name: "Tutorial",
  components: {
    CusButton,
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
};
</script>
<style lang="stylus" scoped>
.tutorial {
  &_wrapper {
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding: 20px;

    &_title {
      margin-top: 100px;

      h2 {
        mainH2($neonRed);
      }

      h3 {
        mainH3();
      }

      margin-bottom: 30px;

      +below(800px) {
        display: none;
      }
    }

    &_instru {
      display: flex;
      flex-direction: column;
      align-items: center;

      &_illus {
        width: 700px;
        height: 250px;
        display: flex;
        justify-content: space-between;

        +below(700px) {
          width: 100%;
          height: 200px;
        }

        +below(500px) {
          height: 100px;
          justify-content: center;
        }

        img {
          height: 100%;
          width: auto;
        }
      }

      &_text {
        width: 800px;
        font-size: 1.4em;

        +below(800px) {
          width: 100%;
          font-size: inherit;
        }

        p {
          margin-top: 20px;
        }

        strong {
          color: $neonRed;

          &.gold {
            color: $neonGold;
          }
        }

        h3 {
          margin-top: 20px;
          color: $neonRed;
          text-transform: uppercase;
          font-weight: 400;
          font-size: 2.5em;
          text-align: center;
        }
      }

      &_but {
        width: 100px;
        height: 75px;
        font-size: 1.5em;

        +below(800px) {
          display: none;
        }
      }
    }
  }
}
</style>
