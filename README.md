[![CircleCI](https://circleci.com/gh/szgk/vue-browserlike-window.svg?style=svg)](https://circleci.com/gh/szgk/vue-browserlike-window)

# Vue BrowserLike Window
Draggable and Resizable UI like browser.

![demo](./demo.gif "vue-browserlike-window")

## How to use

- install
```
npm i -D vue-browserlike-window
yarn add  -D vue-browserlike-window
```

- main.js
```javascript
import VBWindow from 'vue-browserlike-window'

Vue.use(VBWindow)
```
- *.vue
```html
<template>
  <vb-window
    v-model="open"
    @close="open = false"
    :top="100"
    :left="100"
    :active="0"
    :tabs="['tab1', 'tab2', 'tab3']"
    mode="tab"
  >
    <vb-window-item>item1</vb-window-item>
    <vb-window-item>item2</vb-window-item>
    <vb-window-item>item3</vb-window-item>
  </vb-window>
</template>
```
| name | type | discription |
---|---|----
| mode | "tab" | tab mode setting |
| top | number |top position |
| left | number | left position |
| active | active | default active tab number |
| tabs | string[] | tab menus |
