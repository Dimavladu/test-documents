<template>
  <div class="form__group field">
    <searchSvg />
    <input
      v-model="textInput"
      type="input"
      class="form__field"
      placeholder="Поиск"
      name="name"
      id="name"
      required
    />
    <div class="border"></div>
    <cross-svg v-if="textInput.length" @click="textInput = ''" />
  </div>
</template>

<script>
import searchSvg from "./svg/search.vue";
import crossSvg from "./svg/cross.vue";
import { computed } from "@vue/runtime-core";
export default {
  components: { searchSvg, crossSvg },
  props: {
    modelValue: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const textInput = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      },
    });
    return { textInput };
  },
};
</script>

<style lang="sass" scoped>
.form__group
  position: relative
  display: flex
  justify-content: center
  align-items: center
  width: 50%
  margin: 15px 0
  gap: 5px

  &:after
    content: " "
    position: absolute
    border-bottom: 1px #8e9cbb solid
    bottom: -3px
    height: 1px
    width: 100%

.form__field
  width: 100%
  border: 0
  outline: 0
  font-size: 13px
  font-weight: 500
  color: black
  padding: 5px 0
  background: transparent
  transition: 0.3s all ease
  &::placeholder
    font-style: italic
</style>