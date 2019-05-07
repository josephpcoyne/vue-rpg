<template>
  <div class="character-creation">
    <div class="greeting" v-if="!hasName">
      <h2>Welcome, Adventurer. Tell me, what is your name?</h2>
      <input type="text" v-model="player.name" placeholder="Enter your name:">
      <button @click="saveName()">Enter</button>
    </div>
    
    <div class="class-selection" v-if="hasName && !hasClass" >
      <h2>Warmest greetings, {{player.name}}. What path have you chosed to travel?</h2>
      <select @change="selectClass() "v-model="selectedClass" >
        <option disabled>Select Your Class</option>
        <option v-for="playerClass in $parent.classes">{{playerClass.name}}</option>
      </select>
      <br>
      <button @click="saveClass()">Enter</button>
    </div>
    
    <div class="quest-start" v-if="hasClass && !this.$parent.inFight">
      <h2>{{introDialog[i]}}</h2>
      <button @click="i++, startFight()">Next</button>
    </div>
    <div class="town-intro" v-if="player.exp > 0">
      <h2>Most impressive, {{player.class.name}}. You indeed are the hero we need in these dark times. Please, make use of this town as your home base. Rest when you are weary, and visit our shops to arm yourself and replenish your supplies. We're counting on you {{player.name}}.</h2>
      <button @click="enterTown()">Enter Town</button>
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
        selectedClass: '',
        classIndex: '',
        hasName: false,
        hasClass: false,
        i: 0,
        introDialog: ["Well met. We are greatful for you aide in these dark times.", "The evil king, Rigerashin, has sent his minions in waves to corrupt and destroy everything in their paths. We need you to stop him.", "Speak of the devil, a monster approaches! Quick, Hero, To arms!"]
      }
    },
    methods: {
      selectClass() {
        this.classIndex = this.$parent.classes.findIndex(i => i.name === this.selectedClass);
        },
      saveName() {
        localStorage.name = this.$parent.player.name;
        if (window.confirm("Your name is " + this.$parent.player.name + ". Is this correct?")); {
          localStorage.hasName = true;
          this.hasName = true;
        };
      },
      saveClass() {
        localStorage.class = this.selectedClass;
        this.$parent.player.class = this.$parent.classes[this.classIndex];
        if(window.confirm("Your class is " + this.$parent.classes[this.classIndex].name + ". Is this correct?")); {
          localStorage.hasClass = true;
          this.hasClass = true;
        };
      },
      startFight() {
        if (this.i > this.introDialog.length - 1) {
          this.$parent.inFight = true;
        }
      },
      enterTown() {
        this.$parent.hasCharacter = true;
      }
    }
  }
</script>

<style scoped>
  .greeting, .class-selection, .quest-start, .town-intro {
  margin: auto 0;
  padding: 4%;
  background-image: url("../../public/textbg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  bottom: 50%;
  left: 20%;
  font-family: 'Quintessential', cursive;
  /* height: 0; */
  /* bottom: 0; */
  position: absolute;
  text-align: center;
  }
</style>