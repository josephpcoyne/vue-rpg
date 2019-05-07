<template>
  <div class="action-bar">
    <button class="attack" @click="attack()"></button>
    <button class="special-attack" @click="specialAttack()"></button>
    <button class="heal" @click="heal()"></button>
  </div>
</template>

<script>
  export default {
    methods: {
      attack() {
        this.$emit('attack')
      },
      heal() {
        this.$emit('heal')
      },
      specialAttack() {
        this.$emit('special-attack');
      }
    },
  }
</script>

<style scoped>
  .attack {
    background-image: url("../../public/attack.png");
    background-repeat: no-repeat;
    height: 112px;
    width: 112px;
    border: none;
  }
  
  .heal {
    background-image: url("../../public/heal.png");
    background-repeat: no-repeat;
    height: 112px;
    width: 112px;
    border: none;
}
  .special-attack {
    background-image: url("../../public/special-attack.png");
    background-repeat: no-repeat;
    height: 112px;
    width: 112px;
    border: none;
  }
</style>