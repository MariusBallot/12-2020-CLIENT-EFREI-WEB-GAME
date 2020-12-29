<template>
  <div class="iconList">
    <ul>
      <li
        v-for="icon in icons"
        :key="icon.id"
        v-on:click="selected(icon.id)"
        :class="{selected:icon.id===selectedId, locked:icon.locked}"
      >
        <img :src="icon.url" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import { TweenLite } from "gsap";

export default {
  name: "IconList",
  data() {
    return {
      icons: this.$store.state.rewards.icons,
      selectedId: null
    };
  },
  mounted() {},
  methods: {
    selected(id) {
      this.selectedId = id;
      this.$emit("selectedIcon", id);
    }
  },
  watch: {}
};
</script>

<style lang="stylus" scoped>
.iconList {
  ul {
    display: flex;

    li {
      margin: 0 10px;

      &:hover {
        cursor: pointer;
      }

      &.selected {
        border: solid $neonBlue 2px;
      }

      &.locked {
        pointer-events: none;
        opacity: 0.5;
      }

      img {
        width: 100px;
        height: auto;
      }
    }
  }
}
</style>
