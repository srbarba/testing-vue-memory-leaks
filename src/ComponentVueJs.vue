<template>
  <v-card>
    {{ text }}
    <div>{{ $t('Hello {userName}', { userName }) }}</div>
  </v-card>
</template>

<script>
import Vue from 'vue'
import { computedUserName } from './state/userState'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: 'Dummy component',
    },
  },
  computed: {
    userName: computedUserName,
  },
})
</script>
