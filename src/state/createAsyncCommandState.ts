import Vue from 'vue'
import deepmerge from 'deepmerge'

export const STATUS = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
}

const initialState = <U>(initialData: U) =>
  Vue.observable({
    status: STATUS.IDLE,
    data: deepmerge<U>({}, initialData),
    error: undefined as Error | undefined,
  })

export function createAsyncCommandState<U>(initialData = {} as U) {
  const state = initialState(initialData)

  return {
    getState() {
      return state
    },
    getData() {
      return state.data
    },
    getError() {
      return state.error
    },
    getStatus() {
      return state.status
    },
    isLoading() {
      return state.status === STATUS.LOADING
    },
    isError() {
      return state.status === STATUS.ERROR
    },
    isSuccess() {
      return state.status === STATUS.SUCCESS
    },
    setLoading() {
      state.status = STATUS.LOADING
    },
    setSuccess() {
      state.status = STATUS.SUCCESS
    },
    setData<U>(data: U) {
      state.status = STATUS.IDLE
      state.error = undefined
      Vue.set(state, 'data', Object.assign(state.data, data))
    },
    setError(appError?: Error) {
      state.status = STATUS.ERROR
      state.error = appError
    },
    reset() {
      Object.assign(state, initialState(initialData))
    },
  }
}
