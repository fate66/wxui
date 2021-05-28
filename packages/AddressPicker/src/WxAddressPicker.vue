<template>
    <wx-picker ref="adsPicker" :options="options.options" :onChange="onChange"
               :defaultValues="options.defaults"></wx-picker>
</template>

<script>
  import {WxPicker} from '../../Picker'
  import utils from '../adsUtils'

  export default {
    name: 'WxAddressPicker',
    props: {
      defaultValues: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        cache: {}
      }
    },
    computed: {
      options() {
        return utils.options(this.defaultValues)
      }
    },
    components: {WxPicker},
    created() {
    },
    watch: {
      defaultValues: {
        handler: 'cacheValue',
        immediate: true
      }
    },
    methods: {
      cacheValue(val) {
        if (Array.isArray(val) && val.length === 3) {
          this.cache[0] = val[0]
          this.cache[1] = val[1]
          this.cache[2] = val[2]
        }
      },
      confirm() {
        const val = this.$refs.adsPicker.confirm()
        console.log(val)
        this.$emit('adsPicker', `${val[0].label}-${val[1].label}-${val[2].label}`, val)
      },
      onChange(vm, {index, data}) {
        this.cache[index] = data
        utils.onChange(vm, {index, data})
        /**
         * 该方法主要用于收集子组件选中的值，与滚轮内部修改选中值的操作为异步操作
         * 当第一个滚轮改变时，会触发第三个滚动的变动，第三个滚轮的内部使用了nextTick 选中默认值 如果实时收集第三个滚动 则会出现无法
         * 收集第三个滚轮的当前值情况 所以使用 setTimeout 延迟收集
         */
        setTimeout(() => {
          this.confirm()
        })
      }
    },
    mounted() {
    }
  }
</script>

<style lang='scss'>

</style>
