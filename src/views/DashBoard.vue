<template>
  <div class="dashboard">
    <div class="dashboard_wrapper">
      <div class="dashboard_wrapper_title">
        <h2>dashboard</h2>
        <h3>Lets' get involved</h3>
        <br /><br />
      </div>
      <div class="dashboard_wrapper_infos">
        <div class="dashboard_wrapper_infos_profil">
          <div class="dashboard_wrapper_infos_profil_icon">
            <img src="/assets/images/pizza.png" id="pp" />
          </div>
          <div class="dashboard_wrapper_infos_profil_prog">
            <div class="dashboard_wrapper_infos_profil_prog_oui">
              <span>Identity : </span><br />
              <span>Level : </span><br />
              <span>Progress : </span><br />
              <span>Personal Best : </span>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <div class="dashboard_wrapper_buts">
        <div class="dashboard_wrapper_buts_lead">
          <CusButton bCol="blue" bText="Leaderboard" />
        </div>
        <div class="dashboard_wrapper_buts_play">
          <CusButton bCol="red" bText="PLAY" />
        </div>
        <div class="dashboard_wrapper_buts_rewards">
          <CusButton bCol="gold" bText="Rewards" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
export default {
  name: "DashBoard",
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
    position: absolute;
    top: 0;
    left: 0;

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
      width: 40%;

      &_lead, &_play, &_rewards {
        height: 75px;
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
