import { render } from '@testing-library/vue'
import ComponentVueJs from '../../src/ComponentVueJs.vue'
import store from '../../src/store'

describe('ComponentVueJs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentVueJs, { store })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
