<template>
  <div class="profileSettings">
    <div class="profileSettings_wrapper">
      <div class="profileSettings_wrapper_infos">
        <form id="profil" method="get">
          <div class="profileSettings_wrapper_infos_first">
            <p class="profileSettings_wrapper_infos_first_changegt">
              Change gametag
            </p>
            <input
              id="pseudo"
              type="text"
              v-model="userInfo.textId"
              :placeholder="[[currUser.gametag]]"
            />
          </div>
          <div class="profileSettings_wrapper_infos_second">
            <p class="profileSettings_wrapper_infos_second_changepwd">
              Change password
            </p>
            <div class="profileSettings_wrapper_infos_second_input">
              <input
                type="Password"
                v-model="userInfo.pwd"
                placeholder="Old password"
              />
              <input type="Password" placeholder="New password" />
              <input type="Password" placeholder="Confirm new password" />
            </div>
          </div>
          <div class="profileSettings_wrapper_infos_buts">
            <div class="profileSettings_wrapper_infos_buts_submit">
              <CusButton bCol="gold" bText="Submit" />
            </div>
          </div>
          <p class="profileSettings_wrapper_infos_da">Delete account</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
import Loader from "@/components/UI/Loader.vue";

export default {
  name: "ProfileSettings",
  components: {
    CusButton,
    Loader,
  },
  data() {
    return {
      userInfo: {
        textId: null,
        pwd: null,
      },
      logInError: null,
      loading: false,
    };
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
.profileSettings {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    padding: $headerPadding;

    &_infos {
      padding-top: 120px;
      width: 50%;

      +below(800px) {
        width: 100%;
      }

      &_first {
        &_changegt {
          padding-left: 10px;
        }

        #pseudo {
          margin-top: 5px;
        }
      }

      &_second {
        margin-top: 10px;

        p {
          padding-left: 10px;
        }

        &_input {
          margin-top: 5px;
        }
      }

      input {
        color: white;
        width: 100%;
        height: 60px;
        classInputs();
        margin-bottom: 5px;
      }

      &_buts {
        margin-top: 25px;
        display: flex;
        justify-content: center;

        &_submit {
          width: 40%;
          height: 75px;
        }
      }

      &_da {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100px;
        color: $neonRed;
      }
    }
  }
}
</style>
