<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_wrapper_infos">
        <h2>Welcome back captain</h2>
        <h3>Log into the game</h3>

        <form id="login" method="get">
          <input type="text" v-model="userInfo.textId" placeholder="Email or Game Tag" />
          <input type="Password" v-model="userInfo.pwd" placeholder="Password" />
          <div class="login_wrapper_infos_buts">
            <div class="login_wrapper_infos_buts_log">
              <CusButton v-on:click.native="logClick" bCol="blue" bText="Login" />
            </div>
            <div class="login_wrapper_infos_buts_ca">
              <router-link to="/signup">
                <CusButton bCol="red" bText="Create account" />
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="login_loader">
      <Loader v-if="loading" />
    </div>
    <div class="login_error">{{ logInError }}</div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
import Loader from "@/components/UI/Loader.vue";
export default {
  name: "Login",
  components: {
    CusButton,
    Loader
  },
  data() {
    return {
      userInfo: {
        textId: null,
        pwd: null
      },
      logInError: null,
      loading: false
    };
  },
  mounted() {
    window.addEventListener("keydown", e => {
      if (e.keyCode == 13) this.logClick();
    });
  },
  methods: {
    logClick: async function() {
      this.loading = true;
      let logProm = await this.$store.dispatch("login", this.userInfo);
      if (logProm.loggedIn) {
        this.logInError = logProm.msg = null;
        this.$router.push("/");
        console.log(logProm);
      } else {
        this.logInError = logProm.msg;
      }
      this.loading = false;
    }
  }
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
    padding: $headerPadding;

    &_infos {
      width: 50%;

      +below(800px) {
        width: 100%;
      }

      input {
        color: white;
        width: 100%;
        height: 60px;
        classInputs();
        margin-bottom: 15px;
      }

      &_buts {
        display: flex;
        justify-content: space-between;

        &_log, &_ca {
          width: 49%;
          height: 75px;
        }
      }
    }
  }

  h2 {
    signH2();
  }

  h3 {
    signH3();
  }

  &_error {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100vw;
    text-align: center;
    color: $neonRed;
  }

  &_loader {
    width: 100vw;
    position: absolute;
    bottom: 50px;
    left: 0;
    display: flex;
    justify-content: center;
  }
}
</style>