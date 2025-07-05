<template>
  <div class="register-container">
    <h1>Sign up</h1>

    <form @submit.prevent="handleRegister" class="register-form">
      <label>Full Name</label>
      <input type="text" v-model="name" required />

      <label>Email</label>
      <input type="email" v-model="email" required />

      <label>Password</label>
      <input type="password" v-model="password" required />

      <button class="signin-btn">Sign up</button>

      <p class="login-link">
        Have an account? <router-link to="/login">Log in</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  alert(`Welcome to the BerryMart fam! you’ve joined as ${name.value}🫐🎉`)
  // Nanti bisa lanjut ke register logic atau kirim ke API
}
</script>

<style scoped>
.register-container {
  padding: 70px 2rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.register-container h1 {
  font-family: 'Cal Sans', sans-serif;
  color: #76a0df;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.register-container p {
  margin-bottom: 2rem;
  color: #444;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.register-form label {
  text-align: left;
  font-weight: 500;
  color: #2c3e50;
}

.register-form input {
  padding: 0.6rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
}

.signin-btn {
  font-family: 'Poppins', sans-serif;
  /* tambahan lainnya */
  background-color: #a3c9f9;
  color: white;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.signin-btn:hover {
  background-color: #8bbbf2;
}

</style>
