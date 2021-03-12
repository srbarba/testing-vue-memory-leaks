import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import ComponentTs from '../../src/ComponentTs'
import store from '../../src/store'

describe('ComponentTs', () => {
  it('renders correctly', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const wrapper = mount(ComponentTs, {
      localVue,
      store: new Vuex.Store(store),
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
