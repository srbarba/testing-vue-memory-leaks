import { renderWithVuetify } from '../renderWithVuetify'
import ComponentVueTs from '../../src/ComponentVueTs.vue'

describe('ComponentVueTs', () => {
  it('renders correctly', () => {
    const wrapper = renderWithVuetify(ComponentVueTs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = renderWithVuetify(ComponentVueTs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
