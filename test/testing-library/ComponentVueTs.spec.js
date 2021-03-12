import { render } from '@testing-library/vue'
import ComponentVueTs from '../../src/ComponentVueTs.vue'
import store from '../../src/store'

describe('ComponentVueTs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentVueTs, { store })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
