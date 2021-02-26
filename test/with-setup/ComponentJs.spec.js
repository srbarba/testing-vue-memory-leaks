import { renderWithVuetify } from '../withVuetifyUtils'
import ComponentJs from '../../src/ComponentJs'

describe('ComponentJs', () => {
  it('renders correctly', () => {
    const wrapper = renderWithVuetify(ComponentJs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = renderWithVuetify(ComponentJs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
