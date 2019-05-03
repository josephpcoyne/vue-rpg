<template>
  <div class="battle">
    <h1>A Monster Appears!</h1>
    
    <h1>{{monsters[i].name}}</h1>
    <h2>Enemy Health: {{enemyHealth}}</h2>
    <p>{{playerHealth}}</p>
    
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
  props: {
    player: Object
  },
  data() {
    return {
      i: 0,
      playerHealth: this.$parent.player.health,
      playerDamage: "",
      specialDamage: "",
      enemyDamage: "",
      playerHeal: "",
      enemyHealth: 100,
      actionLogs: [],
      monsters: [ 
        {id: 0, name: "Goblin"},
        {id: 1, name: "Orc"},
        {id: 2, name: "Ogre"},
        {id: 3, name: "Troll"}
        ]
    }
  },
  watch: {
    enemyHealth() {
      if (this.enemyHealth <= 0) {
        var goldDrop = Math.floor(Math.random() * 20) + 1
        var exp = Math.floor(Math.random() * (30 - 15 + 1) + 15);
        alert("You Defeated The Monster! The Monster dropped " + goldDrop + " gold! You gained " + exp + " XP!");
        this.$parent.player.gold += goldDrop;
        this.$parent.player.exp += exp;
        this.$parent.inFight = false
        this.i += 1;
        this.enemyHealth = 100;

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
  methods: {
    playerAttack() {
      this.playerDamage = Math.floor(Math.random() * 10) + 1;
      this.actionLogs.push("You attacked for " + this.playerDamage + " damage.");
      this.enemyHealth -= this.playerDamage;
    },
    specialAttack() {
      if(this.$parent.player.mana >= 25) {
        this.$parent.player.mana -= 25;
        this.specialDamage = Math.floor(Math.random() * 20) + 1;
        this.actionLogs.push("You attacked for " + this.specialDamage + " damage.");      
        this.enemyHealth -= this.specialDamage;
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
