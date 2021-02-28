import Vue from 'vue'
import { computedUserName } from './state/userState'

export default Vue.extend({
  props: {
    text: {
      type: String as Vue.PropType<string>,
      default: 'Dummy component',
    },
  },
  computed: {
    userName: computedUserName,
  },
  render(h) {
    return h('v-card', [
      this.text,
      h(
        'div',
        this.$t('Hello {userName}', { userName: this.userName }).toString()
      ),
    ])
  },
})
