<template>
  <div class="tavern">
    <h2>Welcome traveler. Only 10 gold for a bed for the night.</h2>
    <button @click="sleep()">Stay the night</button>
  </div>
</template>

<script>
  export default {
    methods: {
      sleep() { if (this.$parent.playerGold >= 10) {
        this.$parent.playerGold -= 10;
        this.$parent.playerHealth = 100;
        this.$parent.playerMana = 100;
        localStorage.gold = this.$parent.playerGold;
        localStorage.health = this.$parent.playerHealth;
        localStorage.mana = this.$parent.playerMana;
      }
        
      }
    },
  }
</script>

<style scoped>

</style>