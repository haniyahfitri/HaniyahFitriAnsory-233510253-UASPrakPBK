<template>
  <div class="catalog-page">
    <h1 class="title">BerryMart Catalog🍓</h1>

    <div class="fruit-row">
      <div v-for="fruit in fruitStore.fruits" :key="fruit.id" class="fruit-card">
        <router-link :to="`/fruit/${fruit.id}`" class="fruit-link">
          <img :src="fruit.image" :alt="fruit.name" />
          <h2>{{ fruit.name }}</h2>
          <p>{{ formatPrice(fruit.price) }}</p>
        </router-link>
        <button class="add-btn" @click="addToCart(fruit)">+ Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useFruitStore } from '@/store/fruitStore'
import { useCartStore } from '@/store/cartStore'

const fruitStore = useFruitStore()
const cartStore = useCartStore()

onMounted(async () => {
  await fruitStore.fetchFruits()
  console.log('DATA BUAH:', fruitStore.fruits)
})

const addToCart = (fruit) => {
  cartStore.addToCart(fruit)
}

const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
</script>


<style scoped>
.catalog-page {
  padding: 100px 2rem 2rem;
  font-family: 'Poppins', sans-serif;
  background-color: #f7faff;
  min-height: 100vh;
}

.title {
  font-family: 'Cal Sans', sans-serif;
  font-size: 2rem;
  text-align: center;
  color: #76a0df;
  margin-bottom: 2rem;
}

.fruit-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  padding-bottom: 1rem;
}


.fruit-card {
  min-width: 160px;
  flex-shrink: 0;
  background: #dfefff;
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  scroll-snap-align: start;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.fruit-card:hover {
  transform: scale(1.03);
}

.fruit-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}

.fruit-card img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.fruit-card h2 {
  font-size: 1.1rem;
  color: #2c3e50;
}

.fruit-card p {
  font-size: 0.95rem;
  color: #4a4a4a;
  margin-bottom: 0.5rem;
}

.fruit-row::-webkit-scrollbar {
  display: none;
}
.fruit-row {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.add-btn {
  background-color: #85b8f2;
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;
  margin-top: 0.3rem;
}

.add-btn:hover {
  background-color: #6da7e0;
}
</style>
