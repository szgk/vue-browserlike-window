<template>
  <div
    v-if="open"
    :style="{
      position: 'absolute',
      transform: `translate(${x}px, ${y}px)`,
      background: '#fff'
    }"
    @click="isDrawerOpen = false"
  >
    <div class="vue-browserlike-window__flex">
      <div
        class="vue-browserlike-window__corner_nw"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'nw')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-browserlike-window__top_bar"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'n')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-browserlike-window__corner_ne"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'ne')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
    </div>
    <div class="vue-browserlike-window__flex">
      <div
        class="vue-browserlike-window__left_bar"
        :style="{
          height: sizeY + (isMax ? 'vh': 'px')
        }"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'w')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        id="vue-browserlike-window"
        :style="{
          background: '#fff'
        }"
      >
        <div
          id="vue-browserlike-window__content"
          :style="{
            height: sizeY + (isMax ? 'vh': 'px'),
            width: sizeX + (isMax ? 'vw': 'px'),
            margin: '0 auto'
          }"
        >
          <div
            class="vue-browserlike-window__navi_bar"
            @mousedown="dragstart($event)"
            @mouseup="dragend($event)"
            @mousemove="dragmove($event)"
            @mouseout="dragend($event)"
            @dblclick.self="clickMaxButton()"
          >
            <div class="vue-browserlike-window__control_buttons">
              <button
                class="vue-browserlike-window__close"
                @click.stop="clickCloseButton()"
              />
              <button
                class="vue-browserlike-window__small"
                @click.stop="clickMinButton()"
              />
              <button
                class="vue-browserlike-window__scale"
                @click.stop="clickMaxButton()"
              />
            </div>

            <ul
              v-if="isTab"
              class="vue-browserlike-window__tab_headers"
            >
              <li
                v-for="(tab, index) in tabHeaders"
                :key="tab+index"
                :class="{active: activeTab === index}"
                :style="{width: isMax ? (100 / tabHeaders.length) + 'vw' :tabWidth + 'px'}"
                :draggable="tabDraggable"
                @click="clickTab(index)"
                @dragover="tabDragOver($event, index)"
                @dragend="tabDragEnd($event, index)"
              >
                <p
                  class="vue-browserlike-window__hendle"
                  :data-tab-index="index"
                  @mousedown="tabDragStart($event, index)"
                >
                  <span />
                  <span />
                  <span />
                </p>
                <p class="vue-browserlike-window__tab_name">
                  {{ tab.name }}
                </p>
              </li>
            </ul>
          </div>
          <div
            v-if="isTab"
            class="vue-browserlike-window__tab_item_wrapper"
          >
            <slot
              name="tabs"
              :active="active"
            />
          </div>
          <div v-else>
            <slot :active="activeTab" />
          </div>
          <button
            v-if="isTabMenu"
            class="vue-browserlike-window__drower_button"
            @click="toggleDrower($event)"
          >
            <span
              :style="{
                transform: isDrawerOpen ?'rotate(90deg)' : 'none'
              }"
            >&rtrif;</span>
          </button>
          <ul
            v-if="isDrawerOpen"
            class="vue-browserlike-window__drawer"
          >
            <li
              v-for="(tab,index) in tabHeaders"
              :key="tab+index"
              @click="clickTabMenu(index)"
            >
              {{ tab.name }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="vue-browserlike-window__right_bar"
        :style="{
          height: sizeY + (isMax ? 'vh': 'px')
        }"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'e')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
    </div>
    <div class="vue-browserlike-window__flex">
      <div
        class="vue-browserlike-window__corner_sw"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'sw')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-browserlike-window__under_bar"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 's')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-browserlike-window__corner_se"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'se')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 400
    },
    width: {
      type: Number,
      default: 400
    },
    active: {
      type: Number,
      required: true,
      default: 0
    },
    top: {
      type: Number,
      default: 100
    },
    left: {
      type: Number,
      default: 100
    },
    mode: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      dragStart: {},
      startPositoin: {},
      startSize: {},
      draggable: false,
      tabDraggable: false,
      activeTab: 0,
      activeContent: 0,
      beforeTab: 0,
      currentTab: 0,
      resizable: true,
      x: 0,
      y: 0,
      open: true,
      sizeX: this.width,
      sizeY: this.height,
      cache: {
        sizeY: this.height,
        sizeX: this.width,
        x: 0,
        y: 0
      },
      isTab: false,
      items: [],
      isMin: false,
      isMax: false,
      isDrawerOpen: false,
      tabHeaders: []
    }
  },
  computed: {
    tabWidth: function () {
      this.tabHeaders.length
      const tabArea = this.sizeX - 105 // button width
      return tabArea / this.tabHeaders.length
    },
    isTabMenu: function () {
      // min tab width
      return this.sizeX <= 50 * this.tabHeaders.length + 95
    }
  },
  watch: {
    value: function (val) {
      this.open = val
    }
  },
  created () {
    this.open = this.value
    this.tabHeaders = this.tabs.map((tabName, index) => ({
      name: tabName,
      content: index
    }))
    this.x = this.top
    this.y = this.left
    if (this.mode === 'tab') {
      this.isTab = true
      this.activeTab = this.active
    }
    this.createTabSlots()
  },
  beforeUpdate () {
    this.createTabSlots()
  },
  methods: {
    dragstart: function (e) {
      if (this.isMax) return
      this.dragStart = {
        x: e.pageX,
        y: e.pageY
      }
      this.startPosition = {
        x: this.x,
        y: this.y
      }
      this.startSize = {
        h: this.sizeY,
        w: this.sizeX
      }
      this.draggable = true
    },
    dragend: function (e) {
      if (this.isMax) return
      this.draggable = false
    },
    dragmove: function (e) {
      if (!this.draggable || this.isMax) return
      const move = this.getMove(e.pageX, e.pageY)
      this.x = this.startPosition.x + move.x
      this.y = this.startPosition.y + move.y
    },
    scale: function (e, direction) {
      if (!this.draggable || !this.resizable) return
      const move = this.getMove(e.pageX, e.pageY)
      const minWidth = 120
      const minHeight = 40
      switch (direction) {
        case 'n':
          this.sizeY = this.startSize.h - move.y
          if (this.sizeY < minHeight) return
          this.y = this.startPosition.y + move.y
          break
        case 's':
          this.sizeY = this.startSize.h + move.y
          break
        case 'e':
          this.sizeX = this.startSize.w + move.x
          break
        case 'w':
          if (this.startSize.w - move.x < minWidth) return
          this.x = this.startPosition.x + move.x
          this.sizeX = this.startSize.w - move.x
          break
        case 'ne':
          this.sizeY = this.startSize.h - move.y
          if (this.sizeY > minHeight) this.y = this.startPosition.y + move.y
          if (this.startSize.w + move.x > minWidth) {
            this.sizeX = this.startSize.w + move.x
          }
          break
        case 'nw':
          this.sizeY = this.startSize.h - move.y
          if (this.sizeY > minHeight) this.y = this.startPosition.y + move.y
          this.sizeX = this.startSize.w - move.x
          if (this.sizeX > minWidth) this.x = this.startPosition.x + move.x
          break
        case 'se':
          this.sizeY = this.startSize.h + move.y
          this.sizeX = this.startSize.w + move.x
          break
        case 'sw':
          this.sizeX = this.startSize.w - move.x
          if (this.sizeX > minWidth) this.x = this.startPosition.x + move.x
          this.sizeY = this.startSize.h + move.y
          break
      }
    },
    getMove: function (x, y) {
      const { x: startX, y: startY } = this.dragStart
      return { x: x - startX, y: y - startY }
    },
    createTabSlots: function () {
      if (this.mode === 'tab' && !this.$slots.tabs) {
        let index = 0
        const slots = this.$slots.default.filter(slot => {
          if (slot.tag && slot.tag.match(/vue-browserlike-window-item/g)) {
            slot.componentOptions.propsData = { index }
            index++
            return slot
          }
        })
        this.$slots.tabs = slots
      }
    },
    tabDragStart: function (e, index) {
      this.tabDraggable = true
      this.beforaTab = index
    },
    tabDragOver: function (e, index) {
      this.currentTab = index
    },
    tabDragEnd: function (e, index) {
      this.tabDraggable = false
      this.tabHeaders[this.beforaTab] = [
        this.tabHeaders[this.currentTab],
        (this.tabHeaders[this.currentTab] = this.tabHeaders[this.beforaTab])
      ][0]
      this.activeTab = this.currentTab
      this.activeContent = this.tabHeaders[this.currentTab].content
    },
    clickTab: function (num) {
      this.activeTab = num
    },
    caching () {
      this.cache.width = this.sizeX
      this.cache.height = this.sizeY
      this.cache.x = this.x
      this.cache.y = this.y
    },
    applyCache () {
      this.sizeX = this.cache.width
      this.sizeY = this.cache.height
      this.x = this.cache.x
      this.y = this.cache.y
    },
    clickMinButton () {
      if (!this.isMin) {
        this.caching()
        this.sizeX = 0
        this.sizeY = 0
        this.isMin = true
        this.isMax = false
        this.resizable = true
      } else {
        this.isMin = false
        this.isMax = false
        this.applyCache()
      }
    },
    clickMaxButton () {
      if (!this.isMax) {
        this.caching()
        this.isMax = true
        this.isMin = false
        this.resizable = false
        this.sizeX = 100
        this.sizeY = 100
        this.x = 0
        this.y = 0
      } else {
        this.isMin = false
        this.isMax = false
        this.applyCache()
        this.resizable = true
      }
    },
    clickCloseButton () {
      this.open = false
      this.$emit('close')
    },
    clickTabMenu (index) {
      this.activeTab = index
      this.activeContent = this.tabHeaders[this.activeTab].content
      this.isDrawerOpen = false
    },
    toggleDrower ($event) {
      this.isDrawerOpen = !this.isDrawerOpen
      $event.stopPropagation()
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/window';
</style>
