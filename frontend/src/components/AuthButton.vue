<template>
    <div class="login-container">
      <div class="input-label-container">
        <label for="username">Identifiant:</label>
        <input id="username" type="text" v-model="username" required />
      </div>
      <div class="input-label-container">
        <label for="password">Mot de passe:</label>
        <input id="password" type="password" v-model="password" required />
      </div>
      <button class="common-button" @click="toggleAuth">
      {{ isAuthenticated ? 'Déconnexion' : 'Connexion' }}
      </button>
  </div>
  </template>
  
  <script>
  </script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.065);
  background-color: #f9f9f9;
  margin-top: 20px;
  margin-bottom: 20px;
}

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
  