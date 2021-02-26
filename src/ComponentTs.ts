import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String as Vue.PropType<string>,
      default: 'Dummy component',
    },
  },
  render(h) {
    return h('div', this.text)
  },
})
