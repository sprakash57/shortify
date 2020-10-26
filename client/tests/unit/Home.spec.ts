import { mount } from '@vue/test-utils'
import Home from '@/components/Home/Home.vue';
import axios from 'axios';
import { API_URL } from '@/constants';

describe('Implement test suite for Home component', () => {

    beforeEach(() => {
        jest.spyOn(axios, "get").mockResolvedValueOnce({
            data: []
        })
    })

    afterEach(jest.restoreAllMocks)
    it('Component should have one input field', () => {
        const wrapper = mount(Home);
        expect(wrapper.findAll('input')).toHaveLength(1);
    })

    it("should call backend when rendered", () => {
        mount(Home)
        expect(axios.get).toHaveBeenCalledWith(API_URL)
    })

    it("should fetch localStorage for mode", () => {
        const mockLocalStorage = jest.spyOn(window.localStorage.__proto__, 'getItem')
        mount(Home)
        expect(mockLocalStorage).toHaveBeenCalledWith("mode")
    })

    it("should call set mode when mode button get clicked", () => {
        const wrapper = mount(Home, {
            watch: {
                mode: jest.fn()
            }
        })
        // @ts-ignore
        expect(wrapper.vm.mode).toEqual("light")
        wrapper.find('button').trigger('click')
        // @ts-ignore
        expect(wrapper.vm.mode).toEqual("dark")
    })

    it("should show error message if newUrl is not a valid url", async () => {
        const wrapper = mount(Home)
        wrapper.setData({
            newUrl: "invalid url"
        })
        wrapper.find("input").trigger("keyup.enter")
        // @ts-ignore
        expect(wrapper.vm.warningMessage).toEqual("Are you sure you've used valid URL ?")
    })

    it.skip("should show call create API and show shorten url when newUrl is valid", done => {
        const mockResultUrl = "https://shortened-url.com"
        jest.spyOn(axios, "post").mockResolvedValueOnce({
            data: {
                shortUrl: mockResultUrl
            }
        })
        const testNewUrl = "test.com"

        const wrapper = mount(Home)
        wrapper.setData({
            newUrl: testNewUrl
        })

        wrapper.find("input").trigger("keyup.enter")
        wrapper.vm.$nextTick(() => {
            expect(axios.post).toHaveBeenCalledWith(`${API_URL}/create`, { inputUrl: testNewUrl })
            done()
        })
        // @ts-ignore
        expect(wrapper.vm.urls).toContain(mockResultUrl)
    })

    it.skip("should show call create API and show error message when network call error", done => {
        jest.spyOn(axios, "post").mockRejectedValueOnce({
            error: {}
        })
        const testNewUrl = "test.com"
        const wrapper = mount(Home)
        wrapper.setData({
            newUrl: testNewUrl
        })

        wrapper.find("input").trigger("keyup.enter")
        wrapper.vm.$nextTick(() => {
            expect(axios.post).toHaveBeenCalledWith(`${API_URL}/create`, { inputUrl: testNewUrl })
            done()
        })
        // @ts-ignore
        expect(wrapper.vm.urls).toContain('You might wanna check your network instead!! 😫')
    })

})
