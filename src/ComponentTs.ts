import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters(['userName']),
  },
  render(h) {
    return h('div', `Hello, ${this.userName}`)
  },
})
