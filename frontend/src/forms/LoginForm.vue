<template>
    <div class="inputs">
      <div class="input-label-container">
        <label for="username">Identifiant:</label>
        <input id="username" type="text" v-model="username" required />
      </div>
      <div class="input-label-container">
        <label for="password">Mot de passe:</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <button class="common-button" @click="submit">Se connecter</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      submit() {
        this.$emit('submit', this.username); //Envoi uniquement de l'username au store pour l'instant
      }
    }
  }
  </script>
  
  <style scoped>
 
.input-label-container {
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input {
  width: 200px;
  height: 30px;
  border: 0.5px solid rgba(78, 78, 78, 0.466);
  border-radius: 3px;
  padding-left: 8px;
}

.common-button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #41b884;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.common-button:hover {
  background-color: #368f6e;
}

  </style>
  