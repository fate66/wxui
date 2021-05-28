import WxButton from 'packages/WxButton'
import Toast from 'packages/WxToast'
import WxCell from 'packages/WxCell'
import WxMask from 'packages/WxMask'
import WxTab from 'packages/WxTab'
import WxGrid from 'packages/WxGrid'
import WxCard from 'packages/WxCard'
import WxSwipe from 'packages/WxSwipe'
import WxSwipeItem from 'packages/WxSwipeItem'
import {Picker, WxPicker} from 'packages/Picker'
import WxShowPan from 'packages/WxShowPan'
import {AddressPicker, WxAddressPicker} from 'packages/AddressPicker'
import {DatePicker, WxDatePicker} from 'packages/DatePicker'
import WxScroller from 'packages/WxScroller'
import WxPageScroller from 'packages/WxPageScroller'
import WxFixed from 'packages/WxFixed'
import WxRadio from 'packages/WxRadio'
import WxInput from 'packages/WxInput'
import * as utils from './shared'

const install = Vue => {
  if (install.installed) {
    return
  }
  Vue.component(WxButton.name, WxButton)
  Vue.component(WxCell.name, WxCell)
  Vue.component(WxMask.name, WxMask)
  Vue.component(WxTab.name, WxTab)
  Vue.component(WxGrid.name, WxGrid)
  Vue.component(WxCard.name, WxCard)
  Vue.component(WxSwipe.name, WxSwipe)
  Vue.component(WxSwipeItem.name, WxSwipeItem)
  Vue.component(WxPicker.name, WxPicker)
  Vue.component(WxShowPan.name, WxShowPan)
  Vue.component(WxDatePicker.name, WxDatePicker)
  Vue.component(WxScroller.name, WxScroller)
  Vue.component(WxPageScroller.name, WxPageScroller)
  Vue.component(WxFixed.name, WxFixed)
  Vue.component(WxRadio.name, WxRadio)
  Vue.component(WxInput.name, WxInput)
  Vue.component(WxAddressPicker.name, WxAddressPicker)

  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$picker = Vue.prototype.$picker = Picker
  Vue.$addressPicker = Vue.prototype.$addressPicker = AddressPicker
  Vue.$datePicker = Vue.prototype.$datePicker = DatePicker
  Vue.$utils = Vue.prototype.$utils = utils
}
export {
  install,
  WxButton,
  Toast,
  Picker,
  AddressPicker,
  WxAddressPicker,
  DatePicker,
  WxCell,
  WxMask,
  WxTab,
  WxGrid,
  WxCard,
  WxSwipe,
  WxSwipeItem,
  WxShowPan,
  WxPicker,
  WxDatePicker,
  WxScroller,
  WxPageScroller,
  WxFixed,
  WxRadio,
  WxInput,
  utils
}
