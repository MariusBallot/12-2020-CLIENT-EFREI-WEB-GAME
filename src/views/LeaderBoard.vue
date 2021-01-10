<template>
  <div class="leaderboard">
    <div class="leaderboard_wrapper">
      <div class="leaderboard_wrapper_title">
        <h2>leaderboard</h2>
        <h3>For the champions of the champions</h3>
      </div>
      <div class="leaderboard_wrapper_infos">
        <div class="leaderboard_wrapper_infos_title">
          <p class="leaderboard_wrapper_infos_title_gametag">#Rank | Player tag</p>
          <div class="leaderboard_wrapper_infos_title_right">
            <p class="leaderboard_wrapper_infos_title_right_pb">Personal best</p>
            <p class="leaderboard_wrapper_infos_title_right_level">Level</p>
          </div>
        </div>
        <div class="leaderboard_wrapper_infos_info">
          <UserRank v-for="(user, i) in users" :key="user.id" :user="user" :rank="i+1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserRank from "@/components/LeaderBoard/UserRank.vue";
export default {
  name: "LeaderBoard",
  components: {
    UserRank
  },
  computed: {
    currUser() {
      return this.$store.state.currUser;
    },
    users() {
      return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  }
};
</script>

<style lang="stylus" scoped>
.leaderboard {
  &_wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding-bottom: 50px;

    &_title {
      margin-top: 100px;

      h2 {
        mainH2($neonRed);
      }

      h3 {
        mainH3();
      }

      +below(800px) {
        display: none;
      }
    }

    &_infos {
      margin-top: 20px;

      &_title {
        display: flex;
        justify-content: space-between;
        // font-size: 1em;
        padding-right: 30px;
        padding-left: 125px;
        padding-bottom: 0;
        color: $neonRed;

        +below(800px) {
          display: none;
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
            margin-left: 50px;
          }
        }
      }

      &_info {
        margin-top: 5px;
        neonBorder();
        padding: 30px 20px;
        width: 800px;

        +below(800px) {
          margin-top: 80px;
          border: none;
        }
      }
    }
  }
}
</style>
px