<template>
<div>
  <smooth-window
    v-model="open"
    :top="100"
    :left="100"
  >
    <div>hello</div>
  </smooth-window>
  <button @click="onClickButton">{{open ? 'Close' : 'Open'}}</button>
</div>
</template>

<script lang="ts">
  import SmoothWindow from '@/vue-smooth-window.vue'
  export default {
    data (){
      return {
        open: true
      }
    },
    methods: {
      onClickButton: function(){
        this.open = !this.open
      }
    },
    components: {
      'smooth-window': SmoothWindow
    }
  }
</script>

<style lang="stylus">
</style>
