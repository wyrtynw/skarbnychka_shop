import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[]
  }),
  getters: {
    totalItemsCount: (state) => state.items.length,
    totalAmount: (state) => state.items.reduce((s, p) => s + p.price, 0)
  },
  actions: {
    addItem(product: Product) {
      // For simplicity we push the object (could check duplicates)
      this.items.push(product)
    },
    removeItem(id: number) {
      const idx = this.items.findIndex(i => i.id === id)
      if (idx !== -1) this.items.splice(idx, 1)
    }
  }
})
