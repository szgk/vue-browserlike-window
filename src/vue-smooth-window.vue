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
          height: height + 'px'
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
          id="vue-smart-window__content"
          :style="{
            height: (height - 1) + 'px',
            width: (width - 1) + 'px',
            margin: '0 auto'
          }"
        >
          <div
            class="vue-smart-window__navi_bar"
            @mousedown="dragstart($event)"
            @mouseup="dragend($event)"
            @mousemove="dragmove($event)"
            @mouseout="dragend($event)"
          >
            <div class="vue-smart-window__control_buttons">
              <button class="vue-smart-window__close" />
              <button class="vue-smart-window__small" />
              <button class="vue-smart-window__scale" />
            </div>
          </div>
          {{x}}
          {{y}}

          <slot/>

          </div>
        </div>
        <div
          class="vue-smart-window__right_bar"
          :style="{
            height: height + 'px'
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
  type Direction = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

  export default {
    data () {
      return {
        rect: {},
        dragStart: {},
        startPositoin: {},
        startSize: {},
        draggable: false,
        x: 0,
        y: 0,
        open: true,
        height: 400,
        width: 400
      }
    },
    methods: {
      dragstart: function(e) {
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
        this.draggable = false
        const dragEnd = { x: e.pageX, y: e.pageY }
      },
      dragmove: function(e) {
        if (!this.draggable) return
        const {x: startX, y: startY} = this.dragStart
        const move = this.getMove(e.pageX,e.pageY)
        this.x = this.startPosition.x + move.x
        this.y = this.startPosition.y + move.y
      },
      scale: function(e: MouseEvent, direction: Direction) {
        if (!this.draggable) return
        const move = this.getMove(e.pageX, e.pageY)

        switch(direction) {
          case 'n':
            this.y = this.startPosition.y + move.y
            this.height = this.startSize.h - move.y
            break
          case 's':
            this.height = this.startSize.h + move.y
            break
          case 'e':
            this.width = this.startSize.w + move.x
            break
          case 'w':
            this.x = this.startPosition.x + move.x
            this.width = this.startSize.w - move.x
            break
          case 'ne':
            this.y = this.startPosition.y + move.y
            this.height = this.startSize.h - move.y
            this.width = this.startSize.w + move.x
            break
          case 'nw':
            this.y = this.startPosition.y + move.y
            this.height = this.startSize.h - move.y
            this.x = this.startPosition.x + move.x
            this.width = this.startSize.w - move.x
            break
          case 'se':
            this.height = this.startSize.h + move.y
            this.width = this.startSize.w + move.x
            break
          case 'sw':
            this.x = this.startPosition.x + move.x
            this.width = this.startSize.w - move.x
            this.height = this.startSize.h + move.y
            break
        }
      },
      getMove: function(x,y) {
        const {x: startX, y: startY} = this.dragStart
        return { x: x - startX, y: y - startY }
      }
    },
    props: {
      value: Boolean,
      top: Number,
      left: Number
    },
    watch: {
      value: function(val: boolean) {
        this.open = val
      }
    },
    created () {
      this.x = this.top
      this.y = this.left
    }
  }
</script>

<style lang="stylus">
$red = rgb(245, 68, 68)
$yellow = rgb(253, 181, 37)
$gleen = rgb(38, 188, 46)
$black = rgba(0, 0, 0, 0.4)
$grey = #888
$midGrey = #ddd
$lightGrey = rgb(231, 234, 237)
$selectBulue = rgba(0, 237, 255, 0.1)

$smallBarSize = 10px
$scaleBarSize = 200px

#vue-smart-window
  border-radius: 5px
  border: 1px solid $midGrey
#vue-smart-window__content
  padding: 0 1px
.vue-smart-window__flex
  display: flex
.vue-smart-window__navi_bar
  display: flex
  border-radius: 5px 5px 0 0
  width: calc(100% -2px)
  margin: 0 auto
  height: 30px
  padding: 5px 10px
  box-sizing: border-box
  background: $lightGrey
  cursor: move

/* all bar (for debug)*/
// .vue-smart-window__top_bar
// .vue-smart-window__under_bar
// .vue-smart-window__left_bar
// .vue-smart-window__right_bar
// .vue-smart-window__corner_ne
// .vue-smart-window__corner_nw
// .vue-smart-window__corner_se
// .vue-smart-window__corner_sw
//   transition: width 0.4s ease 0, height 0.4s ease 0,
//   &:hover
//     background: $selectBulue
//     box-shadow: 0 0 10px $selectBulue

/* top, under */
.vue-smart-window__top_bar
.vue-smart-window__under_bar
  position: absolute
  left: 0
  right: 0
  height: $smallBarSize
  margin: 0 auto
  cursor: row-resize
.vue-smart-window__top_bar
  top: - $smallBarSize
.vue-smart-window__top_bar
  &:hover
    top: - ($scaleBarSize / 2)
    height: $scaleBarSize
.vue-smart-window__top_bar
  bottom: 0
.vue-smart-window__under_bar
  &:hover
    height: $scaleBarSize
    bottom: - ($scaleBarSize / 2)

/* left, right */
.vue-smart-window__left_bar
.vue-smart-window__right_bar
  position: absolute
  top: 0
  width: $smallBarSize
  cursor: col-resize
.vue-smart-window__left_bar
  left: - $smallBarSize
.vue-smart-window__right_bar
  right: - $smallBarSize
.vue-smart-window__left_bar
  &:hover
    width: $scaleBarSize
    left: - ($scaleBarSize / 2)
.vue-smart-window__right_bar
  &:hover
    width: $scaleBarSize
    right: - ($scaleBarSize / 2)

/* corner */
.vue-smart-window__corner_ne
.vue-smart-window__corner_nw
.vue-smart-window__corner_se
.vue-smart-window__corner_sw
  position: absolute
  z-index: 200
  width: $smallBarSize
  height: $smallBarSize
.vue-smart-window__corner_nw
.vue-smart-window__corner_ne
.vue-smart-window__corner_se
.vue-smart-window__corner_sw
  &:hover
    height: $scaleBarSize
    width: $scaleBarSize
.vue-smart-window__corner_nw
  top: - $smallBarSize
  left: - $smallBarSize
  cursor: nw-resize
.vue-smart-window__corner_nw
  &:hover
    left: - ($scaleBarSize / 2)
    top: - ($scaleBarSize / 2)
    height: $scaleBarSize
    width: $scaleBarSize
.vue-smart-window__corner_ne
  top: - $smallBarSize
  right: - $smallBarSize
  cursor: ne-resize
.vue-smart-window__corner_ne
  &:hover
    right: - ($scaleBarSize / 2)
    top: - ($scaleBarSize / 2)
    height: $scaleBarSize
    width: $scaleBarSize
.vue-smart-window__corner_sw
  bottom: - $smallBarSize
  left: - $smallBarSize
  cursor: sw-resize
.vue-smart-window__corner_se
  bottom: - $smallBarSize
  right: - $smallBarSize
  cursor: se-resize
.vue-smart-window__corner_sw
  &:hover
    bottom: - ($scaleBarSize / 2)
    left: - ($scaleBarSize / 2)
.vue-smart-window__corner_se
  &:hover
    bottom: - ($scaleBarSize / 2)
    right: - ($scaleBarSize / 2)

/* control button */
.vue-smart-window__control_buttons
  display: flex
  button
    text-align: center
    vertical-align: middle
    position: relative
    width: 15px
    height: 15px
    line-height: 10px
    padding: 0
    border-radius: 15px
    & + button
      margin-left: 10px
  button.vue-smart-window__close
    background: $red
    &:before
    &:after
      content: ''
      display: block
      position: absolute
      height: 2px
      left: 0
      right: 0
      margin: 0 auto
      border-radius: 2px
      background: $black
    &:after
      top: 6px
      width: 85%
      transform: rotate(45deg)
    &:before
      bottom: 5.5px
      width: 83%
      transform: rotate(-45deg)
  button.vue-smart-window__small
    background: $yellow
    &:after
      content: ''
      display: block
      postion: absolute
      width: 80%
      height: 2px
      left: 0
      right: 0
      margin: 0 auto
      border-radius: 2px
      background: $black 
  button.vue-smart-window__scale
    background: $gleen
    &:before
    &:after
      position: absolute
      display: block
      margin: 0 auto
      width: 1px
      content: ''
      border-right: 3px solid transparent;
      border-bottom: 3px solid $black;
      border-left: 3px solid transparent; 
    &:after
      top: 3px
      right: 1.7px
      transform: rotate(45deg)
    &:before
      bottom: 3px
      left: 1.1px
      transform: rotate(-135deg)
</style>
