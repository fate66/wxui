<template>
    <div :class="['tab-item', isActive&&'sel-tab-item']" :style="tabSty" @click="selTb">
        {{data.label}}
    </div>
</template>

<script>
  /**
   *  tabs 数据源 必须是对象 显示的文本是label属性
   *  lineWidth 当内容为平分时 线的宽度
   *  lineHeight 线的高度
   *  lineColor 线的颜色
   *  tabWidth 指定tab的宽度，注意：宽度与线宽相同
   *  tabMarginLeft tab距离左边的距离 优先级是 数据源 > props
   *  value 默认选中的下标
   */
  import {wpx2rem} from 'src/shared'

  export default {
    props: {
      data: {
        type: Object,
        default: () => {
        }
      },
      defaultColor: {
        type: String,
        color: '#353535'
      },
      activeColor: {
        type: String,
        color: '#4FB58E'
      },
      isActive: {
        type: Boolean,
        default: false
      },
      average: {
        type: Boolean,
        default: true
      },
      tabWidth: {
        type: Number,
        default: 0
      },
      tabMarginLeft: {
        type: Number,
        default: 0
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
      }
    },
    computed: {
      tabSty() {
        let width, marginLeft, flex, marginRight, color, data
        color = this.isActive ? this.activeColor : this.defaultColor
        if (!this.average) {
          width = wpx2rem(this.data.tabWidth || this.tabWidth)
          marginLeft = wpx2rem(this.data.tabMarginLeft || this.tabMarginLeft)
          if (this.data.tabMarginRight) marginRight = wpx2rem(this.data.tabMarginRight)
        } else {
          flex = 1
        }
        if (this.data.tabWidth || this.tabWidth) {
          data = {width, marginLeft, flex, marginRight, color}
        } else {
          data = {marginLeft, flex, marginRight, color}
        }
        return data
      }
    },
    created() {
    },
    components: {},
    methods: {
      selTb() {
        // this.lineRig = this.lineWidthPX * (index + 1)
        this.$emit('click', this.index, this.data)
      }
    }
  }
</script>

<style lang='scss' scoped>
    .tab-item {
        text-align: center;
        font-family: PingFang-SC-Regular;
        font-size: 30px;
        letter-spacing: 0;
        text-align: center;
        line-height: 88px;
        height: 88px;
        display: inline-block;
    }

    .sel-tab-item {
        font-family: PingFang-SC-Medium;
    }
</style>
