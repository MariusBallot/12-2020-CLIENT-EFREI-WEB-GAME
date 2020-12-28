<template>
  <div class="progressBar">
    <div ref="progressBarFill" class="progressBar_fill"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: null
  },
  mounted() {
    this.$refs.progressBarFill.style.width = `${this.progress * 100}%`;
  },
  watch: {
    progress: function() {
      this.$refs.progressBarFill.style.width = `${this.progress * 100}%`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.progressBar {
  width: 100%;
  height: 100%;
  border: solid $neonBlue 2px;
  border-radius: 2px;

  &_fill {
    height: 100%;
    background: $neonBlue;
    transition: width 0.1s;
  }
}
</style>
