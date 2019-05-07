<template>
  <div id="app" >
    <CharacterCreation :player="player" v-if="!hasCharacter && !inFight"/>
    <Town v-if="hasCharacter"/>
    <router-view/>
    <!-- <Town :player="player" /> -->
    <CharacterStats :player="player" />
    <Battle :player="player" :monsters="monsters" v-if="inFight"/>
  </div>
</template>

<style>
#app {
  background-image: url("../public/bg.png"), url("../public/outside.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  
}
.background {
    position: absolute;
    z-index: -1;
}
#character-stats {
  padding: 30px;
}

</style>
<script>
import CharacterStats from './components/CharacterStats.vue';
import CharacterCreation from './components/CharacterCreation.vue';
import Battle from './components/Battle.vue';
import Town from './components/Town.vue';

export default {
  components: {
    CharacterStats,
    CharacterCreation,
    Battle,
    Town,
  },
  data() {
    return {
      i: 0,
      player: {
           name: "" ,
           class: "",
           health: 100 ,
           mana: 100 ,
           gold: 50 ,
           level: 1 ,
           exp: 0 },
      classes: [
        {name: "Warrior",
         avatar: "warrior-avatar.png"},
         {name: "Mage",
         avatar: "mage-avatar.png"},
         {name: "Ranger",
         avatar: "ranger-avatar.png"}
      ],
      monsters: [ 
        {name: "Goblin", avatar: "goblin.png", health: 100},
        {name: "Orc", avatar: "orc.png", health: 150},
        {name: "Ogre", avatar: "ogre.png", health: 200},
        {name: "Troll", avatar: "troll.png", health: 250}
        ],
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

