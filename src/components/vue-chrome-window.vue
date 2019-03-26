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
    <div class="vue-chrome-window__flex">
      <div class="vue-chrome-window__corner_nw"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'nw')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-chrome-window__top_bar"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'n')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-chrome-window__corner_ne"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'ne')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
    </div>
    <div class="vue-chrome-window__flex">
      <div
        class="vue-chrome-window__left_bar"
        :style="{
          height: sizeY + (isMax ? 'vh': 'px')
        }"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'w')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        id="vue-chrome-window"
        :style="{
          background: '#fff'
        }"
      >
          <div
            id="vue-chrome-window__content"
            :style="{
              height: sizeY + (isMax ? 'vh': 'px'),
              width: sizeX + (isMax ? 'vw': 'px'),
              margin: '0 auto'
            }"
          >
            <div
              class="vue-chrome-window__navi_bar"
              @mousedown="dragstart($event)"
              @mouseup="dragend($event)"
              @mousemove="dragmove($event)"
              @mouseout="dragend($event)"
              @dblclick.self="clickMaxButton()"
            >
              <div class="vue-chrome-window__control_buttons">
                <button @click.stop="clickCloseButton()" class="vue-chrome-window__close" />
                <button @click.stop="clickMinButton()" class="vue-chrome-window__small" />
                <button @click.stop="clickMaxButton()" class="vue-chrome-window__scale" />
              </div>

              <ul
                v-if="isTab"
                class="vue-chrome-window__tab_headers"
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
                    class="vue-chrome-window__hendle"
                    :data-tab-index="index"
                    @mousedown="tabDragStart($event, index)"
                  >
                    <span/>
                    <span/>
                    <span/>
                  </p>
                  <p class="vue-chrome-window__tab_name">{{tab.name}}</p>
                </li>
              </ul>
            </div>
            <div
              v-if="isTab"
              class="vue-chrome-window__tab_item_wrapper"
            >
              <slot name="tabs" :active="active"/>
            </div>
            <div v-else>
              <slot :active="activeTab" />
            </div>
            <button
              v-if="isTabMenu"
              @click="toggleDrower($event)"
              class="vue-chrome-window__drower_button"
            >
              <span
                :style="{
                  transform: isDrawerOpen ?'rotate(90deg)' : 'none'
                }"
              >&rtrif;</span>
            </button>
            <ul
              v-if="isDrawerOpen"
              class="vue-chrome-window__drawer"
            >
              <li
                v-for="(tab,index) in tabHeaders"
                :key="tab+index"
                @click="clickTabMenu(index)"
              >
                {{tab.name}}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="vue-chrome-window__right_bar"
          :style="{
            height: sizeY + (isMax ? 'vh': 'px')
          }"
          @mousedown="dragstart($event)"
          @mousemove="scale($event, 'e')"
          @mouseup="dragend($event)"
          @mouseout="dragend($event)"
        />
    </div>
    <div class="vue-chrome-window__flex">
      <div 
        class="vue-chrome-window__corner_sw"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'sw')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 's')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
        class="vue-chrome-window__under_bar"
      />
      <div
        class="vue-chrome-window__corner_se"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'se')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue, {VNode} from 'vue'
  type Direction = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

  export default {
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
          y: 0,
        },
        isTab: false,
        items: [],
        isMin: false,
        isMax: false,
        isDrawerOpen: false,
        tabHeaders: []
      }
    },
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
    computed: {
      tabWidth: function(): number {
        this.tabHeaders.length
        const tabArea = this.sizeX - 105 // button width
        return tabArea / this.tabHeaders.length
      },
      isTabMenu: function(): boolean {
        // min tab width
        return this.sizeX <= 50 * this.tabHeaders.length + 95
      }
    },
    created() {
      this.open = this.value
      this.tabHeaders = this.tabs.map((tabName, index) => ({
        name: tabName,
        content: index
      }))
      this.x = this.top
      this.y = this.left
      if(this.mode === 'tab') {
        this.isTab = true
        this.activeTab = this.active
      }
      this.createTabSlots()
    },
    beforeUpdate () {
      this.createTabSlots()
    },
    methods: {
      dragstart: function(e) {
        if(this.isMax) return
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
      dragend: function(e) {
        if(this.isMax) return
        this.draggable = false
        const dragEnd = { x: e.pageX, y: e.pageY }
      },
      dragmove: function(e) {
        if (!this.draggable || this.isMax) return
        const {x: startX, y: startY} = this.dragStart
        const move = this.getMove(e.pageX,e.pageY)
        this.x = this.startPosition.x + move.x
        this.y = this.startPosition.y + move.y
      },
      scale: function(e: MouseEvent, direction: Direction) {
        if (!this.draggable || !this.resizable) return
        const move = this.getMove(e.pageX, e.pageY)
        const minWidth = 120
        const minHeight = 40
        switch(direction) {
          case 'n':
            this.sizeY = this.startSize.h - move.y
            if(this.sizeY < minHeight) return
            this.y = this.startPosition.y + move.y
            break
          case 's':
            this.sizeY = this.startSize.h + move.y
            break
          case 'e':
            this.sizeX = this.startSize.w + move.x
            break
          case 'w':
            if(this.startSize.w - move.x < minWidth) return
            this.x = this.startPosition.x + move.x
            this.sizeX = this.startSize.w - move.x
            break
          case 'ne':
            this.sizeY = this.startSize.h - move.y
            if(this.sizeY > minHeight)
              this.y = this.startPosition.y + move.y
            if(this.startSize.w + move.x > minWidth) {
              this.sizeX = this.startSize.w + move.x
            }
            break
          case 'nw':
            this.sizeY = this.startSize.h - move.y
            if(this.sizeY > minHeight)
              this.y = this.startPosition.y + move.y
            this.sizeX = this.startSize.w - move.x
            if(this.sizeX > minWidth)
              this.x = this.startPosition.x + move.x
            break
          case 'se':
            this.sizeY = this.startSize.h + move.y
            this.sizeX = this.startSize.w + move.x
            break
          case 'sw':
            this.sizeX = this.startSize.w - move.x
            if(this.sizeX > minWidth)
              this.x = this.startPosition.x + move.x
            this.sizeY = this.startSize.h + move.y
            break
        }
      },
      getMove: function(x,y) {
        const {x: startX, y: startY} = this.dragStart
        return { x: x - startX, y: y - startY }
      },
      createTabSlots: function() {
        if(this.mode === 'tab' && !this.$slots.tabs) {
          let index = 0
          const slots = this.$slots.default.filter((slot: VNode) => {
            if(slot.tag && slot.tag.match(/vue-chrome-window-item/g)) {
              slot.componentOptions.propsData = {index}
              index++
              return slot
            }
          })
          this.$slots.tabs = slots
        }
      },
      tabDragStart: function(e, index) {
        this.tabDraggable = true
        this.beforaTab = index
      },
      tabDragOver: function(e, index) {
        this.currentTab = index
      },
      tabDragEnd: function(e, index) {
        this.tabDraggable = false
        this.tabHeaders[this.beforaTab] = [this.tabHeaders[this.currentTab], this.tabHeaders[this.currentTab] = this.tabHeaders[this.beforaTab]][0]
        this.activeTab = this.currentTab
        this.activeContent = this.tabHeaders[this.currentTab].content
      },
      clickTab: function(num: number) {
        this.activeTab = num
      },
      caching() {
        this.cache.width = this.sizeX
        this.cache.height = this.sizeY
        this.cache.x = this.x
        this.cache.y = this.y
      },
      applyCache() {
        this.sizeX = this.cache.width
        this.sizeY = this.cache.height
        this.x = this.cache.x
        this.y = this.cache.y
      },
      clickMinButton() {
        if(!this.isMin) {
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
      clickMaxButton() {
        if(!this.isMax) {
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
      clickCloseButton() {
        this.open = false
        this.$emit('close')
      },
      clickTabMenu(index: number) {
        this.activeTab = index
        this.activeContent = index
        this.isDrawerOpen = false
      },
      toggleDrower($event: MouseEvent) {
        this.isDrawerOpen = !this.isDrawerOpen
        $event.stopPropagation()
      }
    },
    watch: {
      value: function(val: boolean) {
        this.open = val
      }
    }
  }
</script>

<style lang="stylus">
@import '../styles/window'
</style>
