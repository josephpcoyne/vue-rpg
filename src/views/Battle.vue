<template>
  <div class="battle">
    <h1>Monster Fight!</h1>
    
    
    <h2>Health:{{playerHealth}}</h2>
    <h2>Mana: {{playerMana}}</h2>
    <button @click="attack()">Attack</button>
    <button @click="specialAttack()">Special Attack</button>
    <button @click="heal()">Heal</button>
    
    <h2>Enemy Health: {{enemyHealth}}</h2>
    
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
      playerHealth: 100,
      playerMana: 100,
      enemyHealth: 100,
      actionLogs: []
    }
  },
  methods: {
    
    playerAttack() {
      this.playerDamage = Math.floor(Math.random() * 10) + 1;
      this.actionLogs.push("You attacked for " + this.playerDamage + " damage.");
      this.enemyHealth -= this.playerDamage;
      this.gameOver();
    },
    specialAttack() {
      if(this.playerMana >= 25) {
        this.playerMana -= 25;
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
      this.playerHealth -= this.enemyDamage;
      this.gameOver();
    },
    attack() {
      this.playerAttack();
      this.enemyAttack();
    },
    heal() {
      if (this.playerMana >= 20) {
        this.playerMana -= 20;
        this.playerHeal = Math.floor(Math.random() * 10) + 1
        this.actionLogs.push("You restored " + this.playerHeal + " health.");      
        this.playerHealth += this.playerHeal;
        this.enemyAttack();
        } else {
          this.actionLogs.push("Not enough Mana.");
        }
    },
    gameOver() {
        if(this.playerHealth <= 0) {
        alert("You Died");
      } else if (this.enemyHealth <= 0) {
        alert("You Defeated The Monster!");
      }
    }
  },
 }

</script>
