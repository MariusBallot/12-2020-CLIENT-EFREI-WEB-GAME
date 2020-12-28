<template>
  <div class="LeaderBoard"><h1>Le LeaderBoard très très bo !</h1></div>
</template>

<script>
export default {
  name: "LeaderBoard",
  mounted() {
    console.log(this.$store.state.users);
  },
};
</script>
