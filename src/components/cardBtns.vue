<template>
  <div class="btns">
    <change-svg />
    <trash-svg />
    <move-svg />
  </div>
</template>

<script>
import changeSvg from "./svg/change.vue";
import trashSvg from "./svg/trash.vue";
import moveSvg from "./svg/move.vue";

export default {
  components: { changeSvg, trashSvg, moveSvg },
  setup() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.btns
  display: flex
  gap: 20px
  svg
    transition: 0.3s all ease
    &:hover
      opacity: 0.5
</style>