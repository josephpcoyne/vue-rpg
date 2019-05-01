<template>
  <div class="battle">
    <h1>Monster Fight!</h1>
    
    <h2>Enemy Health: {{enemyHealth}}</h2>
    
    <button @click="attack()">Attack</button>
    <button @click="specialAttack()">Special Attack</button>
    <button @click="heal()">Heal</button>
    
    
    <ul v-for="actionLog in actionLogs" >
      <li>{{actionLog}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      playerDamage: "",
      specialDamage: "",
      enemyDamage: "",
      playerHeal: "",
      enemyHealth: 100,
      actionLogs: []
    }
  },
  computed: {
    gameOver() {
        if(this.$parent.playerHealth <= 0) {
        alert("You Died");
      } else if (this.enemyHealth <= 0) {
        alert("You Defeated The Monster!");
        var goldDrop = Math.floor(Math.random() * 20) + 1
        alert("The Monster dropped " + goldDrop + " gold!")
        this.$parent.playerGold += goldDrop;
        localStorage.gold = this.$parent.playerGold;
        localStorage.health = this.$parent.playerHealth;
        localStorage.mana = this.$parent.playerMana;
      }
    }
  },
  methods: {
    playerAttack() {
      this.playerDamage = Math.floor(Math.random() * 10) + 1;
      this.actionLogs.push("You attacked for " + this.playerDamage + " damage.");
      this.enemyHealth -= this.playerDamage;
    },
    specialAttack() {
      if(this.$parent.playerMana >= 25) {
        this.$parent.playerMana -= 25;
        this.specialDamage = Math.floor(Math.random() * 20) + 1;
        this.actionLogs.push("You attacked for " + this.specialDamage + " damage.");      
        this.enemyHealth -= this.specialDamage;
        this.enemyAttack();
        this.gameOver();
      } else {
        this.actionLogs.push("Not enough Mana.");
      }
    },
    enemyAttack() {
      this.enemyDamage = Math.floor(Math.random() * 10) + 1;
      this.actionLogs.push("Enemy attacked for " + this.enemyDamage + " damage.");
      this.$parent.playerHealth -= this.enemyDamage;
      this.gameOver();

    },
    attack() {
      this.playerAttack();
      this.enemyAttack();
      this.gameOver();
      
    },
    heal() {
      if (this.$parent.playerMana >= 20) {
        this.$parent.playerMana -= 20;
        this.playerHeal = Math.floor(Math.random() * 10) + 1
        this.actionLogs.push("You restored " + this.playerHeal + " health.");      
        this.$parent.playerHealth += this.playerHeal;
        this.enemyAttack();
        this.gameOver();        
        } else {
          this.actionLogs.push("Not enough Mana.");
        }
    },
  },
 }

</script>
