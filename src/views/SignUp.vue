<template>
  <div class="signup">
    <Header />
    <div class="signup_wrapper">
      <div class="signup_wrapper_infos">
        <h2>Become the best</h2>
        <h3>Create an account</h3>

        <form id="signup" method="get">
          <div class="signup_wrapper_infos_first">
            <div class="signup_wrapper_infos_first_mail">
              <input
                type="text"
                name="Email"
                id="Email"
                v-model="userInfo.mail"
                placeholder="Email"
              />
            </div>
            <div class="signup_wrapper_infos_first_tag">
              <input
                type="text"
                name="Gametag"
                id="Gametag"
                v-model="userInfo.gametag"
                placeholder="Game tag"
              />
            </div>
          </div>
          <div class="signup_wrapper_infos_second">
            <div class="signup_wrapper_infos_second_icon">
              <p>Choose your icon</p>
              <IconList @selectedIcon="onSelectedIcon" />
            </div>
          </div>

          <div class="signup_wrapper_infos_third">
            <div class="signup_wrapper_infos_third_pass">
              <input type="password" name="Pass" v-model="userInfo.pwd" placeholder="Password" />
            </div>
            <div class="signup_wrapper_infos_third_conf">
              <input
                type="password"
                name="Confirm"
                v-model="userInfo.cpwd"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div class="signup_wrapper_infos_buts">
            <div class="signup_wrapper_infos_buts_go">
              <CusButton
                v-on:click.native="signClick"
                bCol="gold"
                bText="Let's go"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="signup_error">{{ signupError }}</div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
import IconList from "@/components/SignUp/IconList.vue";
import Header from "@/components/UI/Header.vue";
export default {
  name: "Signup",
  components: {
    CusButton,
    IconList,
    Header,
  },
  data() {
    return {
      userInfo: {
        mail: null,
        gametag: null,
        icon: null,
        pwd: null,
        cpwd: null,
      },
      signupError: null,
    };
  },
  mounted() {},
  methods: {
    onSelectedIcon: function (id) {
      this.userInfo.icon = id;
    },
    signClick: async function () {
      let signProm = await this.$store.dispatch("register", this.userInfo);
      console.log(signProm);

      // if (logProm.loggedIn) {
      //   this.$router.push("/DashBoard");
      //   this.logInError = logProm.message = null;
      // } else {
      //   this.logInError = logProm.message;
      // }
    },
  },
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
      width: 800px;

      input {
        width: 100%;
        height: 100%;
        classInputs();
      }

      &_first {
        display: flex;
        justify-content: space-between;

        &_tag, &_mail {
          width: 49%;
          height: 75px;
        }
      }

      &_second {
        &_icon {
          padding: 10px;
          margin: 15px 0;
          classInputs();
        }
      }

      &_third {
        display: flex;
        justify-content: space-between;

        &_pass, &_conf {
          width: 49%;
          height: 75px;
        }
      }

      &_buts {
        display: flex;
        justify-content: center;
        margin-top: 15px;

        &_go {
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
    signH2();
  }

  h3 {
    signH3();
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
