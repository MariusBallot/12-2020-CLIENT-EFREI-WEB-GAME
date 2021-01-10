<template>
  <div class="userrank">
    <div class="userrank_image"><img :src="user.iconObj.image[0].url" /></div>
    <div class="userrank_person">
      <p class="userrank_person_gametag">
        {{ user.gametag }}
      </p>
      <div class="userrank_person_right">
        <p class="userrank_person_right_pb">
          {{ user.personalbest }}
        </p>
        <p class="userrank_person_right_level">{{ Math.floor(user.level) }}</p>
      </div>
    </div>
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
  align-items: center;
  width: 800px;
  border-bottom: solid $neonBlue 1px;
  padding-bottom: 10px;
  margin-bottom: 20px;

  +below(800px) {
    width: 100%;
  }

  &_person {
    display: flex;
    justify-content: space-between;
    width: 70vw;

    &_gametag {
    }

    &_right {
      display: flex;
      justify-content: space-between;

      &_pb {
      }

      &_level {
        text-align: right;
        width: 100px;
        margin-left: 70px;
      }
    }
  }

  &_image {
    margin-right: 50px;
  }

  img {
    width: 50px;
    height: 50px;
  }
}
</style>
