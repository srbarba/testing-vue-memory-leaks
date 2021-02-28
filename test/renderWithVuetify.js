import Vue from 'vue'
import { render } from '@testing-library/vue'
import Vuetify from 'vuetify'
import { i18nMock } from './i18nMock'

Vue.use(Vuetify)

export function renderWithVuetify(
  component,
  renderOptions = {},
  callback = undefined
) {
  const vuetify = renderOptions.vuetify || new Vuetify()
  const mocks = { ...renderOptions.mocks, $t: i18nMock }
  return render(component, { ...renderOptions, mocks, vuetify }, callback)
}
