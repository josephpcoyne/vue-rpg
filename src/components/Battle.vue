<template>
  <div class="battle">
    <div class="battle-text">
      <h1>A {{$parent.monsters[$parent.i].name}} Appeared!</h1>
      <h2>Enemy Health: {{$parent.monsters[$parent.i].health}}</h2>
      <ul v-for="actionLog in actionLogs" >
        <li>{{actionLog}}</li>
      </ul>
    </div>
    <ActionBar @attack="attack" @heal="heal" @special-attack="specialAttack" />
  </div>
</template>
<style scoped>
.battle-text {
  margin: auto 0;
  padding: 4%;
  background-image: url("../../public/textbg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  bottom: 50%;
  left: 20%;
  position: absolute;
  text-align: center;
}
.action-bar {
  /* border-style: solid;
  border-width: 10px;
  width: 340px; */
  position: absolute;
  bottom: 18%;
  left: 38%;
  
}

</style>

<script>
import ActionBar from './ActionBar.vue';

export default {
  components: {
    ActionBar,
  },
  props: {
    player: Object
  },
  data() {
    return {
      playerHealth: this.$parent.player.health,
      playerDamage: "",
      specialDamage: "",
      enemyDamage: "",
      playerHeal: "",
      actionLogs: [],
    }
  },
  watch: {
    enemyHealth() {
      if (this.$parent.monsters[this.$parent.i].health <= 0) {
        var goldDrop = Math.floor(Math.random() * 20) + 1
        var exp = Math.floor(Math.random() * (30 - 15 + 1) + 15);
        alert("You Defeated The Monster! The Monster dropped " + goldDrop + " gold! You gained " + exp + " XP!");
        this.$parent.player.gold += goldDrop;
        this.$parent.player.exp += exp;
        this.$parent.inFight = false
        this.$parent.i += 1;
      }
    },
    playerHealth() {
      if (this.playerHealth <= 0) {
        alert("You Died");
      }
    },
    playerExp() {
        if(this.player.exp >= 100) {
          this.$parent.player.level += 1;
          alert("You gained a level!");
          this.$parent.playerExp -= 100;
          localStorage.player = this.$parent.player
        }
      }
    },
    computed: {

    },
  methods: {
    playerAttack() {
      this.playerDamage = Math.floor(Math.random() * 10) + 1;
      this.actionLogs.push("You attacked for " + this.playerDamage + " damage.");
      this.$parent.monsters[this.$parent.i].health -= this.playerDamage;
    },
    specialAttack() {
      if(this.$parent.player.mana >= 25) {
        this.$parent.player.mana -= 25;
        this.specialDamage = Math.floor(Math.random() * 20) + 1;
        this.actionLogs.push("You attacked for " + this.specialDamage + " damage.");
        this.this.$parent.monsters[this.$parent.i].health -= this.specialDamage;
        this.enemyAttack();
      } else {
        this.actionLogs.push("Not enough Mana.");
      }
    },
    enemyAttack() {
      this.enemyDamage = Math.floor(Math.random() * 10) + 1;
      this.actionLogs.push("Enemy attacked for " + this.enemyDamage + " damage.");
      this.$parent.player.health -= this.enemyDamage;
      this.playerHealth = this.$parent.player.health;

    },
    attack() {
      setTimeout(this.playerAttack(), 500);
      this.enemyAttack();
      
    },
    heal() {
      if (this.$parent.player.mana >= 20) {
        this.$parent.player.mana -= 20;
        this.playerHeal = Math.floor(Math.random() * 10) + 1
        this.actionLogs.push("You restored " + this.playerHeal + " health.");      
        this.$parent.player.health += this.playerHeal;
        this.enemyAttack();   
        } else {
          this.actionLogs.push("Not enough Mana.");
        }
    },
  },
 }

</script>
