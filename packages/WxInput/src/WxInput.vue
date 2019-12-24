<template>
    <wx-cell v-bind="$attrs">
        <div slot="title" v-if="titleSlot">
            <slot name="title"></slot>
        </div>
        <div slot="icon" v-if="iconSlot">
            <slot name="icon"></slot>
        </div>
        <div slot="value" class="input-box">
            <input ref="input" :class="['input-value']" :value="value" @focus="focus" @blur="blur"
                   @input="input"/>
            <span class="placeholder" @click="selPlace" v-if="showPlace">{{placeholder}}</span>
        </div>
    </wx-cell>
</template>

<script>
  /**
   * title：cell的title
   * value：input输出的值
   * type： input的值
   * placeholder： 占位符
   * slot-title： 替换title
   * slot-icon： title后面追加
   */
  import WxCell from '../../WxCell'

  export default {
    name: 'WxInput',
    props: {
      value: {},
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: [String, Number],
        default: '请输入'
      }
    },
    data() {
      return {
        titleSlot: false,
        iconSlot: false,
        cacheV: this.value,
        showPlace: true
      }
    },
    created() {
      this.titleSlot = this.checkSlot('title')
      this.iconSlot = this.checkSlot('icon')
      this.show()
    },
    components: {WxCell},
    watch: {
      value() {
        this.cacheV = this.value
        this.show()
      }
    },
    methods: {
      selPlace() {
        this.$refs.input.focus()
      },
      checkSlot(key) {
        return !!this.$slots[key]
      },
      input(el) {
        this.type === 'number' ? isNaN(el.target.value) ? el.target.value = this.cacheV : this.cacheV = el.target.value : this.cacheV = el.target.value
        this.show()
        this.$emit('input', this.cacheV)
      },
      show() {
        this.showPlace = (this.cacheV === '' || this.cacheV === undefined || this.cacheV === null)
      },
      focus() {
      },
      blur() {
        this.show()
      }
    }
  }
</script>

<style lang='scss' scoped>
    .input-box {
        flex: 1;
        padding-left: 30px;
        box-sizing: border-box;
        position: relative;
        /*height: 40px;*/
        .input-value {
            text-align: right;
            font-family: PingFang-SC-Regular;
            font-size: 32px;
            color: #353535;
            /*letter-spacing: 0;*/
            width: 100%;
            line-height: 40px;
        }
        .placeholder {
            position: absolute;
            color: #B2B2B2;
            font-size: 32px;
            right: 0;
            bottom: 4px;
        }
    }

    ::-webkit-input-placeholder {
        color: #B2B2B2;
    }

    ::-moz-placeholder {
        color: #B2B2B2;
    }

    /* firefox 19+ */
    :-ms-input-placeholder {
        color: #B2B2B2;
    }

    /* Internet Explorer 10+ */
    :-moz-placeholder {
        color: #B2B2B2;
    }

    input[type="date" i], input[type="datetime-local" i], input[type="month" i], input[type="time" i], input[type="week" i] {
        align-items: right;
        -webkit-appearance: none;
        background-color: white;
        display: -webkit-inline-flex;
        border-width: 0px;
        border-style: solid;
        border-color: white;
        border-image: initial;
        overflow: hidden;
        justify-content: flex-end;
    }
</style>
