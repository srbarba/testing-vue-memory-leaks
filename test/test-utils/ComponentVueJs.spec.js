import { mount } from '@vue/test-utils'
import ComponentVueJs from '../../src/ComponentVueJs.vue'

describe('ComponentVueJs', () => {
  it('renders correctly', () => {
    const wrapper = mount(ComponentVueJs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = mount(ComponentVueJs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
