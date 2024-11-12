<template>
  <div class="main-section">
    <div class="main-img">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <AuthButton/>
  </div>
</template>

<script>
import AuthButton from './components/AuthButton.vue'

export default {
  name: 'App',
  components: {
    AuthButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main-section {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
