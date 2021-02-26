import { mount } from '@vue/test-utils'
import ComponentTs from '../../src/ComponentTs'

describe('ComponentTs', () => {
  it('renders correctly', () => {
    const wrapper = mount(ComponentTs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = mount(ComponentTs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
