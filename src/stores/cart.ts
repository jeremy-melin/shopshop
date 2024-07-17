import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia';
import type { CartItem } from './interfaces/CartItem';

export const useCartStore = defineStore('cart', () => {
    const itemsInCart: Ref<CartItem[]> = ref([]);
    const numberOfItemsInCart = computed(() => 
        itemsInCart.value.reduce((acc: number, curr: CartItem) => 
            { return +acc + 1}, 0
        )
    );
    const totalPrice = computed(() => 
        itemsInCart.value.reduce((acc: number, curr: CartItem) => 
            { return +acc + +curr.price}, 0
        )
    );

    function removeItemFromCart(itemId: number) {
        itemsInCart.value = itemsInCart.value.filter(item => item.id !== itemId);
    }

    function addItemToCart(newItem: CartItem) {
        itemsInCart.value = [...itemsInCart.value, newItem];
    }

    return {
        numberOfItemsInCart,
        totalPrice,
        removeItemFromCart,
        addItemToCart
    }

});