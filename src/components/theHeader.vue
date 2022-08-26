<template>
  <div>
    <div class="header">
      <h1>Документы</h1>
      <div class="buttons">
        <button class="button">
          <mark-svg />
        </button>
        <div class="button">
          <plus-svg />
          <div class="button_text">Новый тип</div>
        </div>
        <div class="button">
          <plus-svg />
          <div class="button_text">Новый документ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import markSvg from "./svg/mark.vue";
import plusSvg from "./svg/plus.vue";
export default {
  components: { markSvg, plusSvg },
  setup() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.header
  display: flex
  align-items: center
  justify-content: space-between
.buttons
  display: flex
  gap: 20px
h1
  font-weight: 500
  font-size: 22px
  line-height: 108%
.button
  cursor: pointer
  background: #fff
  border: 1px solid #D3D8DF
  border-radius: 20px
  display: flex
  align-items: center
  justify-content: center
  padding: 7px 8px
  transition: .3s all ease
  &_text
    font-weight: 500
    margin-left: 10px
    font-size: 13px

  &:hover
    background: #f0f0f0
.disabled
  opacity: 0.5
  cursor: not-allowed
  pointer-events: none
</style>
