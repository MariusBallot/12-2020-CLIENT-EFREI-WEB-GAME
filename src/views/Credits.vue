<template>
  <div class="credits">
    <div class="credits_wrapper">
      <div class="credits_wrapper_dev adr">
        <img src="assets/images/adrienBW.png" alt />
        <h2>Adrien Calmesnil</h2>
        <p>Front end enthusiast</p>
        <p>Happiness Manager</p>
      </div>
      <div class="credits_wrapper_dev mari">
        <img src="assets/images/mariusBW.png" alt />
        <h2>Marius Ballot</h2>
        <p>Crative cube developer</p>
        <p>Wanna be Full stack</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Credits"
};
</script>

<style lang="stylus" scoped>
.credits {
  &_wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    +below(800px) {
      margin-top: 80px;
      height: auto;
      justify-content: start;
      flex-direction: column;
    }

    &_dev {
      text-align: center;

      +below(800px) {
        width: 100%;
        padding: 30px;
      }

      h2 {
        color: $neonRed;
        font-size: 2em;
        glow($neonRed, 10px);
        text-transform: uppercase;
      }

      &.mari {
        margin-left: 30px;

        +below(800px) {
          margin-left: 0;
        }
      }

      img {
        width: 400px;
        height: auto;

        +below(800px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
