<template>
  <div class="container">
    <the-header />
    <the-cards />
  </div>
</template>

<script>
import theHeader from "./components/theHeader.vue";
import theCards from "./components/theCards.vue";

export default {
  name: "App",
  components: { theHeader, theCards },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap')

#app
  font-family: "Fira Sans"
svg
  text-align: center
.container
  width: 1200px
  margin: 38px 30px
</style>
