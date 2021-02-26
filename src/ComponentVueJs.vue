<template>
  <v-card>{{ text }}</v-card>
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
