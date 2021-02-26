import { mountWithVuetify } from '../mountWithVuetify'
import ComponentJs from '../../src/ComponentJs'

describe('ComponentJs', () => {
  it('renders correctly', () => {
    const wrapper = mountWithVuetify(ComponentJs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = mountWithVuetify(ComponentJs, {
      propsData: {
        text: 'My dummy Component',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
