// stores/counter.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '../cart';
import { beforeEach, describe, expect, it } from 'vitest';
import type { CartItem } from '../interfaces/CartItem';

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds item to the cart', () => {
    const store = useCartStore()
    expect(store.itemsInCart.length).toBe(0);

    const item: CartItem = {id: 1, name: "test", quantity: 1, price: 5, stock: 5};
    store.addItemToCart(item);

    expect(store.itemsInCart.length).toBe(1);
  });

  it('removes item from the cart', () => {
    const store = useCartStore()
    store.itemsInCart = [{id: 1, name: "test", quantity: 1, price: 5, stock: 5}];
    expect(store.itemsInCart.length).toBe(1);

    store.removeItemFromCart(1);
    expect(store.itemsInCart.length).toBe(0);
  });

  it('calculates total price', () => {
    const store = useCartStore()
    const items = [
        {id: 1, name: "test", quantity: 1, price: 5, stock: 5},
        {id: 2, name: "test 2", quantity: 4, price: 2, stock: 5}
    ];
    store.itemsInCart = items;

    expect(store.totalPrice).toBe(13);
  });
});