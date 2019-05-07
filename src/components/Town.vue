<template>
  <div class="town">
    <Tavern v-if="inTavern" />
    <div class="grid-container">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"><button @click="visitTavern()">Visit Tavern</button></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"><button @click="$parent.inFight = true"></button></div>
    </div>
  </div>
</template>

<script>
import Tavern from './Tavern.vue';

  export default {
    props: {
      player: Object,
      },
    components: {
      Tavern,
    },
    data() {
      return {
        inTavern: false
      }
    },
    methods: {
      visitTavern() {
        this.inTavern = true;
      }
    },
  }
</script>

<style scoped>
 .window {
  margin: auto 0;
  padding: 4%;
  background-image: url("../../public/textbg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  bottom: 50%;
  left: 20%;
  font-family: 'Quintessential', cursive;
  /* height: 0; */
  /* bottom: 0; */
  position: absolute;
  text-align: center;
  }
  .grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10%;
}
.grid-item {
  padding: 50px;
  font-size: 30px;
  text-align: center;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  
}

</style>