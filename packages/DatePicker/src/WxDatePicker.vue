<template>
    <wx-picker ref="datePicker" :options="options" :onChange="onChange"
               :defaultValues="_defaultValues"></wx-picker>
</template>

<script>
  import {WxPicker} from '../../Picker'
  import utils from '../dateUtils'

  export default {
    name: 'WxDatePicker',
    props: {
      range: {
        type: Number,
        default: 70
      },
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
      _defaultValues() {
        let defaultValues = ''
        if (!this.defaultValues) {
          let date = new Date()
          defaultValues = `${date.getFullYear()}-${utils.addZero(date.getMonth() + 1)}-${utils.addZero(date.getDate())}`
        } else {
          defaultValues = this.defaultValues
        }
        return utils.dfs(defaultValues)
      },
      options() {
        let options = []
        options.push(utils.getYearArray(this.range))
        options.push(utils.getMonthArray())
        options.push(utils.getDayArray(this._defaultValues[0], parseInt(this._defaultValues[1])))
        return options
      }
    },
    components: {WxPicker},
    created() {
    },
    watch: {
      _defaultValues: {
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
        const val = this.$refs.datePicker.confirm()
        this.$emit('datePicker', `${val[0]}-${val[1]}-${val[2]}`, val)
      },
      onChange(vm, {index, data}) {
        this.cache[index] = data
        if (index == 0) {
          vm.$set(vm.cacheData, 2, utils.getDayArray(data, this.cache[1] || 1))
        }
        if (index == 1) {
          vm.$set(vm.cacheData, 2, utils.getDayArray(this.cache[0], this.cache[1] || 1))
        }
        this.confirm()
      }
    },
    mounted() {
    }
  }
</script>

<style lang='scss'>

</style>
