import { renderWithVuetify } from '../renderWithVuetify'
import ComponentVueJs from '../../src/ComponentVueJs.vue'

describe('ComponentVueJs', () => {
  it('renders correctly', () => {
    const wrapper = renderWithVuetify(ComponentVueJs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = renderWithVuetify(ComponentVueJs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
