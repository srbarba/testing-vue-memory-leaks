import { render } from '@testing-library/vue'
import ComponentTs from '../../src/ComponentTs'
import store from '../../src/store'

describe('ComponentTs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentTs, { store })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
