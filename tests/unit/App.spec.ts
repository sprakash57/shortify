import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Home from '@/components/Home/Home.vue';

describe('Implement test suite for App component', () => {
  it('renders child component when parent is created', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.name()).toEqual('App');
    expect(wrapper.findAllComponents(Home).exists()).toBeTruthy();
  })
  it('renders the componet with only one h1 heading', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findAll('h1').length).toEqual(1);
  })
})
