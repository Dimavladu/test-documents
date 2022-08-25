<template>
  <transition
    name="expand"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
  >
    <ul class="subcard" v-show="list.open">
      <li class="subcard_item" v-for="item in list.subCard" :key="item.id">
        <div class="body">
          <div class="title">{{ item.title }}</div>
          <div class="dots" v-for="dot in item.status" :key="dot">
            <dot-svg :style="{ fill: dot }" />
          </div>
          <div class="required">{{ item.required }}</div>
          <div class="text">{{ item.role }}</div>
        </div>
        <card-btns />
      </li>
    </ul>
  </transition>
</template>

<script>
import dotSvg from "./svg/dot.vue";
import cardBtns from "./cardBtns.vue";

export default {
  props: {
    list: {
      type: Object,
      required: false,
    },
  },
  components: { dotSvg, cardBtns },
  setup() {
    const enter = (el) => {
      el.style.height = "auto";
      const height = getComputedStyle(el).height;
      el.style.height = 0;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = height;
      });
    };
    const afterEnter = (el) => {
      el.style.height = "auto";
    };
    const leave = (el) => {
      el.style.height = getComputedStyle(el).height;
      getComputedStyle(el);
      setTimeout(() => {
        el.style.height = 0;
      });
    };
    return { enter, afterEnter, leave };
  },
};
</script>

<style lang="sass" scoped>
.expand-enter-active,
.expand-leave-active
  transition: height 0.5s ease-in-out
  overflow: hidden

.subcard
  margin-left: 15px
  padding: 0
  list-style: none
  &_item
    border: 1px solid #D3D8DF
    border-top: none
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px 16px
    .body
      display: flex
      align-items: center
      gap: 10px
      .title
        font-weight: 500
      .dots

      .required
        color: #FF238D
        margin-top: 2px
        font-weight: 400
        font-size: 11px
      .text
        margin-top: 2px
        color: #8E9CBB
        font-weight: 400
        font-size: 11px
</style>