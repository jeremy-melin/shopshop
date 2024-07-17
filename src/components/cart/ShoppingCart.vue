<template>
    <div>
        <div>
            <ShoppingCartLine v-for="item in itemsInCart" :item="item" />
        </div>

        <div>
            <OrderSummary />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useCartStore } from '@/stores/cart';
import OrderSummary from './OrderSummary.vue';
import ShoppingCartLine from './ShoppingCartLine.vue';
import { storeToRefs } from 'pinia';

const store = useCartStore();
const { itemsInCart } = storeToRefs(store);

</script>
<style lang="">
    
</style>