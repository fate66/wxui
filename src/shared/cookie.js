/**
 * 缓存cookie默认存储一个月
 * @type {Object}
 */
export const cookie = {
  set: (key, val, time, domain, temporary) => {
    var exp = new Date()
    var t = !time ? (exp.getTime() + 2592000000) : (exp.getTime() + time)
    exp.setTime(t)
    if (domain === true) {
      /* no-useless-escape */
      // .xx.com
      domain = document.domain.replace(/[a-zA-Z]+/, '')
    }
    var extr = domain ? ';domain=' + domain + ';path=/' : ';path=/'
    document.cookie = key + '=' + escape(val) + (temporary ? '' : ';expires=' + exp.toGMTString()) + extr
  },
  get: key => {
    var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
    var arr = document.cookie.match(reg)
    return arr ? unescape(arr[2]) : ''
  },
  setObject: (key, val, time, domain, temporary) => {
    val = JSON.stringify(val)
    var exp = new Date()
    var t = !time ? (exp.getTime() + 2592000000) : (exp.getTime() + time)
    exp.setTime(t)
    if (domain === true) {
      /* no-useless-escape */
      // .xx.com
      domain = document.domain.replace(/[a-zA-Z]+/, '')
    }
    var extr = domain ? ';domain=' + domain + ';path=/' : ';path=/'
    document.cookie = key + '=' + escape(val) + (temporary ? '' : ';expires=' + exp.toGMTString()) + extr
  },
  getObject: key => {
    var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
    var arr = document.cookie.match(reg)
    let json = null
    try {
      json = JSON.parse(arr ? unescape(arr[2]) : '')
    } catch (e) {
      console.log('缓存数据解决json异常!')
    }
    return json
  },
  del: function (key, domain) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = this.get(key)
    if (domain === true) {
      domain = document.domain.replace(/[a-zA-Z]+/, '')
    }
    var extr = domain ? ';domain=' + domain + ';path=/' : ';path=/'
    if (cval) {
      document.cookie = key + '=1;expires=' + exp.toGMTString() + extr
    }
  },
  clear: function (domain) {
    if (domain === true) {
      domain = document.domain.replace(/[a-zA-Z]+/, '')
    }
    var extr = domain ? ';domain=' + domain + ';path=/' : ';path=/'
    var keys = document.cookie.match(/[^ =;]+(?==)/g)
    if (!keys || !keys.length) return
    for (var i = keys.length - 1; i >= 0; i--) {
      document.cookie = keys[i] + '=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;' + extr
    }
  }
}
