import { mount } from '@vue/test-utils'
import ComponentVueTs from '../../src/ComponentVueTs.vue'

describe('ComponentVueTs', () => {
  it('renders correctly', () => {
    const wrapper = mount(ComponentVueTs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = mount(ComponentVueTs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
