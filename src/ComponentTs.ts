import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: 'Dummy component',
    },
  },
  render(h) {
    return h('div', this.text)
  },
})
