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

export function logError(info, err) {
  if (typeof console !== 'undefined') {
    console.error(err)
  } else {
    throw err
  }
}
