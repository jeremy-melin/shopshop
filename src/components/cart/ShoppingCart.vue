<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="16">
                <ShoppingCartLine v-for="item in itemsInCart" :item="item" />
            </el-col>
            <el-col :span="8">
                <OrderSummary />
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import { useCartStore } from '@/stores/cart';
import OrderSummary from './OrderSummary.vue';
import ShoppingCartLine from './ShoppingCartLine.vue';
import { storeToRefs } from 'pinia';
import { ElRow, ElCol } from 'element-plus';

const store = useCartStore();
const { itemsInCart } = storeToRefs(store);

</script>
<style lang="">
    
</style>