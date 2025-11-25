<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useCartStore } from '../stores/useCartStore'
import ItemCard from './ItemCard.vue'

export default defineComponent({
  name: 'CartPanel',
  components: { ItemCard },
  setup() {
    const cart = useCartStore()
    const items = computed(() => cart.items)
    const total = computed(() => cart.totalAmount)
    const count = computed(() => cart.totalItemsCount)
    return { items, total, count, cart }
  }
})
</script>

<template>
  <aside class="cart-panel">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div style="font-weight:700">Скарбничка</div>
      <div class="small">{{ count }} шт • {{ total }} ₴</div>
    </div>

    <div v-if="items.length === 0" class="small">Кошик порожній</div>

    <div class="cart-list">
      <div v-for="(it, idx) in items" :key="idx" class="item-row card">
        <div>
          <div style="font-weight:600">{{ it.name }}</div>
          <div class="small">{{ it.price }} ₴</div>
        </div>
        <div>
          <button class="button btn-ghost" @click="cart.removeItem(it.id)">Видалити</button>
        </div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center">
      <div class="small">Разом</div>
      <div style="font-weight:700">{{ total }} ₴</div>
    </div>
  </aside>
</template>
