import { beforeEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ProductList from '../product/ProductList.vue';
import { productsList } from '../../sampleProducts';
import { createPinia, setActivePinia } from 'pinia';


describe('ProductList', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    })
      
    it('should display a list of given products', () => {
        const wrapper = mount(ProductList, { props: { products: productsList } })
        expect(wrapper.html()).toContain(productsList[0].name);
    });
})