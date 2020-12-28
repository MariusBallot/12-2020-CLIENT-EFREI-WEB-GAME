<template>
  <div class="login">
    <div class="title">
      <img src="assets/images/faces.png" id="img" />
      <h1 id="title">THE GAME</h1>
    </div>
    <div class="login_wrapper">
      <div class="login_wrapper_infos">
        <h2>WELCOME BACK CAPTAIN</h2>
        <h4>Log into the game</h4>
        <br />
        <form id="login" method="get">
          <input type="text" name="Uname" id="Uname" placeholder="Username" />
          <br /><br />

          <input type="Password" name="Pass" id="Pass" placeholder="Password" />
          <br /><br />

          <div class="login_wrapper_infos_buts">
            <div class="login_wrapper_infos_buts_log">
              <CusButton bCol="blue" bText="Login" />
            </div>
            <div class="login_wrapper_infos_buts_ca">
              <CusButton bCol="red" bText="Create account" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
export default {
  name: "Login",
  components: {
    CusButton,
  },
};
</script>
<style lang="stylus" scoped>
.login {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;

    &_infos {
      &_buts {
        display: flex;
        justify-content: space-between;

        &_log, &_ca {
          width: 48%;
          height: 75px;
        }
      }
    }
  }

  h2 {
    color: $neonRed;
    text-align: center;
  }

  h4 {
    color: $neonBlue;
    text-align: center;
  }

  label {
    color: #08ffd1;
    font-size: 17px;
  }

  #Uname, #Pass {
    width: 400px;
    height: 60px;
    border: 1px solid $neonBlue;
    border-radius: 10px;
    padding-left: 8px;
    background: transparent;
  }

  #img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
}
</style>