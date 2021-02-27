import Vue from 'vue'
import Vuetify from 'vuetify'
import { config } from '@vue/test-utils'

Vue.use(Vuetify)

if (config && config.mocks) {
  config.mocks['$t'] = (value) => value
}
