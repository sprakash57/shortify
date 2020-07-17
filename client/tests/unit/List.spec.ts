import { shallowMount } from '@vue/test-utils'
import List from '@/components/List/List.vue'

describe('Implement test suite for List component', () => {
    it('renders input url text on successful on creation', () => {
        const wrapper = shallowMount(List, {
            propsData: {
                url: {
                    inputUrl: 'some url',
                    shotUrl: 'short',
                    createdAt: '2020-07-15T18:52:45.195Z'
                }
            }
        });
        expect(wrapper.text()).toContain('some url');
    })
})
