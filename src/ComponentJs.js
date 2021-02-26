export default {
  props: {
    text: {
      type: String,
      default: 'Dummy component',
    },
  },
  render(h) {
    return h('div', this.text)
  },
}
