import { render } from '@testing-library/vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'

export function mountWithVuetify(component, mountOptions = {}) {
  const localVue = mountOptions.localVue || createLocalVue()
  const vuetify = mountOptions.vuetify || new Vuetify()

  return mount(component, { ...mountOptions, localVue, vuetify })
}

export function renderWithVuetify(
  component,
  renderOptions = {},
  callback = undefined
) {
  const vuetify = renderOptions.vuetify || new Vuetify()
  return render(component, { ...renderOptions, vuetify }, callback)
}
