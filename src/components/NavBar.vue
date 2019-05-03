<template>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tavern">Tavern</router-link> |
      <router-link to="/battle" :player="player">Fight a Monster</router-link>
      <span class="player-stats"><b>Level: {{player.level}} Exp: {{player.exp}} | Heath:{{player.health}} Mana:{{player.mana}} Gold:{{player.gold}}</b> </span>
    </div>
</template>

<script>
  export default {
    props: {
      player: Object
    }
  }
</script>

<style scoped>

</style>