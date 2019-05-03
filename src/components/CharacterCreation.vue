<template>
  <div class="character-creation">
    <div class="greeting" v-if="!hasName">
      <h2>Welcome, Adventurer. Tell me, what is your name?</h2>
      <input type="text" v-model="player.name" placeholder="Enter your name:">
      <button @click="saveName()">Enter</button>
    </div>
    
    <div class="class-selection" v-if="hasName && !hasClass" >
      <h2>Warmest greetings, {{player.name}}. What path have you chosed to travel?</h2>
      <select v-model="player.class">
        <option disabled value="">Select your Class</option>
        <option>Warrior</option>
        <option>Mage</option>
        <option>Archer</option>
      </select>
      <br>
      <button @click="saveClass()">Enter</button>
    </div>
    
    <div class="quest-start" v-if="hasClass && !this.$parent.inFight">
      <h2>{{introDialog[i]}}</h2>
      <button @click="i++, startFight()">Next</button>
    </div>
    <div class="town-intro" v-if="player.exp > 0">
      <h2>Most impressive, {{player.class}}. You indeed are the hero we need in these dark times. Please, make use of this town as your home base. Rest when you are weary, and visit our shops to arm yourseld and replenish your supplies. We're counting on you {{player.name}}</h2>
      <button @click="this.$parent.hasCharacter = true">Enter Town</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      player: Object
    },
    data() {
      return {
        hasName: false,
        hasClass: false,
        i: 0,
        introDialog: ["Well met. We are greatful for you aide in these dark times.", "The evil king, Rigerashin, has sent his minions in waves to corrupt and destroy everything in their paths. We need you to stop him.", "Speak of the devil, a monster approaches! Quick, Hero, To arms!"]
      }
    },
    methods: {
      saveName() {
        localStorage.name = this.$parent.player.name;
        if (window.confirm("Your name is " + this.$parent.player.name + ". Is this correct?")); {
          localStorage.hasName = true;
          this.hasName = true;
        }
      },
      saveClass() {
        localStorage.class = this.$parent.player.class;
        if(window.confirm("Your class is " + this.$parent.player.class + ". Is this correct?")) {
          localStorage.hasClass = true;
          this.hasClass = true;
        }
      },
      startFight() {
        if (this.i > this.introDialog.length - 1) {
          this.$parent.inFight = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>