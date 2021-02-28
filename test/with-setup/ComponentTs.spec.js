import { mountWithVuetify, renderWithVuetify } from '../withVuetifyUtils'
import ComponentTs from '../../src/ComponentTs'
import * as userState from '../../src/state/userState'
import { UserMother } from '../UserMother'

describe('ComponentTs', () => {
  beforeEach(() => {
    userState.reset()
  })

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

  describe('given user name', () => {
    beforeEach(() => {
      const user = UserMother.create()
      userState.computedUserName.set(user.name)
    })

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

  describe('given random user name', () => {
    it('renders correctly', () => {
      const user = UserMother.random().build()
      userState.computedUserName.set(user.name)

      const wrapper = renderWithVuetify(ComponentTs)

      expect(wrapper.html()).toEqual(expect.stringContaining(user.name))
    })
  })
})
