<template>
  <nav class="navbar">
    <div class="logo">BerryMart 🫐</div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/catalog">Catalog</router-link></li>
      <li><router-link to="/cart">Cart</router-link></li>
      <li><router-link to="/history">History</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  background-color: #a3c9f9;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}


.logo {
  font-size: 1.8rem;
  font-family: 'Cal Sans', sans-serif;
  font-weight: 600;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links li a:hover {
  opacity: 0.8;
}
</style>
