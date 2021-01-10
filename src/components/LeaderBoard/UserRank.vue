<template>
  <div class="userrank">
    <div class="userrank_image">
      <img :src="user.iconObj.image[0].url" />
    </div>
    <div class="userrank_person" :class="{first: rank==1, me: currUser.id == user.id}">
      <p class="userrank_person_gametag">
        <strong>#{{rank}}</strong>
        {{ user.gametag }}
      </p>
      <div class="userrank_person_right">
        <p class="userrank_person_right_pb">{{ user.personalbest }}</p>
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
    rank: null
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    }
  }
};
</script>

<style lang="stylus" scoped>
.userrank {
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: solid $neonBlue 1px;
  padding-bottom: 10px;
  margin-bottom: 20px;

  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }

  +below(800px) {
    width: 100%;
  }

  &_person {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.5em;

    &.me {
      color: $neonRed;
    }

    &.first {
      color: $neonGold;
      glow($neonGold, 5px);
    }

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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
