import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export function mountWithVuetify(component, mountOptions = {}) {
  const localVue = mountOptions.localVue || createLocalVue()
  const vuetify = mountOptions.vuetify || new Vuetify()

  return mount(component, { ...mountOptions, localVue, vuetify })
}
