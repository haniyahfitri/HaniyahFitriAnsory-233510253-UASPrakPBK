<template>
  <div class="cart-page">
    <h1 class="title">Shopping Cart🛒</h1>

    <div v-if="cart.length > 0" class="cart-list">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="" />
        <div class="info">
          <h2>{{ item.name }}</h2>
          <p>{{ formatPrice(item.price) }} x {{ item.qty }}</p>
        </div>
        <button @click="removeFromCart(item.id)">❌</button>
      </div>

      <div class="total">Total: {{ formatPrice(totalPrice()) }}</div>
      <button class="checkout-btn" @click="checkout">Checkout Now ✅</button>
    </div>

    <div v-else class="empty-state">
      <p class="empty-message">Oopsie! Your fruity cart needs some juicy love ´•︵•`</p>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/store/cartStore'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
const { removeFromCart, totalPrice } = cartStore

const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)

const checkout = async () => {
  if (cart.value.length === 0) return

  const historyData = {
    items: cart.value,
    date: new Date().toLocaleString('id-ID')
  }

  try {
    await fetch('https://fruit-json-api-production.up.railway.app/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(historyData)
    })

    cartStore.clearCart()
    alert('Berry sweet! Your order is on its way!🍓📦')
  } catch (err) {
    console.error('Gagal checkout:', err)
    alert('Oh no! Your berries got tangled... Try again!🍓🔁')
  }
}
</script>

<style scoped>
.cart-page {
  padding: 100px 2rem 120px;
  font-family: 'Poppins', sans-serif;
  background-color: #f4f9ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.title {
  font-family: 'Cal Sans', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #76a0df;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  background: #e7f1ff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.cart-item img {
  width: 60px;
  height: 60px;
  margin-right: 1rem;
}

.cart-item .info {
  flex-grow: 1;
}

.cart-item button {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.total {
  margin-top: 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: right;
}

.checkout-btn {
  margin-top: 1rem;
  background-color: #76a0df;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.checkout-btn:hover {
  background-color: #5c8dd1;
}

.empty-message {
  font-size: 1.2rem;
  color: #777;
  text-align: center;
}
</style>
