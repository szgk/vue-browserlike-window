<template>
  <div
    class="vue-chrome-window-item"
    v-if="index === active"
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
    created() {
      console.log(this)
    },
    computed: {
      active: function () {
        return this.$parent['activeTab']
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
