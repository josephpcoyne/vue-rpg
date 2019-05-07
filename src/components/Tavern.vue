<template>
  <div class="tavern">
    <h2>Welcome traveler. Only {{10 * $parent.player.level}} gold for a bed for the night.</h2>
    <button @click="sleep()">Stay the night</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sleep() { 
        if (this.$parent.player.gold >= 10) {
        this.$parent.player.gold -= 10;
        this.$parent.player.health = 100;
        this.$parent.player.mana = 100;
        localStorage.player = this.$parent.player;
        this.$parent.inTavern = false;
        } else {
          alert("You don't have enough gold!")
        }
        
      }
    },
  }
</script>

<style scoped>
 .tavern {
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
</style>