<template>
  <div class="login-container">
    <h1>Login</h1>
    <p>Log in to your BerryMart account!</p>

    <form @submit.prevent="handleLogin" class="login-form">
      <label>Email</label>
      <input type="email" v-model="email" required />

      <label>Password</label>
      <input type="password" v-model="password" required />

      <button class="login-btn">Login</button>

      <p class="register-link">
        Don't have an account? <router-link to="/register">Sign up</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  alert(`Welcome back, sweet berry! You’re signed in as ${email.value}🍓👋`)
  // Logic autentikasi nanti bisa ditambah
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.login-container {
  padding: 70px 2rem 2rem;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

.login-container h1 {
  font-family: 'Cal Sans', sans-serif;
  color: #76a0df;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.login-container p {
  margin-bottom: 2rem;
  color: #444;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-form label {
  text-align: left;
  font-weight: 500;
  color: #2c3e50;
}

.login-form input {
  padding: 0.6rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
}

.login-btn {
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

.login-btn:hover {
  background-color: #8bbbf2;
}


.register-link {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.register-link a {
  color: #4f91d9;
  text-decoration: none;
  font-weight: 500;
}
</style>
