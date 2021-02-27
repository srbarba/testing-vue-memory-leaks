<template>
  <v-card>
    {{ text }}
    <div>{{ $t('Hello world') }}</div>
  </v-card>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      default: 'Dummy component',
    },
  },
})
</script>
