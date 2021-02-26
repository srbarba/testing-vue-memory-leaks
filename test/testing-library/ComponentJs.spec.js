import { render } from '@testing-library/vue'
import ComponentJs from '../../src/ComponentJs'

describe('ComponentJs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentJs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = render(ComponentJs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
