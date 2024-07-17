import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia';
import type { CartItem } from './interfaces/CartItem';

export const useCartStore = defineStore('cart', () => {
    const itemsInCart: Ref<CartItem[]> = ref([]);
    const numberOfItemsInCart = computed(() => 
        itemsInCart.value.reduce((acc: number, curr: CartItem) => 
            { return +acc + curr.quantity}, 0
        )
    );
    const totalPrice = computed(() => 
        itemsInCart.value.reduce((acc: number, curr: CartItem) => 
            { return +acc + +curr.price * curr.quantity}, 0
        )
    );

    function removeItemFromCart(itemId: number) {
        itemsInCart.value = itemsInCart.value.filter(item => item.id !== itemId);
    }

    function addItemToCart(newItem: CartItem) {
        if (itemsInCart.value.find(item => item.id === newItem.id)) {
            const index = itemsInCart.value.findIndex(item => item.id === newItem.id);
            if (itemsInCart.value[index].quantity !== itemsInCart.value[index].stock) itemsInCart.value[index].quantity++;
        } else {
            itemsInCart.value = [...itemsInCart.value, {...newItem, quantity: 1}];
        }
    }

    function updateQuantity(id: number, quantity: number) {
        const index = itemsInCart.value.findIndex(item => item.id === id);
        if (quantity <= itemsInCart.value[index].stock) {
            itemsInCart.value[index].quantity = quantity;
        }
    }

    return {
        itemsInCart,
        numberOfItemsInCart,
        totalPrice,
        removeItemFromCart,
        addItemToCart,
        updateQuantity
    }

});