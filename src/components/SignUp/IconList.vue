<template>
  <div class="iconList">
    <ul>
      <li
        v-for="icon in icons"
        :key="icon.id"
        v-on:click="selected(icon.id)"
        :class="{selected:icon.id===selectedId, locked:icon.locked}"
      >
        <img :src="icon.image[0].url" alt />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IconList",
  data() {
    return {
      selectedId: null
    };
  },
  computed: {
    icons() {
      let icons = [];
      this.$store.state.rewards.icons.forEach((icon, i) => {
        if (parseInt(icon.level) == 0) icons.push(icon);
      });
      console.log(icons);
      return icons;
    }
  },
  mounted() {
    this.$store.dispatch("loadIcons");
  },
  methods: {
    selected(id) {
      this.selectedId = id;
      this.$emit("selectedIcon", id);
    }
  }
};
</script>

<style lang="stylus" scoped>
.iconList {
  ul {
    display: flex;
    overflow: scroll;

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
