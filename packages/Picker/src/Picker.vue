<template>
    <section class="pick-box">
        <div ref="picker" class="pick-box-content">
            <div class="wheel line">
                <div class="wheel" ref="wheel">
                    <div v-for="(item, i) in list" :key="i" :ref="'ref'+i" :style="sty(i)">{{item.label || item}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  /**
   * a 加速度
   * resets 重置picker数组
   *
   */
  import * as utils from 'src/shared'

  export default {
    props: {
      a: Number,
      list: {
        type: Array,
        default: () => []
      },
      index: {
        type: Number,
        default: 0
      },
      resets: {
        type: Array,
        default: () => []
      },
      defaultValue: {
        type: [String, Number],
        default: ''
      },
      circle: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        finger: {
          currentMove: 0
        },
        translateZ: '',
        lastSel: 0,
        lineHeight: 72,
        singleDeg: '',
        value: {},
        fps: 1000 / 60
      }
    },
    created() {
      this.lineHeight = utils.hpx2dp(this.lineHeight)
      this.reset()
    },
    computed: {
      length() {
        return this.list.length
      },
      $circle() {
        return !!(this.list.length > 19)
      },
      defaultIndex() {
        let index = 0
        for (let i = 0; i < this.length; i++) {
          if ((this.list[i].label || this.list[i]) == this.defaultValue) {
            index = i
          }
        }
        return index
      }
    },
    components: {},
    watch: {
      list() {
        this.reset()
        this.$nextTick(() => {
          if (this.resets.includes(this.index)) {
            if (this.length) {
              this.domRemoveClass(this.getDom(this.lastSel), 'sel-d')
              this.lastSel = 0
              this.dom(0)
              this.finger.currentMove = 0
              this.domAddClass(this.getDom(0), 'sel-d')
              // this.emit(this.index, this.list[0])
              this.value = this.list[0]
            } else {
              this.value = {}
            }
          }
        })
      }
    },
    methods: {
      getVal() {
        return this.value
      },
      reset() {
        if (this.list.length < 20) {
          this.singleDeg = 18
        } else {
          this.singleDeg = (this.circle ? 360 : 200) / this.length
        }
        this.translateZ = utils.dp2rem(this.r())
      },
      sty(i) {
        return {transform: `rotateX(-${this.singleDeg * i}deg) translateZ(${this.translateZ})`}
      },
      r() {
        return this.lineHeight / 2 / Math.tan(this.singleDeg / 2 / 180 * Math.PI)
      },
      stopPreventDefault(e) {
        e.stopPropagation()
        e.preventDefault()
      },
      listenerTouchStart(e) {
        this.stopPreventDefault(e)
        this.finger.startY = e.targetTouches[0].pageY
        this.finger.prevMove = this.finger.currentMove
        this.finger.startTime = Date.now()
      },
      dom(i) {
        this.$refs.wheel.style.transform = `rotate3d(1, 0, 0, ${i * this.singleDeg}deg)`
      },
      listenerTouchMove(e) {
        this.stopPreventDefault(e)
        this.finger.currentMove = (this.finger.startY - e.targetTouches[0].pageY) + this.finger.prevMove
        this.dom(this.finger.currentMove / this.lineHeight)
      },
      listenerTouchEnd(e) {
        this.stopPreventDefault(e)
        this.finger.endY = e.changedTouches[0].pageY
        this.finger.endTime = Date.now()
        this.getInertiaDistance()
      },
      getInertiaDistance() {
        const v = (this.finger.startY - this.finger.endY) / (this.finger.endTime - this.finger.startTime)
        const absV = Math.abs(v)
        this.inertia(absV, Math.floor(absV / v), 0)
      },
      domAddClass(el, key) {
        el && el.classList.add(key)
      },
      domRemoveClass(el, key) {
        el && el.classList.remove(key)
      },
      getDom(i) {
        return this.$refs['ref' + i][0]
      },
      emit(index, data) {
        this.$emit('change', {index, data})
        this.value = data
      },
      /**
       * 用户结束滑动，应该慢慢放慢，最终停止。从而需要 a(加速度)
       * @param start 开始速度
       * @param position 速度方向，值: 正负1
       * @param target 结束速度
       */
      inertia(start, position, target) {
        if (start <= target) {
          if (this.circle) {
            this.finger.currentMove %= (this.lineHeight * (this.length - 1))
          } else if (this.finger.currentMove < 0) {
            this.finger.currentMove = 0
          } else if (this.finger.currentMove / this.lineHeight > this.length - 1) {
            this.finger.currentMove = this.lineHeight * (this.length - 1)
          }
          let i = Math.round(this.finger.currentMove / this.lineHeight)
          this.dom(i)
          if (this.lastSel != i) {
            i = i > -1 ? i : i + this.length
            this.domAddClass(this.getDom(i), 'sel-d')
            this.domRemoveClass(this.getDom(this.lastSel), 'sel-d')
            this.lastSel = i
          }
          this.emit(this.index, this.list[i])
          this.finger.prevMove = this.finger.currentMove
          return
        }
        // 这段时间走的位移 S = vt + 1/2at^2;
        // const move = (position * start * (1000 / 60)) + (0.5 * a * (1000 / 60) * (1000 / 60)) + this.finger.currentMove
        let move = (position * start * this.fps) + (0.5 * this.a * this.fps * this.fps) + this.finger.currentMove

        // 根据求末速度公式： v末 = v初 + at
        const newStart = start + this.a * this.fps
        // let moveDeg = (move / lineHeight) * singleDeg
        // 已经到达目标
        if (newStart <= target) {
          this.$refs.wheel.style.transition = 'transform 700ms cubic-bezier(0.19, 1, 0.22, 1)'
        }
        let s = this.list.length * this.lineHeight
        if (!this.circle) {
          if (move >= s) {
            move = s
          } else if (move < -this.lineHeight) {
            move = -this.lineHeight
          }
        }
        this.dom(move / this.lineHeight)
        this.finger.currentMove = move
        window.requestAnimationFrame(() => {
          this.inertia(newStart, position, target)
        })
      }
    },
    mounted() {
      this.$refs.picker.addEventListener('touchstart', this.listenerTouchStart, {passive: false})
      this.$refs.picker.addEventListener('touchmove', this.listenerTouchMove, {passive: false})
      this.$refs.picker.addEventListener('touchend', this.listenerTouchEnd, {passive: false})
      this.domAddClass(this.getDom(this.defaultIndex), 'sel-d')
      this.dom(this.defaultIndex)
      this.finger.currentMove = this.lineHeight * this.defaultIndex
      this.lastSel = this.defaultIndex
      this.value = this.list[this.defaultIndex]
    },
    updated() {
    },
    beforeDestroy() {
      this.$refs.picker.removeEventListener('touchstart', this.listenerTouchStart)
      this.$refs.picker.removeEventListener('touchmove', this.listenerTouchMove)
      this.$refs.picker.removeEventListener('touchend', this.listenerTouchEnd)
    }
  }
</script>

<style lang='scss' scoped>
    .pick-box {
        height: 500px;
        z-index: 999;
        flex: 1;
        .pick-box-content {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            .line {
                box-shadow: inset 0 -1px 0 0 #CDCDCD, inset 0 1px 0 0 #CDCDCD;
                position: absolute;
                transform: translate3d(0, -50%, 0);
                left: 0;
                top: 50%;
                width: 100%;
                height: 72px;
                .wheel {
                    width: 100%;
                    height: 72px;
                    transform-style: preserve-3d;
                    transform: translate3d(0, 0, 0);
                    position: absolute;
                    left: 0;
                    top: 0;
                    div {
                        height: 72px;
                        line-height: 72px;
                        position: absolute;
                        width: 100%;
                        backface-visibility: hidden;
                        font-family: PingFang-SC-Regular;
                        font-size: 38px;
                        color: #B3B3B3;
                        letter-spacing: -0.17px;
                        text-align: center;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    .sel-d {
                        font-family: PingFang-SC-Regular;
                        font-size: 42px;
                        color: #52B992;
                        letter-spacing: -0.18px;
                        text-align: center;
                    }
                }
            }
        }
    }

</style>
