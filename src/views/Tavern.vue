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
        } else {
          alert("You don't have enough gold!")
        }
        
      }
    },
  }
</script>

<style scoped>

</style>