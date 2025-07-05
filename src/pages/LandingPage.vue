<template>
  <div class="landing-container">
    <div class="intro">
      <h1>Welcome to <span>BerryMart!</span>🫐</h1>
      <p>A splash of sweetness, a burst of berries, your fruity day starts here! ⸜(｡˃ ᵕ ˂ )⸝♡</p>
      <router-link to="/catalog">
        <button class="shop-btn">View Catalog</button>
      </router-link>
    </div>

    <div class="fruit-showcase">
      <img src="https://emojicdn.elk.sh/🍓" alt="Strawberry" />
      <img src="https://emojicdn.elk.sh/🍇" alt="Grapes" />
      <img src="https://emojicdn.elk.sh/🍉" alt="Watermelon" />
      <img src="https://emojicdn.elk.sh/🍍" alt="Pineapple" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.landing-container {
  height: calc(120vh - 80px - 100px); /* navbar + footer */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  overflow: hidden;
}

.intro h1 {
  font-family: 'Cal Sans', sans-serif;
  font-size: 3.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.intro h1 span {
  color: #85b8f2;
}

.intro p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.shop-btn {
  background-color: #a3c9f9;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s;
}

.shop-btn:hover {
  background-color: #8bbbf2;
}

.fruit-showcase {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.fruit-showcase img {
  width: 60px;
  height: 60px;
  transition: transform 0.3s;
}

.fruit-showcase img:hover {
  transform: scale(1.2) rotate(5deg);
}
</style>
