import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ShoppingCart from "../cart/ShoppingCart.vue";

describe('ShoppingCart', () => {
    it('should mount', () => {
        const wrapper = mount(ShoppingCart);
        expect(wrapper.html()).toContain("SHOPPING CART");
    });
})