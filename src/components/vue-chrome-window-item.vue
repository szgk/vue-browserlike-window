<template>
  <div
    class="vue-chrome-window-item"
    v-if="open"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default {
    name: 'vue-chrome-window-item',
    data() {
      return {}
    },
    computed: {
      active: function (): number {
        return this.$parent['activeTab']
      },
      open(): boolean {
        return this.index === this.active
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
