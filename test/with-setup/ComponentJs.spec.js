import { mountWithVuetify, renderWithVuetify } from '../withVuetifyUtils'
import ComponentJs from '../../src/ComponentJs'
import * as userState from '../../src/state/userState'
import { UserMother } from '../UserMother'

describe('ComponentJs', () => {
  beforeEach(() => {
    userState.reset()
  })

  it('renders correctly', () => {
    const wrapper = mountWithVuetify(ComponentJs)
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

  describe('given user name', () => {
    beforeEach(() => {
      const user = UserMother.create()
      userState.computedUserName.set(user.name)
    })

    it('renders correctly', () => {
      const wrapper = mountWithVuetify(ComponentJs)
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

  describe('given random user name', () => {
    it('renders correctly', () => {
      const user = UserMother.random().build()
      userState.computedUserName.set(user.name)

      const wrapper = renderWithVuetify(ComponentJs)

      expect(wrapper.html()).toEqual(expect.stringContaining(user.name))
    })
  })
})
