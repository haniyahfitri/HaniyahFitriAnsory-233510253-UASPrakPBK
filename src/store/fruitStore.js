import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFruitStore = defineStore('fruit', () => {
  const fruits = ref([])

  const fetchFruits = async () => {
    try {
      const res = await fetch('http://localhost:3000/fruits')
      const data = await res.json()
      fruits.value = data  // <-- ini dibetulin
    } catch (err) {
      console.error('Gagal ambil data buah:', err)
    }
  }

  return { fruits, fetchFruits }
})
