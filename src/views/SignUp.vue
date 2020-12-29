<template>
  <div class="signup">
    <div class="signup_title">
      <img src="assets/images/faces.png" id="img" />
      <h1 id="title">THE GAME</h1>
    </div>
    <div class="signup_wrapper">
      <div class="signup_wrapper_infos">
        <h2>BECOME THE BEST</h2>
        <h4>Create an account</h4>
        <br />

        <form id="signup" method="get">
          <div class="signup_wrapper_infos_first">
            <div class="signup_wrapper_infos_first_mail">
              <input type="text" name="Email" id="Email" placeholder="Email" />
            </div>
            <div class="signup_wrapper_infos_first_tag">
              <input
                type="text"
                name="Gametag"
                id="Gametag"
                placeholder="Game tag"
              />
              <br /><br />
            </div>
          </div>
          <div class="signup_wrapper_infos_second">
            <input
              type="text"
              name="Icon"
              id="Icon"
              placeholder="Choose your icon"
            />
          </div>

          <div class="signup_wrapper_infos_buts">
            <div class="sign_wrapper_infos_buts_go">
              <CusButton bCol="gold" bText="Let's go" />
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
  name: "SignUp",
  components: {
    CusButton,
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
      &_first {
        display: flex;
        justify-content: space-between;

        &_mail, &_tag {
          width: 48%;
          height: 75px;
        }
      }

      &_second {
        display: flex;
        justify-content: center;
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
