<template>
  <draggable
    v-model="subCards"
    item-key="id"
    handle=".move"
    ghost-class="ghost"
    :group="{ name: 'sub' }"
  >
    <template #item="subCard">
      <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div
          class="subcard"
          v-show="open || open === undefined"
          :class="$attrs.class"
        >
          <li class="subcard_item">
            <div class="subcard_body">
              <div class="subcard_title">{{ subCard.element.title }}</div>
              <div
                class="dots"
                v-for="dot in subCard.element.status"
                :key="dot"
              >
                <dot-svg :style="{ fill: dot }" />
              </div>
              <div class="subcard_required">{{ subCard.element.required }}</div>
              <div class="subcard_text">{{ subCard.element.role }}</div>
            </div>
            <card-btns />
          </li>
        </div>
      </transition>
    </template>
  </draggable>
</template>

<script>
import { computed } from "vue";

import dotSvg from "./svg/dot.vue";
import cardBtns from "./cardBtns.vue";

import draggable from "vuedraggable";

export default {
  inheritAttrs: false,
  props: {
    dataSubCards: {
      type: Array,
      required: false,
    },
    open: {
      type: Boolean,
      required: false,
      default: () => undefined,
    },
  },
  components: { draggable, cardBtns, dotSvg },
  setup(props, { emit }) {
    // const changeCards = (cards) => emit("changeCards", cards);
    const subCards = computed({
      get() {
        return props.dataSubCards;
      },
      set(val) {
        emit("changeCards", val);
      },
    });
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
    return { enter, afterEnter, leave, subCards };
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
    margin-top: -1px
    transition: 0.3s all ease
    border: 1px solid #D3D8DF
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px 16px
    .subcard_body
      display: flex
      align-items: center
      gap: 10px
      .subcard_title
        font-size: 14px
        font-weight: 500
      .subcard_dots

      .subcard_required
        color: #FF238D
        margin-top: 2px
        font-weight: 400
        font-size: 11px
      .subcard_text
        margin-top: 2px
        color: #8E9CBB
        font-weight: 400
        font-size: 11px
.ghost
  opacity: 0.9
  background: #c8ebfb
.margStyle
  margin: 0
</style>