import { mountWithVuetify, renderWithVuetify } from '../withVuetifyUtils'
import ComponentTs from '../../src/ComponentTs'

describe('ComponentTs', () => {
  it('renders correctly', () => {
    const wrapper = mountWithVuetify(ComponentTs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = renderWithVuetify(ComponentTs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
