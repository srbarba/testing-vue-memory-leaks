import { render } from '@testing-library/vue'
import ComponentVueJs from '../../src/ComponentVueJs.vue'

describe('ComponentVueJs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentVueJs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = render(ComponentVueJs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
