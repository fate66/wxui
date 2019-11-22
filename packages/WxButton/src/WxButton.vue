<template>
    <div class="wx-btn" :style="btnSY" @click="clickBtn">
        <slot></slot>
    </div>
</template>

<script>
  import {wpx2rem, hpx2rem} from 'src/shared'

  export default {
    name: 'WxButton',
    props: {
      background: {
        type: String,
        default: '#52B992'
      },
      width: {
        type: Number,
        default: 670
      },
      marginTop: {
        type: Number,
        default: 50
      },
      borderRadius: {
        type: Number,
        default: 12
      },
      opacity: {
        type: Number,
        default: 1
      }
    },
    computed: {
      btnCls() {
        return ['btn']
      },
      btnSY() {
        return {
          marginTop: hpx2rem(this.marginTop),
          background: this.background,
          width: wpx2rem(this.width),
          borderRadius: wpx2rem(this.borderRadius),
          opacity: this.opacity
        }
      }
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {
      clickBtn() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang='scss' scoped>
    .wx-btn {
        margin: 0 auto;
        ont-family: PingFang-SC-Regular;
        font-size: 34px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        height: 88px;
        line-height: 88px;
    }
</style>
