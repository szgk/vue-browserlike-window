<template>
  <div
    class="vue-browserlike-window-item"
    v-if="open"
  >
    <slot/>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'vue-browserlike-window-item',
    data() {
      return {}
    },
    computed: {
      open() {
        return this.index === this.$parent['activeContent']
      }
    },
    props: {
      index: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style lang="stylus">
</style>
