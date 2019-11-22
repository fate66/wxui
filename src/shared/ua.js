/* eslint-disable */
const ua = navigator.userAgent.toLowerCase()
const regAndriod = /(Android)\s+([\d.]+)/i
const regIOS = /\(i[^;]+;( U;)? cpu.+mac os x/i
const regWP = /Windows Phone ([\d.]+)/i
const regApple = /(iPhone|iPad|iPod|iOS)/i
const regIpad = /(iPad).*OS\s([\d_]+)/i
const regIphone = /(iPhone\sOS)\s([\d_]+)/i
const regSafari = /version\/([\d.]+).*safari/i
const regFF = /firefox/i
const regUC = /ucweb/i
const regQQBroser = /qqbrowser/i
const regQQ = /QQ/i
const regWx = /micromessenger/i
const regWxWork = /wxwork\/.* MicroMessenger/i
const regWeibo = /WeiBo/i

var _ua = Object.create(null)

/**
 * 设备环境判断（移动端、安卓、ios、window phone）
 */
_ua.isMobile = function () {
  return !!ua.match(/AppleWebKit.*Mobile.*/i)
}
_ua.isAndriod = function () {
  if (regAndriod.test(ua)) {
    return true
  }
  return false
}
_ua.isIOS = function () {
  if (regIOS.test(ua)) {
    return true
  }
  return false
}
_ua.isWP = function () {
  if (regWP.test(ua)) {
    return true
  }
  return false
}

/**
 * 终端环境判断（苹果产品系列、iphone、ipad、微信、企业微信等）
 */
_ua.isApple = function () {
  if (regApple.test(ua)) {
    return true
  }
  return false
}
_ua.isIphone = function () {
  if (regIphone.test(ua)) {
    return true
  }
  return false
}
_ua.isIpad = function () {
  if (regIpad.test(ua)) {
    return true
  }
  return false
}
_ua.isQQ = function () {
  if (regQQ.test(ua)) {
    return true
  }
  return false
}
_ua.isWX = function () {
  if (regWx.test(ua)) {
    return true
  }
  return false
}
_ua.isWXWork = function () {
  if (regWxWork.test(ua)) {
    return true
  }
  return false
}
_ua.isWeiBo = function () {
  if (regWeibo.test(ua)) {
    return true
  }
  return false
}

// iPhone X、iPhone XS
_ua.isIphoneX_XS = function () {
  return this.isIOS() && (screen.height == 812 && screen.width == 375)
}

// iPhone XS Max XR
_ua.isIPhoneXM_XR = function () {
  return this.isIOS() && window.screen.width === 414 && window.screen.height === 896
}

_ua.isIPhoneX_later = function () {
  return this.isIphoneX_XS() || this.isIPhoneXM_XR()
}


/**
 * 判断是否在小程序环境
 */
_ua.isMiniprogram = function () {
  return window.__wxjs_environment === 'miniprogram'
}
export default _ua
