<template>
  <div class="signup">
    <div class="signup_wrapper">
      <div class="signup_wrapper_infos">
        <h2>BECOME THE BEST</h2>
        <h3>Create an account</h3>
        <br />

        <form id="signup" method="get">
          <div class="signup_wrapper_infos_first">
            <div class="signup_wrapper_infos_first_mail">
              <input type="text" name="Email" id="Email" placeholder="Email" />
            </div>
            <div class="signup_wrapper_infos_first_tag">
              <input type="text" name="Gametag" id="Gametag" placeholder="Game tag" />
              <br />
              <br />
            </div>
          </div>
          <div class="signup_wrapper_infos_second">
            <div class="signup_wrapper_infos_second_icon">
              <input type="text" name="Icon" id="Icon" placeholder="Choose your icon" />
              <br />
              <br />
            </div>
          </div>

          <div class="signup_wrapper_infos_third">
            <div class="signup_wrapper_infos_third_pass">
              <input type="password" name="Pass" id="Pass" placeholder="Password" />
            </div>
            <div class="signup_wrapper_infos_third_conf">
              <input type="password" name="Confirm" id="Confirm" placeholder="Confirm Password" />
              <br />
              <br />
            </div>
          </div>

          <div class="signup_wrapper_infos_buts">
            <div class="signup_wrapper_infos_buts_go">
              <CusButton bCol="gold" bText="Let's go" />
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

  #Gametag, #Email {
    width: 400px;
    height: 60px;
    border: 1px solid $neonBlue;
    border-radius: 10px;
    padding-left: 8px;
    background: transparent;
  }

  #Icon {
    width: 800 px;
    height: 120px;
    border: 1px solid $neonBlue;
    border-radius: 10px;
    padding-left: 8px;
    background: transparent;
  }

  #Pass, #Confirm {
    width: 400px;
    height: 60px;
    border: 1px solid $neonBlue;
    border-radius: 10px;
    padding-left: 8px;
    background: transparent;
  }

  &_title {
    display: flex;
    margin-left: 10px;
    padding-top: 10px;
  }

  #img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  input {
    color: white;
  }
}
</style>
