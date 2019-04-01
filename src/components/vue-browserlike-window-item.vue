<template>
  <div
    v-if="open"
    class="vue-browserlike-window-item"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VbWindowItem',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    open () {
      return this.index === this.$parent['activeContent']
    }
  }
}
</script>
