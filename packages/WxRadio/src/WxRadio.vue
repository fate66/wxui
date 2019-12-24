<template>
    <div class="wx-radio">
        <div :class="['wx-radio-item', val===item.value&&'sel-item']" v-for="(item, i) in list"
             :style="radioSty(item)"
             :key="i" @click="ck(i, item)">
            {{item.label}}
        </div>
    </div>
</template>

<script>
  /**
   * value：默认选中的值
   * list：一个对象，选项列表
   */
  import {wpx2rem} from 'src/shared'

  export default {
    name: 'WxRadio',
    props: {
      value: {
        type: [String, Number],
        default: undefined
      },
      list: {
        type: Array,
        default: () => [{label: '是', value: 1}, {label: '否', value: 0}]
      },
      marginLeft: {
        type: Number,
        default: 0
      },
      paddingLeft: {
        type: Number,
        default: 0
      },
      paddingRight: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        val: this.value
      }
    },
    created() {
    },
    computed: {},
    components: {},
    watch: {
      value(val) {
        this.val = val
      }
    },
    methods: {
      radioSty(data) {
        let sty = {}
        this.formatSY('marginLeft', data, sty)
        this.formatSY('paddingLeft', data, sty)
        this.formatSY('paddingRight', data, sty)
        return sty
      },
      formatSY(key, data, sty) {
        const val = data[key] || this[key]
        val && (sty[key] = wpx2rem(val))
      },
      ck(index, data) {
        if (data.value === this.val) return
        this.val = data.value
        this.$emit('input', data.value)
        this.$emit('click', {index, data})
      }
    }
  }
</script>

<style lang='scss' scoped>
    .wx-radio {
        display: flex;
        .wx-radio-item {
            background: #F7F7F7;
            border: 1px solid #EEEEEE;
            border-radius: 30px;
            padding: 7px 38px;
            font-family: PingFang-SC-Regular;
            font-size: 32px;
            color: #888888;
            letter-spacing: 0;
            margin-left: 40px;
            white-space: nowrap;
        }
        .sel-item {
            background: #52B992;
            color: #FFFFFF;
            border-color: #52B992;
        }
    }
</style>
