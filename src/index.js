import WxButton from '../packages/WxButton'
import toast from '../packages/WxToast'
import WxCell from '../packages/WxCell'
import WxMask from '../packages/WxMask'
import WxTab from '../packages/WxTab'
import WxGrid from '../packages/WxGrid'

const install = Vue => {
  if (install.installed) {
    return
  }
  Vue.component(WxButton.name, WxButton)
  Vue.component(WxCell.name, WxCell)
  Vue.component(WxMask.name, WxMask)
  Vue.component(WxTab.name, WxTab)
  Vue.component(WxGrid.name, WxGrid)
  
  Vue.$toast = Vue.prototype.$toast = toast
}
export {
  install,
  WxButton,
  toast,
  WxCell,
  WxMask,
  WxTab,
  WxGrid
}
