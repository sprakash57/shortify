import { mount } from '@vue/test-utils'
import Home from '@/components/Home/Home.vue';

describe('Implement test suite for Home component', () => {
    it('Component should have one input field', () => {
        const wrapper = mount(Home);
        expect(wrapper.findAll('input')).toHaveLength(1);
    })
})
