!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["vue-browserlike-window"]=n():e["vue-browserlike-window"]=n()}(this,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var r=t(1);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(4).default)("0a0aacba",r,!1,{})},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\np {\n  margin: 0;\n}\n#vue-browserlike-window {\n  min-width: 120px;\n  min-height: 40px;\n  position: relative;\n  overflow: scroll;\n  border-radius: 5px;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  box-shadow: 0 0 25px rgba(0,0,0,0.05);\n}\n.vue-browserlike-window__navi_bar {\n  position: relative;\n  display: flex;\n  border-radius: 5px 5px 0 0;\n  width: 100%;\n  height: 40px;\n  margin: 0 auto;\n  padding: 0 0px 0 10px;\n  box-sizing: border-box;\n  background: #eee;\n  cursor: move;\n}\nul.vue-browserlike-window__tab_headers {\n  position: relative;\n  bottom: -1px;\n  align-self: flex-end;\n  display: flex;\n  align-items: flex-end;\n  padding-left: 0;\n  height: 40px;\n  margin: 0;\n  margin-left: 20px;\n  background: #eee;\n}\nul.vue-browserlike-window__tab_headers li {\n  position: relative;\n  display: flex;\n  align-self: flex-end;\n  z-index: 100;\n  border-bottom: none;\n  min-width: 50px;\n  padding: 0;\n  margin-top: 10px;\n  height: 30px;\n  box-sizing: border-box;\n  background: #eee;\n  border-radius: 0 0 5px 5px;\n}\nul.vue-browserlike-window__tab_headers li.active {\n  background: #fff;\n  border-radius: 5px 5px 0 0;\n}\n.vue-browserlike-window__handle_dot,\n.vue-browserlike-window__hendle span:nth-child(1):after,\n.vue-browserlike-window__hendle span:nth-child(1):before,\n.vue-browserlike-window__hendle span:nth-child(2):after,\n.vue-browserlike-window__hendle span:nth-child(2):before,\n.vue-browserlike-window__hendle span:nth-child(3):after,\n.vue-browserlike-window__hendle span:nth-child(3):before {\n  display: block;\n  position: absolute;\n  content: '.';\n  font-size: 10px;\n  line-height: 0;\n  height: 0;\n}\n.vue-browserlike-window__hendle {\n  color: #ddd;\n  font-weight: bold;\n  display: block;\n  width: 10px;\n  height: 70%;\n  padding: 5px 10px 0 5px;\n}\n.vue-browserlike-window__hendle span {\n  display: block;\n  height: 33.333%;\n  position: relative;\n}\n.vue-browserlike-window__hendle span:nth-child(1):after {\n  top: 0;\n  left: 0;\n}\n.vue-browserlike-window__hendle span:nth-child(1):before {\n  top: 0;\n  right: 0;\n}\n.vue-browserlike-window__hendle span:nth-child(2):after {\n  top: 0;\n  left: 0;\n}\n.vue-browserlike-window__hendle span:nth-child(2):before {\n  top: 0;\n  right: 0;\n}\n.vue-browserlike-window__hendle span:nth-child(3):after {\n  top: 0;\n  left: 0;\n}\n.vue-browserlike-window__hendle span:nth-child(3):before {\n  top: 0;\n  right: 0;\n}\n.vue-browserlike-window__tab_name {\n  width: calc(100% - 10px);\n  overflow: hidden;\n}\n.vue-browserlike-window__drower_button {\n  position: absolute;\n  display: block;\n  z-index: 300;\n  border: none;\n  width: 30px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 20px;\n  padding: 0;\n  right: 0;\n  top: 0;\n  background: #eee;\n}\n.vue-browserlike-window__drower_button:hover {\n  background: #ddd;\n}\n.vue-browserlike-window__drower_button:focus {\n  outline: 0;\n}\n.vue-browserlike-window__drower_button span {\n  display: block;\n  cursor: pointer;\n  transition: transform 0.1s linear;\n}\n.vue-browserlike-window__drawer {\n  position: absolute;\n  display: block;\n  z-index: 301;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0,0,0,0.4);\n  width: 100px;\n  right: 0;\n  top: 40px;\n  padding: 10px;\n  background: #fff;\n}\n.vue-browserlike-window__drawer li {\n  overflow: hidden;\n}\n.vue-browserlike-window__drawer li:hover {\n  background: #eee;\n  cursor: pointer;\n}\n.vue-browserlike-window__control_buttons {\n  display: flex;\n  margin-top: 10px;\n}\n.vue-browserlike-window__control_buttons button {\n  text-align: center;\n  vertical-align: middle;\n  position: relative;\n  width: 15px;\n  height: 15px;\n  line-height: 10px;\n  padding: 0;\n  border-radius: 15px;\n  cursor: pointer;\n}\n.vue-browserlike-window__control_buttons button + button {\n  margin-left: 10px;\n}\n.vue-browserlike-window__control_buttons button:focus {\n  outline: 0;\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__close {\n  background: #f54444;\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__close:before,\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__close:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 2px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 2px;\n  background: rgba(0,0,0,0.4);\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__close:after {\n  top: 6px;\n  width: 85%;\n  transform: rotate(45deg);\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__close:before {\n  bottom: 5.5px;\n  width: 83%;\n  transform: rotate(-45deg);\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__small {\n  background: #fdb525;\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__small:after {\n  content: '';\n  display: block;\n  postion: absolute;\n  width: 80%;\n  height: 2px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 2px;\n  background: rgba(0,0,0,0.4);\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__scale {\n  background: #26bc2e;\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__scale:before,\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__scale:after {\n  position: absolute;\n  display: block;\n  margin: 0 auto;\n  width: 1px;\n  content: '';\n  border-right: 3px solid transparent;\n  border-bottom: 3px solid rgba(0,0,0,0.4);\n  border-left: 3px solid transparent;\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__scale:after {\n  top: 3px;\n  right: 1.7px;\n  transform: rotate(45deg);\n}\n.vue-browserlike-window__control_buttons button.vue-browserlike-window__scale:before {\n  bottom: 3px;\n  left: 1.1px;\n  transform: rotate(-135deg);\n}\n.vue-browserlike-window__top_bar,\n.vue-browserlike-window__under_bar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 10px;\n  margin: 0 auto;\n  cursor: row-resize;\n}\n.vue-browserlike-window__top_bar {\n  top: -10px;\n}\n.vue-browserlike-window__top_bar:hover {\n  top: -100px;\n  height: 200px;\n}\n.vue-browserlike-window__top_bar {\n  bottom: 0;\n}\n.vue-browserlike-window__under_bar:hover {\n  height: 200px;\n  bottom: -100px;\n}\n.vue-browserlike-window__left_bar,\n.vue-browserlike-window__right_bar {\n  position: absolute;\n  top: 0;\n  width: 10px;\n  cursor: col-resize;\n}\n.vue-browserlike-window__left_bar {\n  left: -10px;\n}\n.vue-browserlike-window__right_bar {\n  right: -10px;\n}\n.vue-browserlike-window__left_bar:hover {\n  width: 200px;\n  left: -100px;\n}\n.vue-browserlike-window__right_bar:hover {\n  width: 200px;\n  right: -100px;\n}\n.vue-browserlike-window__corner_ne,\n.vue-browserlike-window__corner_nw,\n.vue-browserlike-window__corner_se,\n.vue-browserlike-window__corner_sw {\n  position: absolute;\n  z-index: 200;\n  width: 10px;\n  height: 10px;\n}\n.vue-browserlike-window__corner_nw:hover,\n.vue-browserlike-window__corner_ne:hover,\n.vue-browserlike-window__corner_se:hover,\n.vue-browserlike-window__corner_sw:hover {\n  height: 200px;\n  width: 200px;\n}\n.vue-browserlike-window__corner_nw {\n  top: -10px;\n  left: -10px;\n  cursor: nw-resize;\n}\n.vue-browserlike-window__corner_nw:hover {\n  left: -100px;\n  top: -100px;\n  height: 200px;\n  width: 200px;\n}\n.vue-browserlike-window__corner_ne {\n  top: -10px;\n  right: -10px;\n  cursor: ne-resize;\n}\n.vue-browserlike-window__corner_ne:hover {\n  right: -100px;\n  top: -100px;\n  height: 200px;\n  width: 200px;\n}\n.vue-browserlike-window__corner_sw {\n  bottom: -10px;\n  left: -10px;\n  cursor: sw-resize;\n}\n.vue-browserlike-window__corner_se {\n  bottom: -10px;\n  right: -10px;\n  cursor: se-resize;\n}\n.vue-browserlike-window__corner_sw:hover {\n  bottom: -100px;\n  left: -100px;\n}\n.vue-browserlike-window__corner_se:hover {\n  bottom: -100px;\n  right: -100px;\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[t].concat(o).concat([i]).join("\n")}var s;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);var r={props:{value:{type:Boolean,default:!1},height:{type:Number,default:400},width:{type:Number,default:400},active:{type:Number,required:!0,default:0},top:{type:Number,default:100},left:{type:Number,default:100},mode:{type:String,default:""},tabs:{type:Array,default:()=>[]}},data(){return{dragStart:{},startPositoin:{},startSize:{},draggable:!1,tabDraggable:!1,activeTab:0,activeContent:0,beforeTab:0,currentTab:0,resizable:!0,x:0,y:0,open:!0,sizeX:this.width,sizeY:this.height,cache:{sizeY:this.height,sizeX:this.width,x:0,y:0},isTab:!1,items:[],isMin:!1,isMax:!1,isDrawerOpen:!1,tabHeaders:[]}},computed:{tabWidth:function(){return this.tabHeaders.length,(this.sizeX-105)/this.tabHeaders.length},isTabMenu:function(){return this.sizeX<=50*this.tabHeaders.length+95}},watch:{value:function(e){this.open=e}},created(){this.open=this.value,this.tabHeaders=this.tabs.map((e,n)=>({name:e,content:n})),this.x=this.top,this.y=this.left,"tab"===this.mode&&(this.isTab=!0,this.activeTab=this.active),this.createTabSlots()},beforeUpdate(){this.createTabSlots()},methods:{dragstart:function(e){this.isMax||(this.dragStart={x:e.pageX,y:e.pageY},this.startPosition={x:this.x,y:this.y},this.startSize={h:this.sizeY,w:this.sizeX},this.draggable=!0)},dragend:function(e){this.isMax||(this.draggable=!1)},dragmove:function(e){if(!this.draggable||this.isMax)return;const n=this.getMove(e.pageX,e.pageY);this.x=this.startPosition.x+n.x,this.y=this.startPosition.y+n.y},scale:function(e,n){if(!this.draggable||!this.resizable)return;const t=this.getMove(e.pageX,e.pageY);switch(n){case"n":if(this.sizeY=this.startSize.h-t.y,this.sizeY<40)return;this.y=this.startPosition.y+t.y;break;case"s":this.sizeY=this.startSize.h+t.y;break;case"e":this.sizeX=this.startSize.w+t.x;break;case"w":if(this.startSize.w-t.x<120)return;this.x=this.startPosition.x+t.x,this.sizeX=this.startSize.w-t.x;break;case"ne":this.sizeY=this.startSize.h-t.y,this.sizeY>40&&(this.y=this.startPosition.y+t.y),this.startSize.w+t.x>120&&(this.sizeX=this.startSize.w+t.x);break;case"nw":this.sizeY=this.startSize.h-t.y,this.sizeY>40&&(this.y=this.startPosition.y+t.y),this.sizeX=this.startSize.w-t.x,this.sizeX>120&&(this.x=this.startPosition.x+t.x);break;case"se":this.sizeY=this.startSize.h+t.y,this.sizeX=this.startSize.w+t.x;break;case"sw":this.sizeX=this.startSize.w-t.x,this.sizeX>120&&(this.x=this.startPosition.x+t.x),this.sizeY=this.startSize.h+t.y}},getMove:function(e,n){const{x:t,y:r}=this.dragStart;return{x:e-t,y:n-r}},createTabSlots:function(){if("tab"===this.mode&&!this.$slots.tabs){let e=0;const n=this.$slots.default.filter(n=>{if(n.tag&&n.tag.match(/VbWindowItem/g))return n.componentOptions.propsData={index:e},e++,n});this.$slots.tabs=n}},tabDragStart:function(e,n){this.tabDraggable=!0,this.beforaTab=n},tabDragOver:function(e,n){this.currentTab=n},tabDragEnd:function(e,n){this.tabDraggable=!1,this.tabHeaders[this.beforaTab]=[this.tabHeaders[this.currentTab],this.tabHeaders[this.currentTab]=this.tabHeaders[this.beforaTab]][0],this.activeTab=this.currentTab,this.activeContent=this.tabHeaders[this.currentTab].content},caching(){this.cache.width=this.sizeX,this.cache.height=this.sizeY,this.cache.x=this.x,this.cache.y=this.y},applyCache(){this.sizeX=this.cache.width,this.sizeY=this.cache.height,this.x=this.cache.x,this.y=this.cache.y},clickMinButton(){this.isMin?(this.isMin=!1,this.isMax=!1,this.applyCache()):(this.caching(),this.sizeX=0,this.sizeY=0,this.isMin=!0,this.isMax=!1,this.resizable=!0)},clickMaxButton(){this.isMax?(this.isMin=!1,this.isMax=!1,this.applyCache(),this.resizable=!0):(this.caching(),this.isMax=!0,this.isMin=!1,this.resizable=!1,this.sizeX=100,this.sizeY=100,this.x=0,this.y=0)},clickCloseButton(){this.open=!1,this.$emit("close")},clickTabMenu(e){this.activeTab=e,this.activeContent=this.tabHeaders[this.activeTab].content,this.isDrawerOpen=!1},toggleDrower(e){this.isDrawerOpen=!this.isDrawerOpen,e.stopPropagation()}}},i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.open?t("div",{style:{position:"absolute",transform:"translate("+e.x+"px, "+e.y+"px)",background:"#fff"},on:{click:function(n){e.isDrawerOpen=!1}}},[t("div",{staticClass:"vue-browserlike-window__corner_nw",on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"nw")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}}),e._v(" "),t("div",{staticClass:"vue-browserlike-window__top_bar",on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"n")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}}),e._v(" "),t("div",{staticClass:"vue-browserlike-window__corner_ne",on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"ne")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}}),e._v(" "),t("div",{style:{height:e.sizeY+(e.isMax?"vh":"px"),width:e.sizeX+(e.isMax?"vw":"px"),margin:"0 auto",background:"#fff"},attrs:{id:"vue-browserlike-window"}},[t("div",{staticClass:"vue-browserlike-window__navi_bar",on:{mousedown:function(n){return e.dragstart(n)},mouseup:function(n){return e.dragend(n)},mousemove:function(n){return e.dragmove(n)},mouseout:function(n){return e.dragend(n)},dblclick:function(n){return n.target!==n.currentTarget?null:e.clickMaxButton()}}},[t("div",{staticClass:"vue-browserlike-window__control_buttons"},[t("button",{staticClass:"vue-browserlike-window__close",on:{click:function(n){return n.stopPropagation(),e.clickCloseButton()}}}),e._v(" "),t("button",{staticClass:"vue-browserlike-window__small",on:{click:function(n){return n.stopPropagation(),e.clickMinButton()}}}),e._v(" "),t("button",{staticClass:"vue-browserlike-window__scale",on:{click:function(n){return n.stopPropagation(),e.clickMaxButton()}}})]),e._v(" "),e.isTab?t("ul",{staticClass:"vue-browserlike-window__tab_headers"},e._l(e.tabHeaders,(function(n,r){return t("li",{key:n+r,class:{active:e.activeTab===r},style:{width:e.isMax?100/e.tabHeaders.length+"vw":e.tabWidth+"px"},attrs:{draggable:e.tabDraggable},on:{click:function(n){return e.clickTabMenu(r)},dragover:function(n){return e.tabDragOver(n,r)},dragend:function(n){return e.tabDragEnd(n,r)}}},[t("p",{staticClass:"vue-browserlike-window__hendle",attrs:{"data-tab-index":r},on:{mousedown:function(n){return e.tabDragStart(n,r)}}},[t("span"),e._v(" "),t("span"),e._v(" "),t("span")]),e._v(" "),t("p",{staticClass:"vue-browserlike-window__tab_name"},[e._v("\n            "+e._s(n.name)+"\n          ")])])})),0):e._e(),e._v(" "),e.isTabMenu?t("button",{staticClass:"vue-browserlike-window__drower_button",on:{click:function(n){return e.toggleDrower(n)}}},[t("span",{style:{transform:e.isDrawerOpen?"rotate(90deg)":"none"}},[e._v("▸")])]):e._e(),e._v(" "),e.isDrawerOpen?t("ul",{staticClass:"vue-browserlike-window__drawer"},e._l(e.tabHeaders,(function(n,r){return t("li",{key:n+r,on:{click:function(n){return e.clickTabMenu(r)}}},[e._v("\n          "+e._s(n.name)+"\n        ")])})),0):e._e()]),e._v(" "),e.isTab?t("div",[e._t("tabs")],2):t("div",[e._t("default")],2)]),e._v(" "),t("div",{staticClass:"vue-browserlike-window__left_bar",style:{height:e.sizeY+(e.isMax?"vh":"px")},on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"w")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}}),e._v(" "),t("div",{staticClass:"vue-browserlike-window__right_bar",style:{height:e.sizeY+(e.isMax?"vh":"px")},on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"e")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}}),e._v(" "),t("div",{staticClass:"vue-browserlike-window__corner_sw",on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"sw")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}}),e._v(" "),t("div",{staticClass:"vue-browserlike-window__under_bar",on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"s")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}}),e._v(" "),t("div",{staticClass:"vue-browserlike-window__corner_se",on:{mousedown:function(n){return e.dragstart(n)},mousemove:function(n){return e.scale(n,"se")},mouseup:function(n){return e.dragend(n)},mouseout:function(n){return e.dragend(n)}}})]):e._e()};function o(e,n,t,r,i,o,s,a){var u=typeof(e=e||{}).default;"object"!==u&&"function"!==u||(e=e.default);var d,l="function"==typeof e?e.options:e;if(n&&(l.render=n,l.staticRenderFns=t,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o),s?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=d):i&&(d=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,n){return d.call(n),c(e,n)}}else{var w=l.beforeCreate;l.beforeCreate=w?[].concat(w,d):[d]}return{exports:e,options:l}}i._withStripped=!0;var s=!1;var a=o(r,i,[],!1,(function(e){s||t(0)}),null,null);a.options.__file="src/components/vue-browserlike-window.vue";var u=a.exports,d={name:"VbWindowItem",props:{index:{type:Number,required:!0}},data:()=>({}),computed:{open(){return this.index===this.$parent.activeContent}}},l=function(){var e=this.$createElement,n=this._self._c||e;return this.open?n("div",{staticClass:"vue-browserlike-window-item"},[this._t("default")],2):this._e()};l._withStripped=!0;var c=o(d,l,[],!1,null,null,null);c.options.__file="src/components/vue-browserlike-window-item.vue";var w=c.exports;n.default={install(e){e.component("vb-window",u),e.component("vb-window-item",w)}}},function(e,n,t){"use strict";function r(e,n){for(var t=[],r={},i=0;i<n.length;i++){var o=n[i],s=o[0],a={id:e+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):t.push(r[s]={id:s,parts:[a]})}return t}t.r(n),t.d(n,"default",(function(){return b}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=i&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,d=!1,l=function(){},c=null,w="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function b(e,n,t,i){d=t,c=i||{};var s=r(e,n);return p(s),function(n){for(var t=[],i=0;i<s.length;i++){var a=s[i];(u=o[a.id]).refs--,t.push(u)}n?p(s=r(e,n)):s=[];for(i=0;i<t.length;i++){var u;if(0===(u=t[i]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete o[u.id]}}}}function p(e){for(var n=0;n<e.length;n++){var t=e[n],r=o[t.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](t.parts[i]);for(;i<t.parts.length;i++)r.parts.push(f(t.parts[i]));r.parts.length>t.parts.length&&(r.parts.length=t.parts.length)}else{var s=[];for(i=0;i<t.parts.length;i++)s.push(f(t.parts[i]));o[t.id]={id:t.id,refs:1,parts:s}}}}function _(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function f(e){var n,t,r=document.querySelector("style["+w+'~="'+e.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(h){var i=u++;r=a||(a=_()),n=x.bind(null,r,i,!1),t=x.bind(null,r,i,!0)}else r=_(),n=m.bind(null,r),t=function(){r.parentNode.removeChild(r)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else t()}}var v,g=(v=[],function(e,n){return v[e]=n,v.filter(Boolean).join("\n")});function x(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(n,i);else{var o=document.createTextNode(i),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(o,s[n]):e.appendChild(o)}}function m(e,n){var t=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),c.ssrId&&e.setAttribute(w,n.id),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}])}));