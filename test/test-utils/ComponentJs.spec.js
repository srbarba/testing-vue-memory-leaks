import { mount } from '@vue/test-utils'
import ComponentJs from '../../src/ComponentJs'

describe('ComponentJs', () => {
  it('renders correctly', () => {
    const wrapper = mount(ComponentJs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = mount(ComponentJs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
