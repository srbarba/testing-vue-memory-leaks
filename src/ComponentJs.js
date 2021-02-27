export default {
  props: {
    text: {
      type: String,
      default: 'Dummy component',
    },
  },
  render(h) {
    return h('v-card', [this.text, h('div', this.$t('Hello world').toString())])
  },
}
