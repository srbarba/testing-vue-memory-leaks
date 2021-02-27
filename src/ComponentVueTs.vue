<template>
  <v-card>
    {{ text }}
    <div>{{ $t('Hello world') }}</div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String as Vue.PropType<string>,
      default: 'Dummy component',
    },
  },
})
</script>
