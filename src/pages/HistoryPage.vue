<template>
  <div class="history-page">
    <h1 class="title">Transaction History🧾</h1>

    <div v-if="history.length > 0" class="history-list">
      <div v-for="(entry, index) in history" :key="index" class="history-item">
        <p class="date">📅 {{ entry.date }}</p>
        <ul>
          <li v-for="item in entry.items" :key="item.id">
            {{ item.name }} x {{ item.qty }} = {{ formatPrice(item.price * item.qty) }}
          </li>
        </ul>
      </div>
    </div>

    <p v-else class="empty">Oops! Looks like it’s still berry quiet 🍒</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const history = ref([])

onMounted(async () => {
  try {
    const res = await fetch('http://localhost:3000/history')
    history.value = await res.json()
  } catch (err) {
    console.error('Gagal ambil data history:', err)
  }
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price)
}
</script>

<style scoped>
.history-page {
  padding: 100px 2rem 80px;
  font-family: 'Poppins', sans-serif;
  background-color: #f6faff;
  min-height: 100vh;
}

.title {
  font-family: 'Cal Sans', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #76a0df;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.history-item {
  background-color: #eaf3ff;
  padding: 1.2rem;
  border-radius: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.07);
}

.date {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.8rem;
}

.empty {
  text-align: center;
  color: #777;
  font-size: 1.1rem;
}
</style>
