<template>
  <div>Hello, {{ userName }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters(['userName']),
  },
})
</script>
