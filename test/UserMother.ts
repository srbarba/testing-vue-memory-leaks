import type { User } from '../src/types/User'
import Chance from 'chance'
import deepmerge from 'deepmerge'

export class UserMother {
  props: User

  private constructor(data: User) {
    this.props = data
  }

  static create(data = {} as User) {
    return deepmerge(UserMother.default, data)
  }

  static random() {
    var chance = new Chance()
    return new UserMother({
      id: chance.integer(),
      name: chance.name(),
    })
  }

  static default = {
    id: 1,
    name: 'John Doe',
  }

  withName(name: string) {
    return new UserMother({
      ...this.props,
      name,
    })
  }

  withId(id: number) {
    return new UserMother({
      ...this.props,
      id,
    })
  }

  build() {
    return UserMother.create(this.props)
  }
}
