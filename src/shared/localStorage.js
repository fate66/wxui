import {pageName} from './utils'

/**
 * 默认存储
 * @param prefix
 * @returns {{set: set, get: (function(String): (string | null)), setObject: setObject, getObject: getObject, del: del, clear: clear, key: (function(Number): string), keys: (function(): string[]), values: (function(): any[]), length: (function(): number)}}
 */
export function localStorage(prefix = pageName()) {
  const separator = '--'
  /**
   * @desc 存入缓存，String
   * @param {String} key
   * @param {String} val
   * @public
   */
  var set = (key, val) => {
    key = prefix + separator + key
    if (!window.localStorage) {
      window.alert('Your browser not support localStorage. Please check set browser private model.')
      return
    }
    try {
      window.localStorage.setItem(key, val)
    } catch (e) {
      window.console.warn('Your browser not support localStorage. ' + e)
      window.alert('Your browser not support localStorage. Please check set browser private model.')
    }
  }
  /**
   * @desc 获取数据,String
   * @param {String} key
   * @return {String}
   * @public
   */
  var get = key => {
    key = prefix + separator + key
    return window.localStorage.getItem(key)
  }
  return {
    set,
    get,
    /**
     * @desc 存入缓存，Object
     * @param {String} key
     * @param {Object} val
     * @public
     */
    setObject: (key, val) => {
      val = JSON.stringify(val)
      set(key, val)
    },
    /**
     * @desc 获取数据,Object
     * @param {String} key
     * @return {Object}
     * @public
     */
    getObject: key => {
      let result = get(key)
      let json = null
      if (!result) {
        return undefined
      } else {
        try {
          json = JSON.parse(result)
        } catch (e) {
          console.log('缓存数据解决json异常!')
        }
        return json
      }
    },
    /**
     * @desc 删除数据
     * @param {String} key
     * @public
     */
    del: key => {
      key = prefix + separator + key
      window.localStorage.removeItem(key)
    },
    /**
     * @desc 清除数据,instanceId需要保留
     * @param {String} key
     * @public
     */
    clear: () => {
      window.localStorage.clear()
      // this.cookie.clear()
      window.sessionStorage.clear()
    },
    /**
     * @desc 获取key根据角标
     * @param {Number} i
     * @return {String} key
     * @public
     */
    key: i => {
      i = i || 0
      return Object.keys(window.localStorage)[i]
    },
    /**
     * @desc 获取所有的key
     * @param {Number} i
     * @return {Array} key数组
     * @public
     */
    keys: () => {
      return Object.keys(window.localStorage)
    },
    /**
     * @desc 获取所有的value
     * @return {Object} 数据集合
     * @public
     */
    values: () => {
      return Object.values(window.localStorage)
    },
    /**
     * @desc 获取key的数量
     * @return {Number} key数量
     * @public
     */
    length: () => {
      return Object.keys(window.localStorage).length
    }
  }
}
