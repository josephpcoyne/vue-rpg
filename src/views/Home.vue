<template>
  <div class="home">
    <h1>Vue RPG</h1>
    <div class="greeting" v-if="!hasName">
      <h2>Welcome, Adventurer. Tell me, what is your name?</h2>
      <input type="text" v-model="playerName" placeholder="Enter your name:">
      <button @click="saveName()">Enter</button>
    </div>
    
    <div class="class-selection" v-if="hasName && !hasClass" >
      <h2>Warmest greetings, {{playerName}}. What field of study did you grow from?</h2>
      <select v-model="playerClass">
        <option disabled value="">Select your Class</option>
        <option>Warrior</option>
        <option>Mage</option>
        <option>Archer</option>
      </select>
      <br>
      <button @click="saveClass()">Enter</button>
    </div>
    
    <div class="quest-start" v-if="hasClass">
      <h2>Most formidable, {{playerName}}. I am pleased to see you aid us in our time of need.</h2>
    </div>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
     playerName: "",
     playerClass: "",
     hasName: false,
     hasClass: false,
    }
  },
  mounted() {
    if (localStorage.name) {
      this.playerName = localStorage.name;
    }
    if (localStorage.class) {
      this.playerClass = localStorage.class;
    }
  },
  methods: {
    saveName() {
      localStorage.name = this.playerName;
      if (window.confirm("Your name is " + this.playerName + ". Is this correct?")); {
        this.hasName = true;
      }
    },
    saveClass() {
      localStorage.class = this.playerClass;
      if(window.confirm("Your class is " + this.playerClass + ". Is this correct?")) {
        this.hasClass = true;
      }
    }
  }
 }

</script>
