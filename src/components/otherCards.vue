<template>
  <div class="other_cards">
    <draggable
      item-key="id"
      :group="{ name: 'sub' }"
      v-model="otherCards"
      ghost-class="ghost"
      handle=".move"
    >
      <template #item="othCard">
        <li class="subcard_item">
          <div class="subcard_body">
            <div class="subcard_title">{{ othCard.element.title }}</div>
            <div class="dots" v-for="dot in othCard.element.status" :key="dot">
              <dot-svg :style="{ fill: dot }" />
            </div>
            <div class="subcard_required">
              {{ othCard.element.required }}
            </div>
            <div class="subcard_text">{{ othCard.element.role }}</div>
          </div>
          <card-btns />
        </li>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import dotSvg from "./svg/dot.vue";
import cardBtns from "./cardBtns.vue";

export default {
  components: { draggable, dotSvg, cardBtns },
  props: {
    otherCards: {
      type: Array,
      required: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.other_cards
  margin-top: 10px
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
</style>