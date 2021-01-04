<template>
  <div>
    {{ user.gametag }} {{ user.level }}
    <img :src="user.iconObj.image[0].url" />
  </div>
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
