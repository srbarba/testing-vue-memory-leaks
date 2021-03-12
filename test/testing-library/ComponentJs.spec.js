import { render } from '@testing-library/vue'
import ComponentJs from '../../src/ComponentJs'
import store from '../../src/store'

describe('ComponentJs', () => {
  it('renders correctly', () => {
    const wrapper = render(ComponentJs, { store })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
