import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import ComponentVueJs from '../../src/ComponentVueJs.vue'
import store from '../../src/store'

describe('ComponentVueJs', () => {
  it('renders correctly', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const wrapper = mount(ComponentVueJs, {
      localVue,
      store: new Vuex.Store(store),
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
