const isDom = (typeof HTMLElement === 'object') ?
    obj => obj instanceof HTMLElement :
    obj => obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string'

/**
 * 获取屏幕宽度
 * @returns {number}
 */
export function getWindowWidth() {
  /*
      window.innerWidth Internet Explorer、Chrome、Firefox、Opera 以及 Safari
      document.body.clientWidth || document.documentElement.clientWidth  Internet Explorer 8、7、6、5
   */
  return screen.width || 0
}

export function getWindowHeight() {
  return screen.height || 0
}

/**
 * 获取页面滚动的距离
 */
export function getScrollTop() {
  /*
      document.documentElement.scrollTop  Chrome、Firefox、Opera
      document.body.scrollTop IE
   */
  return document.documentElement.scrollTop || document.body.scrollTop
}

/**
 * 获取dom元素距离顶部的距离
 */
export function getOffsetTop(el) {
  return isDom(el) && el.offsetTop
}

/**
 * 获取dom元素距离页面顶部的距离
 * @param el
 * @returns {*}
 */
export function getElementToPageTop(el) {
  if (isDom(el)) {
    if (el.parentElement) {
      return getElementToPageTop(el.parentElement) + el.offsetTop
    }
    return el.offsetTop
  }
}
