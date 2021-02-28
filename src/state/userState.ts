import type { User } from '../types/User'
import { createAsyncCommandState } from './createAsyncCommandState'

const initialState = {
  id: 0,
  name: '',
} as User

const commandState = createAsyncCommandState(initialState)
export const reset = commandState.reset

export const computedUserName = {
  set(name: User['name']) {
    commandState.setData({ name })
  },
  get() {
    return commandState.getData().name
  },
}

export const computedId = {
  set(id: User['id']) {
    commandState.setData({ id })
  },
  get() {
    return commandState.getData().id
  },
}
