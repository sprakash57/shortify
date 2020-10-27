import { shallowMount } from '@vue/test-utils'
import List from '@/components/List/List.vue'

describe('Implement test suite for List component', () => {
    it('renders input url text on successful on creation', () => {
        const wrapper = shallowMount(List, {
            propsData: {
                url: {
                    inputUrl: 'some url',
                    shortUrl: 'short',
                    createdAt: '2010-07-15T18:52:45.195Z'
                }
            }
        });
        expect(wrapper.text()).toContain('some url');
        expect(wrapper.text()).toContain('short');
        expect(wrapper.text()).toContain('10 years ago');
    })
})


