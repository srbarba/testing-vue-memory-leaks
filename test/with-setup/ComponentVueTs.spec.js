import { render } from '@testing-library/vue'
import ComponentVueTs from '../../src/ComponentVueTs.vue'

describe('ComponentVueTs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentVueTs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = render(ComponentVueTs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
