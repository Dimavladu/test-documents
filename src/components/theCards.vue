<template>
  <div>
    <ul class="cards">
      <li v-for="card in cards" :key="card.id">
        <div
          class="card"
          @click="selected = card.id"
          :class="{ selected: selected === card.id }"
        >
          <div class="card_body">
            <div class="card_body_main">
              <button
                class="arrow_btn"
                @click.stop="card.open = !card.open"
                :class="{ rotate: !card.open }"
              >
                <arrow-svg />
              </button>
              <div class="title">{{ card.title }}</div>
              <div class="dots" v-if="card.status?.length">
                <div class="dot" v-for="dot in card.status" :key="dot">
                  <dot-svg :style="{ fill: dot }" />
                </div>
              </div>
              <div class="description">
                {{ card.description }}
              </div>
            </div>
            <card-btns />
          </div>
        </div>
        <sub-card :list="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

import cardBtns from "./cardBtns.vue";
import subCard from "./theSubCard.vue";

import arrowSvg from "./svg/arrow.vue";
import dotSvg from "./svg/dot.vue";

export default {
  components: { cardBtns, arrowSvg, dotSvg, subCard },
  setup() {
    const selected = ref();
    const opened = ref([]);
    const cards = ref([
      {
        id: 345345345345, //При добавлении сделать присвоение new Date()
        title: "Обязательные для всех",
        description:
          "Документы, обязательные для всех сотрудников без исключения",
        status: ["red", "yellow", "orange"],
        open: false,
        subCard: [
          {
            title: "Паспорт",
            status: ["blue"],
            required: "Обязательный",
            role: "Для всех",
            id: 123123,
          },
          {
            title: "ИНН",
            status: [],
            required: "Обязательный",
            role: "Для всех",
            id: 123123324,
          },
        ],
      },
      {
        id: 213123,
        title: "Обязательные для трудоустройства",
        discription: "",
        status: ["green"],
        open: false,
        subCard: [
          {
            title: "Паспорт",
            status: ["blue"],
            required: "Обязательный",
            role: "Для всех",
            id: 1231323,
          },
          {
            title: "ИНН",
            status: [],
            required: "Обязательный",
            role: "Для всех",
            id: 123324,
          },
        ],
      },
    ]);
    // const showSubCard = (id) => {
    //   opened.value.map((val) => {
    //     if (val === id) return;
    //   });
    //   opened.value.push(id);
    // };
    return { cards, selected, opened };
  },
};
</script>

<style lang="sass" scoped>
.cards
  list-style: none
  padding: 0px
.rotate
  transform: rotate(180deg)
.selected
  background: #f0f0f0
.required
  color: #FF238D
.card
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
</style>