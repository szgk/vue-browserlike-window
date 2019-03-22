<template>
  <div
    class="vue-smooth-window-item"
    v-if="index === active"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'vue-smooth-window-item',
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
@import './variables'
$smallBarSize = 10px
$scaleBarSize = 200px

</style>
