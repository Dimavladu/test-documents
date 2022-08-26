<template>
  <div class="container">
    <the-header />
    <the-input />
    <the-card
      :dataCards="cards"
      @changeCards="(cards) => changeCards('cards', cards)"
    />
    <div class="other_cards">
      <the-card
        :dataCards="mainOtherCards"
        @changeCards="(mainCards) => changeCards('mainOtherCards', mainCards)"
      />
      <the-sub-card
        class="margStyle"
        :dataSubCards="subOtherCards"
        @changeCards="(subCards) => changeCards('subOtherCards', subCards)"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import theInput from "./components/theInput.vue";
import theHeader from "./components/theHeader.vue";
import theCard from "./components/theCard.vue";
import theSubCard from "./components/theSubCard.vue";

export default {
  name: "App",
  components: { theInput, theHeader, theCard, theSubCard },
  setup() {
    const store = useStore();

    const margStyle = { margin: 0 };
    const cards = computed(() => store.state.cards);

    const mainOtherCards = computed(() => store.state.mainOtherCards);
    const subOtherCards = computed(() => store.state.subOtherCards);

    const changeCards = (type, chgCards) => {
      store.commit("updateCards", [chgCards, type]);
    };

    return { cards, mainOtherCards, subOtherCards, changeCards, margStyle };
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap')

#app
  font-family: "Fira Sans"
svg
  text-align: center
.container
  width: 90%
  margin: 38px 30px
  .modal-content
    display: flex
    flex-direction: column
    h1,
    p
      margin-bottom: 16px

    h1
      font-size: 32px

    p
      font-size: 18px
.other_cards
  margin-top: 10px
.tall
  height: 100px
  background: #000
</style>
