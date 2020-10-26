import { shallowMount } from '@vue/test-utils'
import List from '@/components/List/List.vue'
import moment from 'moment';

describe('Implement test suite for List component', () => {
    it('renders input url text on successful on creation', () => {
        const wrapper = shallowMount(List, {
            propsData: {
                url: {
                    inputUrl: 'some url',
                    shortUrl: 'short',
                    createdAt: '2020-07-15T18:52:45.195Z'
                }
            }
        });
        expect(wrapper.text()).toContain('some url');
    })

    it('renders short url text on successful on creation', () => {
        const wrapper = shallowMount(List, {
            propsData: {
                url: {
                    inputUrl: 'some url',
                    shortUrl: 'short',
                    createdAt: '2020-07-15T18:52:45.195Z'
                }
            }
        });
        expect(wrapper.text()).toContain('short');
    })

    it('renders time since text on successful on creation', () => {
            const createdAt = '2010-07-15T18:52:45.195Z'
        const wrapper = shallowMount(List, {
            propsData: {
                url: {
                    inputUrl: 'some url',
                    shortUrl: 'short',
                    createdAt
                }
            }
        });
        expect(wrapper.text()).toContain('10 years ago');
    })
})


