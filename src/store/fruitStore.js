import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFruitStore = defineStore('fruit', () => {
  const fruits = ref([])

  const fetchFruits = async () => {
    try {
      const res = await fetch('https://fruit-json-api-production.up.railway.app/fruits')
      const data = await res.json()
      fruits.value = data 
    } catch (err) {
      console.error('Gagal ambil data buah:', err)
    }
  }

  return { fruits, fetchFruits }
})
