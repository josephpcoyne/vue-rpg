<template>
    <div id="character-stats">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/tavern">Tavern</router-link> |
      <router-link to="/battle" :player="player">Fight a Monster</router-link> -->
      <!-- <span class="player-stats"><b>Level: {{player.level}} Exp: {{player.exp}} | Heath:{{player.health}} Mana:{{player.mana}} Gold:{{player.gold}}</b> </span> -->
      <div class="character-info" v-if="player.class">
        <div class="health">
          <div :style="healthBar" class="health-bar"></div>
        </div>
        <div class="mana">
          <div :style="manaBar" class="mana-bar"></div>
        </div>
        <div class="character-avatar">
          <img :src="require('../../public/' + player.class.avatar)" alt="">
        </div>
      </div>
      <div class="enemy-info" v-if="$parent.inFight">
        <div class="enemy-avatar" >
          <img :src="require('../../public/' + $parent.monsters[$parent.i].avatar)" alt="">
        </div>
        <div class="enemy-health">
          <div :style="enemyHealthBar" class="enemy-health-bar"></div>
        </div>        
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      player: Object
    },
    computed: {
      healthBar () {
        return {
          width: this.player.health + '%',
      }
    },
      manaBar () {
        return {
          width: this.player.mana + '%',
      }
    },
      enemyHealthBar() {
        return {
          width: this.$parent.monsters[this.$parent.i].health + '%',
        } 
      },
  }
 }
</script>

<style scoped>
  .health-bar {
    background-color: darkred;
    border-radius: 10px;
    z-index: 2;
    height: 100%;
  }
  .mana-bar {
    background-color: blue;
    border-radius: 10px;
    z-index: 2;
    height: 100%;
  }
  .health {
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 67px;
    height: 4.5%;
    width: 385px;
    left: 300px;
    z-index: 1;
    
  }
  .mana {
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 13px;
    height: 4.5%;
    width: 385px;
    left: 300px;
    z-index: 1;
    text-align: center;
  }
  .enemy-health-bar {
    background-color: darkred;
    border-radius: 10px;
    z-index: 2;
    height: 100%;
  }
  .enemy-health {
    text-align: center;
    position: absolute;
    bottom: 0;
    margin-bottom: 67px;
    height: 4.5%;
    width: 385px;
    left: 765px;
    z-index: 1;
  }

  .character-avatar {
    position:absolute;
    bottom: 0;
  }
  .enemy-avatar {
    position:absolute;
    bottom: 0;
    width: 50%;
    left: 48%;
    transform: scaleX(-1);
  }
</style>