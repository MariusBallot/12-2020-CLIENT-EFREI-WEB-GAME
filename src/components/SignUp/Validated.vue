<template>
  <div class="validated">
    <div class="validated_wrapper">
      <div class="validated_wrapper_content">
        <h2>Welcome home</h2>
        <h3>{{name}}, has been successfully registered ✅</h3>

        <div class="validated_wrapper_content_but">
          <router-link to="/login">
            <CusButton bCol="blue" bText="Login" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CusButton from "@/components/UI/CusButton.vue";
export default {
  name: "Validated",
  components: {
    CusButton
  },
  props: {
    name: null
  },
  data() {
    return {
      selectedId: null
    };
  }
};
</script>

<style lang="stylus" scoped>
.validated {
  &_wrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    center();

    &_content {
      padding: 200px;
      center();
      neonBorder();
      flex-direction: column;

      h2 {
        color: $neonRed;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 3.5em;
        glow($neonRed, 10px);
      }

      h3 {
        margin-top: -10px;
        font-weight: 400;
      }

      &_but {
        margin-top: 15px;
        width: $butWidth;
        height: $butHeight;
      }
    }
  }
}
</style>
