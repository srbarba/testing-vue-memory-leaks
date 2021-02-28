import type { User } from '../src/types/User'
import deepmerge from 'deepmerge'
import users from './users.json'

export class UserMother {
  props: User

  private constructor(data: User) {
    this.props = data
  }

  static create(data = {} as User) {
    return deepmerge(UserMother.default, data)
  }

  static random() {
    return new UserMother(users[Math.floor(Math.random() * 4)])
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
