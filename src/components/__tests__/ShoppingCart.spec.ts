import { beforeEach, describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ShoppingCart from "../cart/ShoppingCart.vue";
import { createPinia, setActivePinia } from "pinia";

describe('ShoppingCart', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    
    it('should mount', () => {
        const wrapper = mount(ShoppingCart);
        expect(wrapper.html()).toBeDefined();
    });
})