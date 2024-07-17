import { describe, expect, it } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import ProductList from '../product/ProductList.vue';
import { productsList } from '../../sampleProducts';


describe('ProductList', () => {
    it('should display a list of given products', () => {
        const wrapper = mount(ProductList, { propsData: { products: productsList } })
        expect(wrapper.html()).toContain(productsList[0].name);
    });
})