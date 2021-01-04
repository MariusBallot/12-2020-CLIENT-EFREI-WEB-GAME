<template>
  <div class="userrank">
    <img :src="user.iconObj.image[0].url" />
    <div class="userrank_person">{{ user.gametag }} {{ user.level }}</div>
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

<style lang="stylus" scoped>
.userrank {
  display: flex;

  &_person {
    border-bottom: 1px solid #AFAFAF;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 20px;
  }
}
</style>
