<template>
  <div
    v-if="open"
    :style="{
      position: 'absolute',
      transform: `translate(${x}px, ${y}px)`,
      background: '#fff'
    }"
  >
    <div class="vue-smart-window__flex">
      <div class="vue-smart-window__corner_nw"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'nw')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-smart-window__top_bar"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'n')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        class="vue-smart-window__corner_ne"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'ne')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
    </div>
    <div class="vue-smart-window__flex">
      <div
        class="vue-smart-window__left_bar"
        :style="{
          height: height + (isMax ? 'vh': 'px')
        }"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'w')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
      <div
        id="vue-smart-window"
        :style="{
          background: '#fff'
        }"
      >
        <div
          id="vue-smooth-window__content"
          :style="{
            height: height + (isMax ? 'vh': 'px'),
            width: width + (isMax ? 'vw': 'px'),
            margin: '0 auto'
          }"
        >
          <div
            class="vue-smart-window__navi_bar"
            @mousedown="dragstart($event)"
            @mouseup="dragend($event)"
            @mousemove="dragmove($event)"
            @mouseout="dragend($event)"
            @dblclick="clickMaxButton()"
          >
            <div class="vue-smart-window__control_buttons">
              <button @click="clickCloseButton()" class="vue-smart-window__close" />
              <button @click="clickMinButton()" class="vue-smart-window__small" />
              <button @click="clickMaxButton()" class="vue-smart-window__scale" />
            </div>

            <!-- <div
              class="vue-smart-window__move_handle"
              v-if="isMin"
            >
              <div>
                <span/>
                <span/>
                <span/>
              </div>
            </div> -->

            <ul
              v-if="isTab"
              class="vue-smart-window__tab_headers"
            >
              <li
                v-for="(tab, index) in tabs"
                :key="tab+index"
                :class="{active: activeTab === index}"
                @click="clickTab(index)"
              >
                {{tab}}
              </li>
            </ul>
          </div>

          <div
            v-if="isTab"
            class="vue-smart-window__tab_item_wrapper"
          >
            <slot name="tabs" :active="active"/>
          </div>
          <div v-else>
            <slot :active="activeTab"> x:{{x}} y:{{y}} </slot>
          </div>

          </div>
        </div>
        <div
          class="vue-smart-window__right_bar"
          :style="{
            height: height + (isMax ? 'vh': 'px')
          }"
          @mousedown="dragstart($event)"
          @mousemove="scale($event, 'e')"
          @mouseup="dragend($event)"
          @mouseout="dragend($event)"
        />
    </div>
    <div class="vue-smart-window__flex">
      <div 
        class="vue-smart-window__corner_sw"
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
        class="vue-smart-window__under_bar"
      />
      <div
        class="vue-smart-window__corner_se"
        @mousedown="dragstart($event)"
        @mousemove="scale($event, 'se')"
        @mouseup="dragend($event)"
        @mouseout="dragend($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import {VNode} from 'vue'
  type Direction = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

  export default {
    data () {
      return {
        rect: {},
        dragStart: {},
        startPositoin: {},
        startSize: {},
        draggable: false,
        resizable: true,
        x: 0,
        y: 0,
        open: true,
        cache: {
          height: 400,
          width: 400,
          x: 0,
          y: 0,
        },
        height: 400,
        width: 400,
        isTab: false,
        items: [],
        isMin: false,
        isMax: false,
        activeTab: {},
      }
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
           h: this.height,
           w: this.width
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
        const minHeight = 30
        console.log(this.height, this.width)
        console.log(move.x, move.y)
        switch(direction) {
          case 'n':
            this.height = this.startSize.h - move.y
            if(this.height < minHeight) return
            this.y = this.startPosition.y + move.y
            break
          case 's':
            this.height = this.startSize.h + move.y
            break
          case 'e':
            this.width = this.startSize.w + move.x
            break
          case 'w':
            if(this.startSize.w - move.x < minWidth) return
            this.x = this.startPosition.x + move.x
            this.width = this.startSize.w - move.x
            break
          case 'ne':
            this.height = this.startSize.h - move.y
            if(this.height > minHeight)
              this.y = this.startPosition.y + move.y
            if(this.startSize.w + move.x > minWidth) {
              this.width = this.startSize.w + move.x
            }
            break
          case 'nw':
            this.height = this.startSize.h - move.y
            if(this.height > minHeight)
              this.y = this.startPosition.y + move.y
            this.width = this.startSize.w - move.x
            if(this.width > minWidth)
              this.x = this.startPosition.x + move.x
            break
          case 'se':
            this.height = this.startSize.h + move.y
            this.width = this.startSize.w + move.x
            break
          case 'sw':
            this.width = this.startSize.w - move.x
            if(this.width > minWidth)
              this.x = this.startPosition.x + move.x
            this.height = this.startSize.h + move.y
            break
        }
      },
      getMove: function(x,y) {
        const {x: startX, y: startY} = this.dragStart
        return { x: x - startX, y: y - startY }
      },
      createTabSlots: function() {
        let index = 0
        const slots = this.$slots.default.filter((slot: VNode) => {
          if(slot.tag && slot.tag.match(/vue-smooth-window-item/g)) {
            slot.componentOptions.propsData = {index}
            index++
            return slot
          }
        })
        this.$slots.tabs = slots
      },
      clickTab: function(num: number) {
        console.log('click activeTab', num)
        this.activeTab = num
        this.createTabSlots()
      },
      applyCache() {
        this.width = this.cache.width
        this.height = this.cache.height
        this.x = this.cache.x
        this.y = this.cache.y
        this.isMin = false
        this.isMax = false
      },
      clickMinButton() {
        this.cache.width = this.width
        this.cache.height = this.height
        this.width = 0
        this.height = 0
        this.isMin = true
        this.isMax = false
        this.resizable = true
      },
      clickMaxButton() {
        if(!this.isMax) {
          this.cache.width = this.width
          this.cache.height = this.height
          this.cache.x = this.x
          this.cache.y = this.y
          this.isMax = true
          this.isMin = false
          this.resizable = false
          this.width = 100
          this.height = 100
          this.x = 0
          this.y = 0
        } else {
          this.applyCache()
          this.resizable = true
        }
      },
      clickCloseButton() {
        this.open = false
        this.$emit('close')
      }
    },
    props: {
      value: {
        type: Boolean,
        required: true
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
    watch: {
      value: function(val: boolean) {
        this.open = val
      }
    },
    created () {
      this.x = this.top
      this.y = this.left

      if(this.mode === 'tab') {
        this.isTab = true
        this.activeTab = this.active
        this.createTabSlots()
      }
    }
  }
</script>

<style lang="stylus">
@import './variables'
@import './window'
</style>
