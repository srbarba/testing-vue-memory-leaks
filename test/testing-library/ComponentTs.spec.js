import { render } from '@testing-library/vue'
import ComponentTs from '../../src/ComponentTs'

describe('ComponentTs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentTs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = render(ComponentTs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
