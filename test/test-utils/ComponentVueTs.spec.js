import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import ComponentVueTs from '../../src/ComponentVueTs.vue'
import store from '../../src/store'

describe('ComponentVueTs', () => {
  it('renders correctly', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const wrapper = mount(ComponentVueTs, {
      localVue,
      store: new Vuex.Store(store),
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
