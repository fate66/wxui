import Vue from 'vue'
import pickerComponent from './src/index'

const WxPicker = pickerComponent

const Picker = (data = {}) => {
  const PickerConstructor = Vue.extend(pickerComponent)
  const init = (propsData) => {
    return new PickerConstructor({
      propsData
    }).$mount(document.createElement('div'))
  }
  const vm = init({
    options: data.options,
    onConfirm: data.onConfirm,
    onHide: data.onHide,
    onChange: data.onChange,
    defaultValues: data.defaultValues,
    isCom: false,
    a: data.a
  })
  document.body.appendChild(vm.$el)
  return vm
}

export {
  Picker,
  WxPicker
}
