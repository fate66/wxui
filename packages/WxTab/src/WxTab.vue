<template>
    <section :class="['wx-tab', !average&&'wx-scroll-tab']">
        <wx-tab-item v-for="(item, i) in tabs"
                     :data="item"
                     :key="i"
                     :isActive="selIndex===i"
                     :average="average"
                     :tabMarginLeft="tabMarginLeft"
                     :index="i"
                     :tabWidth="tabWidth"
                     :ref="`tabItem${i}`"
                     v-bind="$attrs"
                     @click="click"></wx-tab-item>
        <div class="scroll" :style="scrolSty" v-if="showLine">
            <div class="tab-line" :style="lineSty">
                <span class="line-item" :style="lineItemSty" v-if="lineWidth"></span>
            </div>
        </div>
    </section>
</template>

<script>
  /**
   *  tabs 数据源 必须是对象 显示的文本是label属性
   *  lineWidth 线的宽度 默认是tab-item的宽度
   *  lineHeight 线的高度
   *  lineColor 线的颜色
   *  tabWidth 指定tab的宽度，注意：宽度与线宽相同
   *  tabMarginLeft tab距离左边的距离 优先级是 数据源 > props
   *  value 默认选中的下标
   *  defaultColor 字体默认颜色
   *  activeColor 字体选中颜色
   *  tabMarginRight 最后一个tab-item距离右边的距离
   */
  import WxTabItem from './WxTabItem'
  import {wpx2rem, hpx2rem, wdp2px, log} from 'src/shared'

  export default {
    name: 'WxTab',
    props: {
      tabs: {
        type: Array,
        default: () => []
      },
      lineWidth: {
        type: Number,
        default: 0
      },
      lineHeight: {
        type: Number,
        default: 4
      },
      lineColor: {
        type: String,
        default: '#4FB58E'
      },
      tabWidth: {
        type: Number,
        default: 0
      },
      tabMarginLeft: {
        type: Number,
        default: 0
      },
      value: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        selIndex: this.value,
        innerSumWidth: 0,
        showLine: false
      }
    },
    computed: {
      linePont() {
        return ((this.sumWidth - this.lineRig) / this.sumWidth * 100) + '%'
      },
      scrolSty() {
        return {
          width: wpx2rem(this.sumWidth),
          height: hpx2rem(this.lineHeight)
        }
      },
      autoWidth() {
        let f = !this.tabWidth
        for (let item of this.tabs) {
          if (!item.tabWidth) {
            f = true
          }
        }
        return f
      },
      sumWidth() {
        let w = 0
        if (this.average) {
          w = 750
        } else {
          for (let item of this.tabs) {
            w += item.tabWidth || this.tabWidth
            w += item.tabMarginLeft || this.tabMarginLeft
          }
          this.autoWidth && (w = this.innerSumWidth)
          if (this.tabs.pop.tabMarginRight) w += this.tabs.pop.tabMarginRight
        }
        return w
      },
      lineWidthPX() {
        return 750 / this.tabs.length
      },
      lineItemSty() {
        return {
          width: wpx2rem(this.lineWidth),
          background: this.lineColor
        }
      },
      lineSty() {
        let width
        if (this.average) {
          width = this.lineWidthPX
        } else {
          width = this.tabs[this.selIndex].tabWidth || this.tabWidth
          width == 0 && (this.$refs[`tabItem${this.selIndex}`] && (width = wdp2px(this.$refs[`tabItem${this.selIndex}`][0].$el.offsetWidth)))
        }
        return {
          width: wpx2rem(width),
          right: this.linePont,
          height: hpx2rem(this.lineHeight),
          background: this.lineWidth ? 'transparent' : this.lineColor
        }
      },
      lineRig() {
        if (this.average) {
          return (750 / this.tabs.length) * (this.selIndex + 1)
        } else {
          let w = 0
          this.tabs.forEach((item, i) => {
            if (i <= this.selIndex) {
              w += this.autoWidth ? wdp2px(this.$refs[`tabItem${i}`][0].$el.offsetWidth) : item.tabWidth || this.tabWidth
              w += item.tabMarginLeft || this.tabMarginLeft
            }
          })
          return w
        }
      },
      average() {
        return !(this.tabMarginLeft || this.tabWidth)
      }
    },
    created() {
    },
    mounted() {
      this.tabUd()
    },
    components: {WxTabItem},
    methods: {
      click(index, data) {
        if (this.selIndex === index) return false
        this.selIndex = index
        this.$emit('input', index)
        this.$emit('click', data, index)
      },
      tabDomW() {
        let w = 0
        for (let i = 0; i < this.tabs.length; i++) {
          w += wdp2px(this.$refs[`tabItem${i}`][0].$el.offsetWidth)
          w += this.tabs[i].tabMarginLeft || this.tabMarginLeft
        }
        this.innerSumWidth = w
        this.showLine = true
        log(this.innerSumWidth, 'this._sumWidth')
      },
      tabUd() {
        this.$refs[`tabItem${this.tabs.length - 1}`] && this.tabDomW()
      }
    }
  }
</script>

<style lang='scss' scoped>
    .wx-tab {
        display: flex;
        width: 750px;
        height: 88px;
        position: relative;
        overflow-x: auto;
        /*box-sizing: border-box;*/
        .tab-item {
            text-align: center;
            font-family: PingFang-SC-Regular;
            font-size: 30px;
            color: #353535;
            letter-spacing: 0;
            text-align: center;
            line-height: 88px;
            height: 88px;
            display: inline-block;
        }
        .sel-tab-item {
            color: #4FB58E;
            font-family: PingFang-SC-Medium;
        }
        .scroll {
            position: absolute;
            bottom: 0;
            left: 0;
            .tab-line {
                height: 4px;
                position: absolute;
                bottom: 0;
                transition: right 200ms;
                text-align: center;
                line-height: 0;
                font-size: 0;
                display: flex;
                justify-content: center;
                .line-item {
                    height: 100%;
                    display: inline-block;
                }
            }
        }
        &::-webkit-scrollbar {
            display: none
        }
    }

    .wx-scroll-tab {
        display: block;
        white-space: nowrap;
    }
</style>
