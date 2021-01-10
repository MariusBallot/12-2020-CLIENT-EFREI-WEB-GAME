<template>
  <div class="signup">
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
              <p>Choose your starter icon</p>
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
              <CusButton v-on:click.native="signClick" bCol="gold" bText="Let's go" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="signup_error">{{ signupError }}</div>
    <Validated :name="userInfo.gametag" v-if="registered" />
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
import IconList from "@/components/SignUp/IconList.vue";
import Validated from "@/components/SignUp/Validated.vue";
import Header from "@/components/UI/Header.vue";
export default {
  name: "Signup",
  components: {
    CusButton,
    IconList,
    Validated,
    Header
  },
  data() {
    return {
      userInfo: {
        mail: null,
        gametag: null,
        icon: null,
        pwd: null,
        cpwd: null
      },
      signupError: null,
      registered: false
    };
  },
  mounted() {},
  methods: {
    onSelectedIcon: function(id) {
      this.userInfo.icon = id;
    },
    signClick: async function() {
      if (this.registered) return;
      let signProm = await this.$store.dispatch("register", this.userInfo);
      this.registered = signProm.registered;
      this.signupError = signProm.msg;
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
    padding: $headerPadding;

    &_infos {
      width: 800px;

      +below(800px) {
        width: 100%;
      }

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

        +below(800px) {
          display: block;

          &_tag {
            margin-top: 15px;
          }

          &_tag, &_mail {
            width: 100%;
            height: 50px;
          }
        }
      }

      &_second {
        &_icon {
          padding: 10px;
          margin: 15px 0;
          classInputs();

          p {
            margin-bottom: 10px;
          }
        }
      }

      &_third {
        display: flex;
        justify-content: space-between;

        &_pass, &_conf {
          width: 49%;
          height: 75px;
        }

        +below(800px) {
          display: block;

          &_conf {
            margin-top: 15px;
          }

          &_pass, &_conf {
            width: 100%;
            height: 50px;
          }
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
