import {Picker} from '../Picker'
import WxDatePicker from './src/WxDatePicker'
import utils from './dateUtils'
import {log} from 'src/shared'

let CBF = null


let cache = {}

const DatePicker = (data, cb) => {
  if (typeof data == 'function') {
    cb = data
    data = {}
  }
  if (!data.defaultValues) {
    let date = new Date()
    data.defaultValues = `${date.getFullYear()}-${utils.addZero(date.getMonth() + 1)}-${utils.addZero(date.getDate())}`
  }
  data.range = data.range || 70
  const op = {
    onConfirm(val, vm) {
      CBF(`${val[0]}-${val[1]}-${val[2]}`, val)
    },
    onChange(vm, {index, data}) {
      cache[index] = data
      if (index == 0) {
        vm.$set(vm.cacheData, 2, utils.getDayArray(data, cache[1] || 1))
      }
      if (index == 1) {
        vm.$set(vm.cacheData, 2, utils.getDayArray(cache[0], cache[1] || 1))
      }
    }
  }
  CBF = cb
  let options = []
  let defaults = utils.dfs(data.defaultValues)
  cache[0] = defaults[0]
  cache[1] = defaults[1]
  cache[2] = defaults[2]
  options.push(utils.getYearArray(data.range))
  options.push(utils.getMonthArray())
  options.push(utils.getDayArray(defaults[0], parseInt(defaults[1])))
  op.options = options
  log(options, 'options')
  op.defaultValues = defaults
  Picker(op)
}
export {
  DatePicker,
  WxDatePicker
}
