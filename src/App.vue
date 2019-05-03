<template>
  <div id="app">
    <NavBar :player="player" />
    <CharacterCreation :player="player" v-if="!hasCharacter && !inFight"/>
    <router-view/>
    <!-- <Town :player="player" /> -->
    <Battle :player="player" v-if="inFight"/>    
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.player-stats {
  float: right;

  color: #42b983;
  
}
</style>
<script>
import NavBar from './components/NavBar.vue';
import CharacterCreation from './components/CharacterCreation.vue';
import Battle from './components/Battle.vue';

export default {
  components: {
    NavBar,
    CharacterCreation,
    Battle,
  },
  data() {
    return {
      player: {
           name: "" ,
           class: "" ,
           health: 100 ,
           mana: 100 ,
           gold: 50 ,
           level: 1 ,
           exp: 0 },
      hasCharacter: false,
      inFight: false,
    }
  },
  // mounted() {
  //   if (localStorage.name) {
  //     this.playerName = localStorage.name;
  //   }
  //   if (localStorage.class) {
  //     this.playerClass = localStorage.class;
  //   }
  //   if (localStorage.gold) {
  //     this.playerGold = localStorage.gold;
  //   }
  //   if (localStorage.health) {
  //     this.playerHealth = localStorage.health;
  //   }
  //   if (localStorage.mana) {
  //     this.playerMana = localStorage.mana;
  //   }
  //   if (localStorage.hasClass) {
  //     this.hasClass = localStorage.hasClass;
  //   }
  //   if (localStorage.level) {
  //     this.playerLevel = localStorage.level;
  //   }
  //   if (localStorage.exp) {
  //     this.playerExp = localStorage.exp;
  //   }
  // },
}
</script>

