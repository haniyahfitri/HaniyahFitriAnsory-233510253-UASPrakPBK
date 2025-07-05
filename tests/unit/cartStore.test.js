import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/store/cartStore'

describe('cartStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('menambahkan item ke keranjang', () => {
    const store = useCartStore()
    store.addToCart({ id: 1, name: 'Blueberry', price: 15000 })

    expect(store.cart.length).toBe(1)
    expect(store.cart[0].qty).toBe(1)
  })

  it('menambahkan item yang sama menambah qty', () => {
    const store = useCartStore()
    store.addToCart({ id: 1, name: 'Blueberry', price: 15000 })
    store.addToCart({ id: 1, name: 'Blueberry', price: 15000 })

    expect(store.cart.length).toBe(1)
    expect(store.cart[0].qty).toBe(2)
  })

  it('menghapus item dari keranjang', () => {
    const store = useCartStore()
    store.addToCart({ id: 1, name: 'Blueberry', price: 15000 })
    store.removeFromCart(1)

    expect(store.cart.length).toBe(0)
  })
})
