
<template>
    <div>
        <ProductItem v-for="item in products" :product="item" @click="addItemtoCart(item)" />
    </div>
</template>

<script setup lang="ts">
    import ProductItem from '@/components/product/ProductItem.vue';
    import type { CartItem } from '@/stores/interfaces/CartItem';
    import { useCartStore } from '@/stores/cart';

    const store = useCartStore();

    defineProps({
        products: {type: Array<CartItem>, required: true}
    });

    function addItemtoCart(item: CartItem) {
        store.addItemToCart(item);
    }
</script>

