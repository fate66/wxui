import {ua} from './ua'
import {getWindowHeight} from './element'
import {dp2rem} from './flexibleExtend'

export function isUndef(v) {
  return v === undefined || v === null
}

export function isDef(v) {
  return v !== undefined && v !== null
}

export function isTrue(v) {
  return v === true
}

export function isFalse(v) {
  return v === false
}

/**
 * 是否是基本类型
 * Check if value is primitive.
 */
export function isPrimitive(value) {
  return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'symbol' ||
      typeof value === 'boolean'
  )
}

/**
 * 是否是对象   数组 对象 日期...
 * @param obj
 * @returns {boolean}
 */
export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

const _toString = Object.prototype.toString

/**
 * 是否是object
 * @param obj
 * @returns {boolean}
 */
export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

/**
 * 转字符串
 * @param val
 * @returns {string}
 */
export function toString(val) {
  return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
          ? JSON.stringify(val, null, 2)
          : String(val)
}

/**
 * 转number 不是数字将原值返回
 * @param val
 * @returns {*}
 */
export function toNumber(val) {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

/**
 * 检测某个字段是否存在于某一系列字段中。
 * @param str
 * @param expectsLowerCase
 * @returns {function(*): *}
 */
export function makeMap(str, expectsLowerCase) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
      ? val => map[val.toLowerCase()]
      : val => map[val]
}

/**
 * Remove an item from an array.
 * 移除数组中的某个值，这个值为基本数据类型
 */
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

export function looseEqual(a, b) {
  if (a === b) return true
  const isObjectA = this.isObject(a)
  const isObjectB = this.isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return this.looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(key => {
          return this.looseEqual(a[key], b[key])
        })
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

export function deepClone(obj) {
  var o
  if (typeof obj === 'object') {
    if (obj === null) {
      o = null
    } else {
      if (obj instanceof Array) {
        o = []
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(this.deepClone(obj[i]))
        }
      } else {
        o = {}
        for (var j in obj) {
          o[j] = this.deepClone(obj[j])
        }
      }
    }
  } else {
    o = obj
  }
  return o
}

export function urlQuery(key) {
  let m = location.search.match(new RegExp(`(\\?|&)(${key})=([^&$]*)`))
  return m ? m[3] : ''
}

export function ps(cb) {
  return new Promise((resolve, reject) => {
    cb(resolve, reject)
  })
}

export function pageName() {
  let list = window.location.href.split('/')
  let list2 = list[list.length - 1].split('?')
  return list2[0].split('.')[0]
}

export function uuid() {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  let uuid = s.join('')
  return uuid
}

export function getUri(params) {
  let param = ''
  if (isPlainObject(params)) {
    let keys = Object.keys(params)
    if ((keys && keys.length && !(keys.includes('wfr'))) || !keys || !(keys.length)) {
      params.wfr = urlQuery('wfr')
      !params.wfr && Reflect.deleteProperty(params, 'wfr')
    }
    keys = Object.keys(params)
    for (let key of keys) {
      let val = typeof (params[key]) === 'object' ? JSON.stringify(params[key]) : params[key]
      param = param + key + '=' + val + '&'
    }
  }
  param = param && param.slice(0, param.length - 1)
  return param
}

/**
 * 保留小数，不足不补0
 * @param num
 */
export function toDecimal(num, digit = 2) {
  if (isNaN(num)) {
    console.error('必须为数字')
    return false
  }
  let capacit = 1
  let i = 1
  while (i <= digit) {
    capacit *= 10
    i++
  }
  return parseInt(num * capacit) / capacit
}

export function copyVal(val) {
  console.log(val)
  let input = document.createElement('input')
  input.value = val
  input.style.opacity = 0.1
  document.body.appendChild(input)
  if (ua.isIOS()) {
    window.getSelection().removeAllRanges()
    var range = document.createRange()
    range.selectNode(input)
    window.getSelection().addRange(range)
    document.execCommand('copy')
    window.getSelection().removeAllRanges()
  } else {
    input.select()
    document.execCommand('Copy')
  }
  document.body.removeChild(input)
}

export function sort(arr) {
  arr.sort(() => Math.random() - 0.5)
}

export function url2obj(url) {
  const _o = {}
  const _l = url.split('?')
  const _s = _l.length > 1 ? _l[1] : ''
  if (_s) {
    for (let item of _s.split('&')) {
      const _i = item.split('=')
      _o[_i[0]] = _i.length > 1 ? _i[1] : ''
    }
  }
  return Object.keys(_o) ? _o : ''
}

/**
 * 适配橡皮筋
 * @param self
 * @param ref
 */
export function fixRubberUI(self, ref) {
  if (!ua.isWX()) {
    console.log('不是微信')
    return false
  }
  if (self.$refs[ref].offsetHeight < getWindowHeight()) {
    self.$refs[ref].style.height = dp2rem(getWindowHeight())
  }
}
