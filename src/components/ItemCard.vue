<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { Product } from '../types'
import { useCartStore } from '../stores/useCartStore'

export default defineComponent({
  name: 'ItemCard',
  props: {
    product: { type: Object as PropType<Product>, required: true },
    variant: { type: String as PropType<'product' | 'cart'>, default: 'product' }
  },
  setup(props) {
    const cart = useCartStore()
    function onAdd() { cart.addItem(props.product) }
    function onRemove() { cart.removeItem(props.product.id) }
    return { onAdd, onRemove }
  }
})
</script>

<template>
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div>
        <div style="font-weight:600">{{ product.name }}</div>
        <div class="small">{{ product.price }} ₴</div>
      </div>
      <div>
        <button v-if="variant === 'product'" class="button btn-primary" @click="onAdd">Додати</button>
        <button v-else class="button btn-ghost" @click="onRemove">Видалити</button>
      </div>
    </div>
  </div>
</template>
