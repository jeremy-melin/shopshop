<template>
    <div>
        {{ item.id }}  <QuantitySelector :stock="item.stock" :product-id="item.id" :quantity="item.quantity" @remove="removeItem($event)" @update="updateQuantity($event)"/>
    </div>
</template>
<script setup lang="ts">
import type { CartItem } from '@/stores/interfaces/CartItem';
import QuantitySelector from './QuantitySelector.vue';
import { useCartStore } from '@/stores/cart';

const store = useCartStore();

const props = defineProps<{
    item: CartItem
}>()

function removeItem(id: number) {
    store.removeItemFromCart(id);
}

function updateQuantity(quantity: number) {
    store.updateQuantity(props.item.id, quantity);
}

</script>
<style lang="">
    
</style>