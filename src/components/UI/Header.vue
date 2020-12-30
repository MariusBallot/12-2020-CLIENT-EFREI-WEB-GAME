<template>
  <div class="header">
    <img src="/assets/images/faces.png" id="img" />
    <h1>the game</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  justify-content: flex-start;

  #img {
    width: 63px;
    height: 63px;
    margin: 20px;
  }

  h1 {
    padding-top: 33px;
    text-transform: uppercase;
  }
}
</style>
