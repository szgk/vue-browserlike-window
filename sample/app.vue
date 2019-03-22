<template>
<div>
  <v-chrome-window
    v-model="open"
    @close="open = false"
    :top="100"
    :left="100"
    :active="0"
    :tabs="['tab1', 'tab2', 'tab3']"
    mode="tab"
  >
    <v-chrome-window-item>item1</v-chrome-window-item>
    <v-chrome-window-item>item2</v-chrome-window-item>
    <v-chrome-window-item>item3</v-chrome-window-item>
  </v-chrome-window>
  <button @click="onClickButton">{{open ? 'Close' : 'Open'}}</button>
</div>
</template>

<script lang="ts">
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
    }
  }
</script>

<style lang="stylus">
</style>
