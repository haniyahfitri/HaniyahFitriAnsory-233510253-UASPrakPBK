import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  const addToCart = (fruit) => {
    const existing = cart.value.find(item => item.id === fruit.id)
    if (existing) {
      existing.qty += 1
    } else {
      cart.value.push({ ...fruit, qty: 1 })
    }
  }

  const removeFromCart = (id) => {
    cart.value = cart.value.filter(item => item.id !== id)
  }

  const clearCart = () => {
    cart.value = []
  }

  const totalPrice = () => {
    return cart.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  }

  return { cart, addToCart, removeFromCart, clearCart, totalPrice }
})
