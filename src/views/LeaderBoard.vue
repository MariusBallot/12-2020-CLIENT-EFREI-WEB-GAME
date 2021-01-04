<template>
  <div id="container">
    <div class="row">
      <div class="name">Player1</div>
      <div class="score">430</div>
    </div>

    <div class="row">
      <div class="name">Player2</div>
      <div class="score">580</div>
    </div>

    <div class="row">
      <div class="name">Player3</div>
      <div class="score">310</div>
    </div>

    <div class="row">
      <div class="name">Player4</div>
      <div class="score">640</div>
    </div>

    <div class="row">
      <div class="name">Player5</div>
      <div class="score">495</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeaderBoard",
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
  },
  mounted() {
    console.log(this.$store.state.users);
  },
};
</script>

<style lang="stylus" scoped>
#container {
  width: 600px;
  height: auto;
}

.row {
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #AFAFAF;
}

.name {
  position: relative;
  display: inline-block;
  width: 75%;
  line-height: 45px;
}

.score {
  position: relative;
  display: inline-block;
  width: 25%;
}
</style>
