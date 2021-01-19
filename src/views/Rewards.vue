<template>
  <div class="rewards">
    <div class="rewards_wrapper">
      <div class="rewards_wrapper_title">
        <h2>rewards</h2>
        <h3>Collectibles baby!</h3>
      </div>
      <div v-if="icons.length == 0" class="rewards_wrapper_loader">
        <Loader />
      </div>
      <div v-else class="rewards_wrapper_content">
        <div class="rewards_wrapper_content_header">
          <h4>icons</h4>
        </div>
        <div class="rewards_wrapper_content_icons">
          <div
            v-for="icon in icons"
            :key="icon.id"
            class="rewards_wrapper_content_icons_icon"
            :class="{ locked: currUser.level < icon.level }"
          >
            <div class="rewards_wrapper_content_icons_icon_left">
              <img :src="icon.image[0].url" alt />
            </div>
            <div class="rewards_wrapper_content_icons_icon_right">
              <h5>{{ icon.name }}</h5>
              <p class="dBlue">
                Author:
                <a
                  :href="icon.authorInfo.socialUrl"
                  target="_blank"
                >{{ icon.authorInfo.name }}</a>
              </p>
              <p class="dBlue">
                Required Level:
                <strong>{{ icon.level }}</strong>
              </p>
            </div>
            <div
              v-if="currUser.level < icon.level"
              class="rewards_wrapper_content_icons_icon_select"
            >
              <CusButton bText="locked" bCol="blue" />
            </div>
            <div v-else class="rewards_wrapper_content_icons_icon_select">
              <CusButton
                v-if="icon.id == currUser.icon"
                bText="selected"
                bCol="gold"
                class="selected"
              />
              <CusButton v-else bText="select" @click.native="selectIcon(icon.id)" bCol="gold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton";
import Loader from "@/components/UI/Loader";

export default {
  name: "Rewards",
  components: {
    CusButton,
    Loader
  },
  computed: {
    icons() {
      return this.$store.state.rewards.icons;
    },
    currUser() {
      return this.$store.state.currUser;
    }
  },
  mounted() {
    this.$store.dispatch("loadIcons");
  },
  methods: {
    selectIcon(iconId) {
      this.$store.dispatch("changedIcon", iconId);
    }
  }
};
</script>

<style lang="stylus" scoped>
.rewards {
  &_wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    padding-bottom: 50px;

    &_title {
      margin-top: 100px;

      h2 {
        mainH2($neonGold);
      }

      h3 {
        mainH3();
      }

      +below(800px) {
        display: none;
      }
    }

    &_content {
      margin-top: 20px;
      neonBorder();
      padding: 30px 20px;

      +below(800px) {
        margin-top: 80px;
        border: none;
      }

      &_header {
        margin-bottom: 20px;

        h4 {
          text-transform: uppercase;
          font-size: 2em;
          // text-align: center;
          font-weight: 400;
        }
      }

      &_icons {
        &_icon {
          display: flex;
          align-items: center;
          width: 800px;
          border-bottom: solid $neonBlue 1px;
          padding-bottom: 10px;
          margin-bottom: 20px;

          +below(800px) {
            width: 100%;
          }

          &:last-child {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
          }

          &.locked {
            pointer-events: none;
            opacity: 0.3;
          }

          &_left {
            margin-right: 10px;

            img {
              width: 100px;
              height: auto;
            }
          }

          &_right {
            h5 {
              color: $neonRed;
              font-weight: 400;
              font-size: 2em;
            }

            .dBlue {
              color: $darkBlue;

              strong, a {
                color: $neonBlue;
                font-weight: inherit;
              }
            }

            a {
              text-decoration: underline;
            }

            +below(800px) {
              h5 {
                font-size: 1.3em;
              }
            }
          }

          &_select {
            margin-left: auto;
            width: 130px;
            height: 60px;

            .selected {
              pointer-events: none;
              opacity: 0.3;
            }
          }
        }
      }
    }
  }
}
</style>