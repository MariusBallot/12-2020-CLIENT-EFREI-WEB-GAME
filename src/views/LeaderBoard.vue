<template>
  <div class="leaderboard">
    <div class="leaderboard_wrapper">
      <div class="leaderboard_wrapper_title">
        <h2>leaderboard</h2>
        <h3>For the champions of the champions</h3>
      </div>
      <div class="leaderboard_wrapper_infos">
        <UserRank v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserRank from "@/components/LeaderBoard/UserRank.vue";
export default {
  name: "LeaderBoard",
  components: {
    UserRank,
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },
};
</script>

<style lang="stylus" scoped>
.leaderboard {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    &_title {
      h2 {
        font-weight: 500;
        font-size: 63.5393px;
        line-height: 75px;
        glow($neonRed, 10px);
        signH2();
      }

      h3 {
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        glow($neonBlue, 10px);
        signH3;
      }

      margin-bottom: 30px;
    }
  }
}
</style>
px