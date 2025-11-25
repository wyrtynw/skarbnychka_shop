<script lang="ts">
import { defineComponent, ref } from 'vue'
import ItemCard from './components/ItemCard.vue'
import CartPanel from './components/CartPanel.vue'
import type { Product } from './types'

export default defineComponent({
  name: 'App',
  components: { ItemCard, CartPanel },
  setup() {
    const showCart = ref(false)
    const products = ref<Product[]>([
      { id: 1, name: 'Хліб', price: 25 },
      { id: 2, name: 'Молоко 1л', price: 39 },
      { id: 3, name: 'Яйця 10шт', price: 78 },
      { id: 4, name: 'Сир 200г', price: 120 },
      { id: 5, name: 'Кава 250г', price: 260 }
    ])
    function toggleCart() { showCart.value = !showCart.value }
    return { showCart, products, toggleCart }
  }
})
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>Скарбничка покупок</h1>
      <div>
        <button class="button" @click="toggleCart">Показати/Приховати скарбничку</button>
      </div>
    </header>

    <main>
      <section class="products">
        <ItemCard v-for="p in products" :key="p.id" :product="p" variant="product" />
      </section>
    </main>

    <div class="cart-toggle">
      <button class="button btn-primary" @click="toggleCart">🧺 Скарбничка</button>
    </div>

    <CartPanel v-if="showCart" />
  </div>
</template>
