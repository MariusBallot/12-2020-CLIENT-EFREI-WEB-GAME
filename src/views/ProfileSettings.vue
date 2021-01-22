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
              v-model="userModif.gametag"
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
                v-model="userModif.currpwd"
                placeholder="Old password"
              />
              <input
                type="Password"
                v-model="userModif.pwd"
                placeholder="New password"
              />
              <input
                type="Password"
                v-model="userModif.cpwd"
                placeholder="Confirm new password"
              />
            </div>
          </div>
          <div class="profileSettings_wrapper_infos_buts">
            <div class="profileSettings_wrapper_infos_buts_submit">
              <CusButton @click.native="onSubmit" bCol="gold" bText="Submit" />
            </div>
          </div>
        </form>
        <p class="profileSettings_wrapper_infos_da">Delete account</p>
        <p class="profileSettings_wrapper_infos_error">{{ modifError }}</p>
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
      userModif: {
        gametag: null,
        currpwd: null,
        pwd: null,
        cpwd: null,
      },
      modifError: null,
    };
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
  mounted() {},
  methods: {
    onSubmit: async function () {
      let sres = await this.$store.dispatch("updateUser", this.userModif);
      console.log(sres);

      if (sres.success) {
        this.modifError = "";
      } else {
        this.modifError = sres.msg;
      }
    },
  },
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
        height: 35px;
        color: $neonRed;
      }

      &_error {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 50px;
        color: $neonRed;
      }
    }
  }
}
</style>
