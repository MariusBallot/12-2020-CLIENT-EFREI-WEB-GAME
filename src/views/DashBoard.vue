<template>
  <div v-if="!(currUser == null)" class="dashboard">
    <div class="dashboard_wrapper">
      <div class="dashboard_wrapper_title">
        <h2>dashboard</h2>
        <h3>Lets' get involved</h3>
        <br />
        <br />
      </div>
      <div class="dashboard_wrapper_infos">
        <div class="dashboard_wrapper_infos_profil">
          <div class="dashboard_wrapper_infos_profil_icon">
            <img :src="currUser.iconObj.image[0].url" id="pp" />
          </div>
          <div class="dashboard_wrapper_infos_profil_prog">
            <div class="dashboard_wrapper_infos_profil_prog_oui">
              <span>Identity : {{ currUser.gametag }}</span>
              <br />
              <span>Level : {{ currUser.level }}</span>
              <br />
              <span>Progress :</span>
              <br />
              <span>Personal Best : {{ currUser.personalbest }}</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
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
      <br />
      <div class="dashboard_wrapper_htp">
        <a href="#">How to play</a>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
export default {
  name: "DashBoard",
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
  components: {
    CusButton,
  },
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

    &_infos {
      &_profil {
        display: flex;

        &_prog {
          &_oui {
            margin-top: 15px;
          }
        }
      }
    }

    &_buts {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 80vw;

      &_lead, &_rewards {
        height: 75px;
        width: 300px;
      }

      &_play {
        height: 100px;
        width: 400px;
        font-weight: bold;
        font-size: 39.3103px;
      }
    }
  }

  h2 {
    font-weight: 500;
    font-size: 63.5393px;
    line-height: 75px;
    glow($neonRed, 10px);
    signH2();
  }

  h3 {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    glow($neonBlue, 10px);
    signH3;
  }

  #pp {
    margin: 10px;
    width: 90px;
    height: 90px;
  }
}
</style>
