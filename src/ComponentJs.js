import { computedUserName } from './state/userState'

export default {
  props: {
    text: {
      type: String,
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
}
