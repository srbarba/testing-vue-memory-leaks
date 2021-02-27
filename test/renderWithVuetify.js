import Vue from 'vue'
import { render } from '@testing-library/vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export function renderWithVuetify(
  component,
  renderOptions = {},
  callback = undefined
) {
  const vuetify = renderOptions.vuetify || new Vuetify()
  const mocks = { ...renderOptions.mocks, $t: (value) => value }
  return render(component, { ...renderOptions, mocks, vuetify }, callback)
}
