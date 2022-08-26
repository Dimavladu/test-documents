<template>
  <div>
    <div class="cards">
      <draggable
        v-model="cards"
        item-key="id"
        handle=".move"
        ghost-class="ghost"
        :group="{ name: 'main' }"
      >
        <template #item="card">
          <div class="">
            <div class="card">
              <div class="card_body">
                <div class="card_body_main">
                  <button
                    v-if="card.element.subCard.length"
                    class="arrow_btn"
                    @click.stop="card.element.open = !card.element.open"
                    :class="{ rotate: !card.element.open }"
                  >
                    <arrow-svg />
                  </button>
                  <div class="title">{{ card.element.title }}</div>
                  <div class="dots" v-if="card.element.status?.length">
                    <div
                      class="dot"
                      v-for="dot in card.element.status"
                      :key="dot"
                    >
                      <dot-svg :style="{ fill: dot }" />
                    </div>
                  </div>
                  <div class="description">
                    {{ card.element.description }}
                  </div>
                </div>

                <card-btns />
              </div>
            </div>
            <the-sub-card
              :dataSubCards="card.element.subCard"
              :open="card.element.open"
              @changeCards="(val) => (card.element.subCard = val)"
              @change="changeCards(cards)"
            />
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

import draggable from "vuedraggable";
import cardBtns from "./cardBtns.vue";

import theSubCard from "./theSubCard.vue";

import arrowSvg from "./svg/arrow.vue";
import dotSvg from "./svg/dot.vue";

export default {
  name: "theCard",
  components: { draggable, theSubCard, cardBtns, arrowSvg, dotSvg },
  props: {
    dataCards: {
      type: Array,
      required: false,
    },
  },
  setup(props, { emit }) {
    const cards = computed({
      get() {
        return props.dataCards;
      },
      set(val) {
        emit("changeCards", val);
      },
    });
    const changeCards = (cards) => {
      emit("changeCards", cards);
    };
    return { cards, changeCards };
  },
};
</script>

<style lang="sass" scoped>
.cards
  list-style: none
  padding: 0px
.rotate
  transform: rotate(180deg)
.required
  color: #FF238D
.card
  margin-top: -1px
  transition: 0.3s all ease
  padding: 13px 16px
  border: 1px solid #D3D8DF
  &_body
    display: flex
    align-items: center
    justify-content: space-between
    &_main
      display: flex
      align-items: center
      gap: 10px
      .arrow_btn
        cursor: pointer
        background: #fff
        border: 1px solid #D3D8DF
        border-radius: 20px
        padding: 3px 7px
        transition: 0.3s all ease
        &:hover
          opacity: 0.5
      .title
        font-size: 15px
        font-weight: 500
      .dots
        display: flex
        gap: 7px
      .description
        margin-top: 2px
        color: #8E9CBB
        font-weight: 400
        font-size: 11px
  .subcard
    background: white

.ghost
  opacity: 0.9
  background: #c8ebfb
</style>