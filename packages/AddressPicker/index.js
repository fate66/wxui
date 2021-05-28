import {Picker} from '../Picker'
import WxAddressPicker from './src/WxAddressPicker'
import adsUtils from './adsUtils'

let CBF = null
const op = {
    onConfirm(data, vm) {
        let ads_val = ''
        for (let k in data) {
            ads_val += data[k] && data[k].label ? k == 0 ? data[k].label : `-${data[k].label}` : ''
        }
        CBF(ads_val, data)
    },
    onChange: adsUtils.onChange
}
const AddressPicker = (defaultValue, confirm) => {
    if (typeof defaultValue == 'function') {
        confirm = defaultValue
        defaultValue = ''
    }
    CBF = confirm
    let options = adsUtils.options(defaultValue)
    op.options = options.options
    op.defaultValues = options.defaults
    Picker(op)
}

export {
    AddressPicker,
    WxAddressPicker
}
