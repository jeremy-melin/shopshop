<script setup lang="ts">
import ProductList from '@/components/product/ProductList.vue';
import {productsList} from '../sampleProducts';
import ShoppingCart from '@/components/cart/ShoppingCart.vue';
</script>

<template>
  <main>
    <ProductList :products="productsList" />

    <ShoppingCart />
  </main>
</template>
