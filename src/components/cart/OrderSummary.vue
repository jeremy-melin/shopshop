<template lang="">
    <div>
        ORDER SUMMARY

        <div>Articles dans le panier : {{ numberOfItemsInCart }}</div>
        <div>Prix total : {{ totalPrice }}</div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const store = useCartStore();
const { numberOfItemsInCart, totalPrice} = storeToRefs(store);

</script>

<style lang="">
    
</style>