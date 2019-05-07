<template>
    <div id="character-stats">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/tavern">Tavern</router-link> |
      <router-link to="/battle" :player="player">Fight a Monster</router-link> -->
      <!-- <span class="player-stats"><b>Level: {{player.level}} Exp: {{player.exp}} | Heath:{{player.health}} Mana:{{player.mana}} Gold:{{player.gold}}</b> </span> -->
      <div class="character-info" v-if="$parent.player.class">
        <div class="health">
          <div :style="healthBar" class="health-bar">{{player.health}}</div>
        </div>
        <div :style="manaBar" class="mana"></div>
        <div class="character-avatar">
          <img :src="require('../../public/' + player.class.avatar)" alt="">
        </div>
      </div>
      <div class="enemy-info" v-if="$parent.inFight">
        <div class="enemy-avatar" >
          <img :src="require('../../public/' + $parent.monsters[$parent.i].avatar)" alt="">
        </div>
        <div :style="enemyHealthBar" class="enemy-health">{{$parent.monsters[$parent.i].health}}</div>        
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
  .healh-bar {
    background-color: darkred;
    
  }
  .health {
    text-align: center;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    margin-bottom: 67px;
    height: 4.5%;
    width: 385px;
    left: 300px;
    z-index: 1;
    text-align: center;
  }
  .enemy-health {
    background-color: darkred;
    text-align: center;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    margin-bottom: 67px;
    height: 4.5%;
    max-width: 385px;
    left: 765px;
    z-index: 1;
    text-align: center;
  }
  .mana {
    background-color: blue;
    text-align: center;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    margin-bottom: 13px;
    height: 4.5%;
    max-width: 385px;
    left: 300px;
    z-index: 1;
    text-align: center;
  }
  .character-avatar {
    position:absolute;
    z-index:0;
    bottom: 0;
  }
  .enemy-avatar {
    position:absolute;
    z-index:0;
    bottom: 0;
    width: 50%;
    left: 48%;
    transform: scaleX(-1);
  }
</style>