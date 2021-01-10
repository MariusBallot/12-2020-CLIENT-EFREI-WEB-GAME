<template>
  <div class="tutorial">
    <div class="tutorial_wrapper">
      <div class="tutorial_wrapper_title">
        <h2>how to play</h2>
        <h3>What you need to know</h3>
      </div>
      <div class="tutorial_wrapper_lors">
        <p>
          DU LORS
          <br />
          <br />Du bon gros lors pour raconter une histoire tsé gore le user il est
          intrigué tu vois sque jveude ? Du bon gros lors pour raconter une
          histoire tsé gore le user il est intrigué tu vois sque jveude ? Du bon
          gros lors pour raconter une histoire tsé gore le user il est intrigué
          tu vois sque jveude ? Du bon gros lors pour raconter une histoire tsé
          gore le user il est intrigué tu vois sque jveude ? Du bon gros lors
          pour raconter une histoire tsé gore le user il est intrigué tu vois
          sque jveude ?
        </p>
        <img src />
      </div>
      <div class="tutorial_wrapper_htp">
        <p>
          TUTORIAL
          <br />
          <br />With your keyboard, navigate up and down to to dodge incoming With
          your keyboard, navigate up and down to to dodge incoming obstacles.
          The more you travel, the harder it is going to get. Enemies can
          randomly spawn. , but you also have the oportinuty to destroy em’ with
          your LASER. Whitch can bring you sh*t tons of points and XP. That XP
          will alow you to gain levels to then customize your profil, spaceship
          and much more !
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorial"
};
</script>
<style lang="stylus" scoped>
.tutorial {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    &_title {
      h2 {
        mainH2($neonRed);
      }

      h3 {
        mainH3();
      }

      margin-bottom: 30px;
    }

    &_lors {
      display: flex;
      justify-content: flex-start;
      width: 100vw;
      padding-left: 50px;

      p {
        width: 40vw;
      }
    }

    &_htp {
      display: flex;
      justify-content: flex-end;
      width: 100vw;
      padding-right: 50px;

      p {
        width: 40vw;
      }
    }
  }
}
</style>
