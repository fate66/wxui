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
                     v-bind="$attrs"
                     @click="click"></wx-tab-item>
        <div class="scroll" :style="scrolSty">
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
  import {wpx2rem, hpx2rem} from 'src/shared'

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
        selIndex: this.value
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
      sumWidth() {
        let w = 0
        if (this.average) {
          w = 750
        } else {
          for (let item of this.tabs) {
            w += item.tabWidth || this.tabWidth
            w += item.tabMarginLeft || this.tabMarginLeft
          }
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
              w += item.tabWidth || this.tabWidth
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
    components: {WxTabItem},
    methods: {
      click(index, data) {
        if (this.selIndex === index) return false
        this.selIndex = index
        this.$emit('input', index)
        this.$emit('click', data, index)
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
    }

    .wx-scroll-tab {
        display: block;
        white-space: nowrap;
    }
</style>
