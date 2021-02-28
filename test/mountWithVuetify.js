import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { i18nMock } from './i18nMock'

Vue.use(Vuetify)

export function mountWithVuetify(component, mountOptions = {}) {
  const localVue = mountOptions.localVue || createLocalVue()
  const vuetify = mountOptions.vuetify || new Vuetify()
  const mocks = { ...mountOptions.mocks, $t: i18nMock }

  return mount(component, { ...mountOptions, localVue, vuetify, mocks })
}
