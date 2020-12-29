<template>
  <div class="signup">
    <div class="signup_wrapper">
      <div class="signup_wrapper_infos">
        <h2>Become the best</h2>
        <h3>Log into the game</h3>
        <br />
        <form id="signup" method="get">
          <div class="signup_wrapper_infos_ids">
            <input type="text" v-model="userInfo.mail" placeholder="Email" />
            <input type="Password" v-model="userInfo.gameTag" placeholder="Game Tag" />
          </div>
          <div class="signup_wrapper_infos_icons">
            <h4>Choose your icon</h4>
            <IconList @selectedIcon="onSelectedIcon" />
          </div>

          <div class="signup_wrapper_infos_pwd">
            <input type="text" v-model="userInfo.pwd" placeholder="Username" />
            <input type="text" v-model="userInfo.cpwd" placeholder="Username" />

            <div class="signup_wrapper_infos_buts_log">
              <CusButton v-on:click.native="signClick" bCol="blue" bText="Let's go" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="signup_error">{{signupError}}</div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
import IconList from "@/components/SignUp/IconList.vue";
export default {
  name: "Signup",
  components: {
    CusButton,
    IconList
  },
  data() {
    return {
      userInfo: {
        mail: null,
        gameTag: null,
        icon: null,
        pwd: null,
        cpw: null
      },
      signupError: null
    };
  },
  mounted() {},
  methods: {
    onSelectedIcon: function(id) {
      this.icon = id;
    },
    signClick: async function() {
      // let logProm = await this.$store.dispatch("signup", this.userInfo);
      // console.log(logProm);
      // if (logProm.loggedIn) {
      //   this.$router.push("/DashBoard");
      //   this.signupError = logProm.message = null;
      // } else {
      //   this.signupError = logProm.message;
      // }
    }
  }
};
</script>
<style lang="stylus" scoped>
.signup {
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

  &_title {
    display: flex;
    margin-left: 10px;
    padding-top: 10px;
  }

  h2 {
    color: $neonRed;
    text-align: center;
  }

  h3 {
    color: $neonBlue;
    text-align: center;
  }

  input {
    color: white;
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

  &_error {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100vw;
    text-align: center;
    color: $neonRed;
  }
}
</style>