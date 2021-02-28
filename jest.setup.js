import Vue from 'vue'
import Vuetify from 'vuetify'
import { config } from '@vue/test-utils'

Vue.use(Vuetify)

if (config && config.mocks) {
  config.mocks.$t = (msg) => msg
  config.mocks.$tc = (msg) => msg
  config.mocks.$i18n = {
    locale: 'EN',
    locales: [
      { code: 'EN', name: 'English' },
      { code: 'ES', name: 'Español' },
    ],
  }
}

// console mock
console.error = jest.fn((values) => values)
console.warn = jest.fn((values) => values)
console.info = jest.fn((values) => values)
console.debug = jest.fn((values) => values)
console.log = jest.fn((values) => values)
console.time = jest.fn((values) => values)
console.timeEnd = jest.fn((values) => values)
console.group = jest.fn((values) => values)
console.groupEnd = jest.fn((values) => values)
