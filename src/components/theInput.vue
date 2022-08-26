<template>
  <div class="form__group field">
    <i><searchSvg /></i>
    <input
      type="input"
      class="form__field"
      placeholder="Поиск"
      name="name"
      id="name"
      required
    />
    <div class="border"></div>
    <!-- <label for="name" class="form__label">Name</label> -->
  </div>
</template>

<script>
import searchSvg from "./svg/search.vue";

export default {
  components: { searchSvg },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 15px 0;
}
.form__group:after {
  content: " ";
  position: absolute;
  border-bottom: 1px #6c757d solid;
  bottom: 0;
  height: 1px;
  width: 100%;
}
.form__field {
  width: 100%;
  border: 0;
  // border-bottom: 1px solid #8e9cbb;
  outline: 0;
  font-size: 13px;
  font-weight: 500;
  color: black;
  padding: 5px 0;
  background: transparent;
  transition: 0.3s all ease;
  .form__group:focus ~ .form__group:after {
    border-bottom: 1px solid #0066ff;
  }

  // &::placeholder {
  //   color: transparent;
  // }
  // &:placeholder-shown ~ .form__label {
  //   font-size: 1.3rem;
  //   cursor: text;
  //   top: 20px;
  // }
}
// .form__label {
//   position: absolute;
//   top: 0;
//   display: block;
//   transition: 0.2s;
//   font-size: 1rem;
//   color: $gray;
// }

// .form__field:focus {
//   ~ .form__label {
//     position: absolute;
//     top: 0;
//     display: block;
//     transition: 0.2s;
//     font-size: 1rem;
//     color: $primary;
//     font-weight: 700;
//   }
//   padding-bottom: 6px;
//   font-weight: 700;
//   border-width: 3px;
//   border-image: linear-gradient(to right, $primary, $secondary);
//   border-image-slice: 1;
// }
// .form__field {
//   &:required,
//   &:invalid {
//     box-shadow: none;
//   }
// }
// body {
//   font-family: "Poppins", sans-serif;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   font-size: 1.5rem;
//   background-color: #222222;
// }
</style>