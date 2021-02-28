import { renderWithVuetify } from '../../renderWithVuetify'
import ComponentVueTs from '../../../src/ComponentVueTs.vue'
import * as userState from '../../../src/state/userState'
import { UserMother } from '../../UserMotherWithoutFaker'

describe('ComponentVueTs', () => {
  beforeEach(() => {
    userState.reset()
  })

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

  describe('given user name', () => {
    beforeEach(() => {
      const user = UserMother.create()
      userState.computedUserName.set(user.name)
    })

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

  describe('given random user name', () => {
    it('renders correctly', () => {
      const user = UserMother.random().build()
      userState.computedUserName.set(user.name)

      const wrapper = renderWithVuetify(ComponentVueTs)

      expect(wrapper.html()).toEqual(expect.stringContaining(user.name))
    })
  })
})
