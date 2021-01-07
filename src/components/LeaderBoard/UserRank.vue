<template>
  <div class="userrank">
    <div class="userrank_image"><img :src="user.iconObj.image[0].url" /></div>
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
  margin-bottom: 20px;

  &_person {
    display: flex;
    justify-content: space-between;
    width: 70vw;
    border-bottom: 1px solid #AFAFAF;
  }

  &_image {
    margin-right: 50px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
}
</style>
