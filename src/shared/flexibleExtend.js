/*
 * 逻辑像素：设计师出图量出的像素
 * 物理像素：运行在手机上的实际像素
 * 适配标准，默认按照iPhone 6 适配
 */

import {getWindowWidth, getWindowHeight} from './element'

/**
 * 逻辑像素转rem
 * @param px
 * @returns {*|number}
 */
export function wpx2rem(px, unit = true) {
  return dp2rem(wpx2dp(px), unit)
}

export function hpx2rem(px, unit = true) {
  return dp2rem(hpx2dp(px), unit)
}

/**
 * 逻辑像素转物理像素
 * @param px
 * @returns {*}
 */
export function wpx2dp(px) {
  return getWindowWidth() / 750 * parseFloat(px)
}

export function hpx2dp(px) {
  return getWindowHeight() / 1334 * parseFloat(px)
}

/**
 * 物理像素转rem
 * @param dp
 * @returns {number}
 */
export function dp2rem(dp, unit = true) {
  return unit ? window.lib.flexible.px2rem(parseFloat(dp)) + 'rem' : window.lib.flexible.px2rem(parseFloat(dp))
}
