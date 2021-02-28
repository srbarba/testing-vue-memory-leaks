import { mountWithVuetify } from '../mountWithVuetify'
import ComponentVueTs from '../../src/ComponentVueTs.vue'
import * as userState from '../../src/state/userState'
import { UserMother } from '../UserMotherWithoutFaker'

describe('ComponentVueTs', () => {
  beforeEach(() => {
    userState.reset()
  })

  it('renders correctly', () => {
    const wrapper = mountWithVuetify(ComponentVueTs)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders correctly with props', () => {
    const wrapper = mountWithVuetify(ComponentVueTs, {
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
      const wrapper = mountWithVuetify(ComponentVueTs)
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders correctly with props', () => {
      const wrapper = mountWithVuetify(ComponentVueTs, {
        propsData: {
          text: 'My dummy Component',
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
