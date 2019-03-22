<template>
<div>
  <smooth-window
    v-model="open"
    @close="open = false"
    :top="100"
    :left="100"
    :active="0"
    :tabs="['tab1', 'tab2', 'tab3']"
    mode="tab"
  >
    <smooth-window-item>items1</smooth-window-item>
    <smooth-window-item>items2</smooth-window-item>
  </smooth-window>
  <button @click="onClickButton">{{open ? 'Close' : 'Open'}}</button>
</div>
</template>

<script lang="ts">
  import SmoothWindow from '@/vue-smooth-window.vue'
  import SmoothWindowItem from '@/vue-smooth-window-item.vue'
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
      'smooth-window': SmoothWindow,
      'smooth-window-item': SmoothWindowItem
    }
  }
</script>

<style lang="stylus">
</style>
