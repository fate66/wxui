<template>
    <div :class="['wx-cell-box', !borderBottom&&'no-border-bottom', borderTop&&'border-top']" @click="clickCell">
        <div class="label">
            <slot name="label">
                <p class="cell-label">{{label}}</p>
            </slot>
            <slot name="icon"></slot>
        </div>
        <slot name="value">
            <div class="cell-value">
                {{value}}
                <img v-if="link" src="../../../src/assets/img/right-arrow.png"/>
            </div>
        </slot>
    </div>
</template>

<script>
  /**
   * label: 标题
   * value： 值
   * solt-label：替换label
   * solt-icon: label后面追加
   */

  export default {
    name: 'WxCell',
    props: {
      label: {},
      value: {},
      link: {
        type: Boolean,
        default: true
      },
      borderBottom: {
        type: Boolean,
        default: true
      },
      borderTop: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      // rwh() {
      //   let w = this.$utils.widthpx2rem(this.width)
      //   return w.toFixed(5) + 'rem'
      // }
    },
    data() {
      return {}
    },
    created() {
    },
    components: {},
    methods: {
      clickCell() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang='scss' scoped>

    .wx-cell-box {
        border-bottom: #DDDDDD 1px solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 87px;
        margin-left: 40px;
        margin-right: 40px;
        width: 670px;
        box-sizing: content-box;
        .label {
            /*flex: 1;*/
            display: flex;
            align-items: center;
            .cell-label {
                font-family: PingFang-SC-Regular;
                font-size: 32px;
                color: #353535;
                letter-spacing: 0;
                white-space: nowrap;
                overflow: hidden;
            }
        }

        .cell-value {
            display: flex;
            align-items: center;
            height: 87px;
            ont-family: PingFang-SC-Regular;
            font-size: 32px;
            color: #888888;
            letter-spacing: 0;
            text-align: right;
            img {
                width: 44px;
                height: 44px;
                margin-left: 28px;
            }
        }
    }

    .no-border-bottom {
        border-bottom: #ffff 1px solid;
    }
    .border-top {
        border-top: #DDDDDD 1px solid;
    }


</style>
