<template>
    <section class="wx-swipe" :style="{height: height}">
        <div ref="swipeContent" class="wx-swipe-content" :style="swipeContentSty">
            <slot></slot>
        </div>
        <slot name="indicator" v-if="showIndicator">
            <div class="wx-swipe-indicator">
                <div v-for="(item, i) in dots" :key="i" class="wx-swipe-indicator-dot"
                     :style="{background: num===i?indicatorColor:defaultIndicatorColor}"></div>
            </div>
        </slot>
    </section>
</template>

<script>
  /**
   *   previousMargin 第一个item距离上一个的距离  需要和UI同步
   *   nextMargin 距离下一个的距离
   *   circular
   *   autoplay 自动轮播
   *   interval 时间间隔
   *   indicatorColor 圆点颜色
   *   defaultIndicatorColor 默认
   *   showIndicator  圆点
   */
  import {wpx2rem, hpx2rem, dp2rem} from 'src/shared'

  export default {
    name: 'WxSwipe',
    props: {
      previousMargin: {
        type: Number,
        default: 0
      },
      nextMargin: {
        type: Number,
        default: 0
      },
      circular: {
        type: Boolean,
        default: false
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      interval: {
        type: Number,
        default: 4000
      },
      indicatorColor: {
        type: String,
        default: '#FC7303'
      },
      defaultIndicatorColor: {
        type: String,
        default: 'white'
      },
      showIndicator: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        num: 0,
        height: 0,
        left: 0,
        startX: 0,
        currentX: 0,
        elCount: 0,
        timer: null,
        dots: []
      }
    },
    computed: {
      swipeContentSty() {
        return {left: wpx2rem(this.left)}
      }
    },
    created() {
    },
    methods: {
      setLeftDis() {
        this.left = -((750 - this.previousMargin * 2 + this.nextMargin) * this.num)
        this.$emit('change', this.num)
      },
      clearInterval() {
        this.autoplay && this.timer && clearInterval(this.timer)
        this.timer = null
      },
      setInterval() {
        if (this.autoplay) {
          this.timer = setInterval(() => {
            this.num === this.elCount - 1 ? this.num = 0 : this.num++
            this.setLeftDis()
          }, this.interval)
        }
      },
      touchstart(e) {
        // e.stopPropagation()
        // e.preventDefault()
        this.clearInterval()
        this.currentX = this.startX = e.targetTouches[0].pageX
      },
      touchmove(e) {
        // e.stopPropagation()
        // e.preventDefault()
        const move = e.targetTouches[0].pageX - this.currentX
        this.currentX = e.targetTouches[0].pageX
        if (this.circular) {
        } else {
          if (!(this.elCount - 1 === this.num && move < 0) && this.elCount > this.num && !(this.left === 0 && move > 0)) {
            this.left += move
          }
        }
      },
      touchend(e) {
        // e.stopPropagation()
        // e.preventDefault()
        const move = e.changedTouches[0].pageX - this.startX
        if (Math.abs(move) > 15) {
          if (this.circular) {
          } else {
            if (!(this.elCount - 1 === this.num && move < 0) && !(this.left === 0 && move > 0)) {
              this.num = move > 0 ? this.num - 1 : this.num + 1
              this.setLeftDis()
            }
          }
        }
        this.setInterval()
      },
      initHeight() {
        this.elCount = this.$refs.swipeContent.children.length
        if (this.elCount !== this.dots.length) {
          this.height = dp2rem(this.$refs.swipeContent.offsetHeight || 0)
          this.dots.length = 0
          for (let i = 0; i < this.elCount; i++) {
            this.dots.push(i)
          }
        }
      }
    },
    mounted() {
      this.initHeight()
      let element = this.$el
      element.addEventListener('touchstart', this.touchstart, {passive: true})
      element.addEventListener('touchmove', this.touchmove, {passive: true})
      element.addEventListener('touchend', this.touchend, {passive: true})
      this.autoplay && this.setInterval()
    },
    updated() {
      this.initHeight()
    },
    destroyed() {
      this.clearInterval()
    }
  }
</script>

<style lang='scss' scoped>
    .wx-swipe {
        width: 750px;
        overflow-x: hidden;
        position: relative;
        .wx-swipe-content {
            position: absolute;
            transition: left 200ms;
            display: flex;
        }
        .wx-swipe-indicator {
            position: absolute;
            bottom: 24px;
            left: 0;
            display: flex;
            justify-content: center;
            width: 750px;
            .wx-swipe-indicator-dot {
                background: white;
                border-radius: 6px;
                width: 12px;
                height: 12px;
                margin-right: 12px;
            }
        }
    }
</style>
