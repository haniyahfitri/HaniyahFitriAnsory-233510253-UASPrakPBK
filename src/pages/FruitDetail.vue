<template>
  <div class="fruit-detail">
    <h1 class="title">Fruit Details🍇</h1>

    <div v-if="fruit" class="detail-box">
      <img :src="fruit.image" :alt="fruit.name" />
      <h2>{{ fruit.name }}</h2>
      <p class="price">{{ formatPrice(fruit.price) }}</p>
      <p class="desc">A burst of freshness to sweeten your day!🍹</p>
      <button class="add-btn" @click="addToCart(fruit)">+ Add to Cart</button>
    </div>

    <p v-else>No fruit found ╥﹏╥</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useFruitStore } from '@/store/fruitStore'
import { useCartStore } from '@/store/cartStore'
import { ref, onMounted } from 'vue'

const route = useRoute()
const fruitStore = useFruitStore()
const cartStore = useCartStore()

const fruitId = Number(route.params.id)
const fruit = ref(null)

onMounted(async () => {
  if (fruitStore.fruits.length === 0) {
    await fruitStore.fetchFruits()
  }

  console.log('ISI BUAH:', fruitStore.fruits)
  console.log('PARAMS ID:', route.params.id)

  fruit.value = fruitStore.fruits.find(f => String(f.id) === route.params.id)

  if (!fruit.value) {
    console.warn('BUAH GAK DITEMUIN:', route.params.id)
  }
})


const addToCart = (fruit) => {
  cartStore.addToCart(fruit)
}

const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
</script>

<style scoped>
.fruit-detail {
  padding: 100px 2rem 2rem;
  font-family: 'Poppins', sans-serif;
  background: #f0f7ff;
  min-height: 100vh;
  text-align: center;
}

.title {
  font-family: 'Cal Sans', sans-serif;
  font-size: 2rem;
  color: #76a0df;
  margin-bottom: 2rem;
}

.detail-box {
  background: #dceeff;
  padding: 2rem;
  border-radius: 20px;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.detail-box img {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
}

.detail-box h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.price {
  font-size: 1.2rem;
  color: #4a4a4a;
  margin-bottom: 0.8rem;
}

.desc {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.add-btn {
  background-color: #85b8f2;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-btn:hover {
  background-color: #6da7e0;
}
</style>
