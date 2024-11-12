<template>
  <div class="auth-container">
    <LoginForm v-if="!isLoggedIn" @submit="login" />
    <div v-if="isLoggedIn">
      <h2>Bienvenu {{username}} vous êtes connecté</h2>
      <button class="common-button" @click="logout">Se déconnecter</button>
    </div>
  </div>
</template>

<script>
import LoginForm from '../forms/LoginForm.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    LoginForm
  },
  computed: {
    ...mapState({
      isLoggedIn: 'isLoggedIn',
      username: 'username'
    })
  },
  methods: {
    ...mapActions({
      login: 'login',
      logout: 'logout'
    })
  }
};
</script>

<style scoped>
.auth-container {
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
  