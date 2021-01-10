<template>
  <div v-if="!(currUser == null)" class="dashboard">
    <div class="dashboard_wrapper">
      <div class="dashboard_wrapper_title">
        <h2>dashboard</h2>
        <h3>Lets' get involved</h3>
      </div>
      <div class="dashboard_wrapper_infos">
        <div class="dashboard_wrapper_infos_profil">
          <img
            class="dashboard_wrapper_infos_profil_icon"
            :src="currUser.iconObj.image[0].url"
            id="pp"
          />
          <div class="dashboard_wrapper_infos_profil_prog">
            <div class="dashboard_wrapper_infos_profil_prog_pers">
              <div>
                Identity :
                <strong>{{ currUser.gametag }}</strong>
              </div>
              <div>
                Level :
                <strong>{{ Math.floor(currUser.level) }}</strong>
              </div>
              <div class="progress">
                Progress :
                <div class="p-bar">
                  <p>{{ Math.floor(currUser.level) }}</p>
                  <ProgressBar :progress="currUser.level-Math.floor(currUser.level)" />
                  <p>{{ Math.floor(currUser.level)+1 }}</p>
                </div>
              </div>
              <div>
                Personal Best :
                <strong>{{ currUser.personalbest }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dashboard_wrapper_buts">
        <router-link to="/leaderboard" class="dashboard_wrapper_buts_lead">
          <CusButton bCol="blue" bText="Leaderboard" />
        </router-link>
        <router-link to="/game" class="dashboard_wrapper_buts_play">
          <CusButton bCol="red" bText="PLAY" />
        </router-link>
        <router-link to="/rewards" class="dashboard_wrapper_buts_rewards">
          <CusButton bCol="gold" bText="Rewards" />
        </router-link>
      </div>
      <div class="dashboard_wrapper_htp">
        <router-link to="/tutorial">How to play</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
import ProgressBar from "@/components/UI/ProgressBar.vue";

export default {
  name: "DashBoard",
  components: {
    CusButton,
    ProgressBar
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    }
  }
};
</script>

<style lang="stylus" scoped>
.dashboard {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    &_title {
      h2 {
        mainH2($neonRed);
      }

      h3 {
        mainH3();
      }
    }

    &_infos {
      &_profil {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        img {
          height: 100px;
          width: auto;
          margin-right: 20px;
        }

        &_prog {
          &_pers {
            color: $darkBlue;
            font-size: 1.5em;

            strong {
              color: $neonBlue;
              font-weight: inherit;
            }

            .progress {
              display: flex;

              .p-bar {
                color: $neonBlue;
                height: 20px;
                width: 200px;
                margin: auto;
                display: flex;
                align-items: center;

                p {
                  margin: 0 10px;
                }
              }
            }
          }
        }
      }
    }

    &_buts {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 800px;

      &_lead, &_rewards {
        height: 75px;
        width: 200px;
      }

      &_play {
        height: 100px;
        width: 300px;
        font-weight: bold;
        font-size: 39.3103px;
      }
    }

    &_htp {
      margin-top: 20px;

      a {
        text-decoration: underline;
      }
    }
  }
}
</style>
