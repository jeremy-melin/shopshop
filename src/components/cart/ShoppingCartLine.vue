<template>
    <div>
        <el-row :gutter="20" class="row-bg" justify="space-evenly">
            <el-col :span="12">
                {{ item.name }}  
            </el-col>
            <el-col :span="6">
                <QuantitySelector 
                    :stock="item.stock" 
                    :product-id="item.id" 
                    :quantity="item.quantity" 
                    @remove="removeItem($event)" 
                    @update="updateQuantity($event)"
                />            
            </el-col>
            <el-col :span="4" class="align-right">
                {{ item.price }} €
            </el-col>
            <el-col :span="2" class="align-right">
                <el-button @click="removeItem(item.id)">x</el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import type { CartItem } from '@/stores/interfaces/CartItem';
import QuantitySelector from './QuantitySelector.vue';
import { useCartStore } from '@/stores/cart';
import { ElRow, ElCol, ElButton } from 'element-plus';

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
<style lang="scss">
    .align-right {
        text-align: right;
    }
</style>