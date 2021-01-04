<template>
  <div>{{ user.gametag }} {{ user.level }}</div>
</template>

<script>
export default {
  name: "UserRank",
  props: {
    user: null,
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped></style>
