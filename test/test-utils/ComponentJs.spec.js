import Vuex from 'vuex'
import { createLocalVue, mount } from '@vue/test-utils'
import ComponentJs from '../../src/ComponentJs'
import store from '../../src/store'

describe('ComponentJs', () => {
  it('renders correctly', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const wrapper = mount(ComponentJs, {
      localVue,
      store: new Vuex.Store(store),
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
