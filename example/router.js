export default {
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['./components/pages/index'], resolve)
    },
    {
      path: '/button',
      name: 'Button',
      component: resolve => require(['./components/pages/button'], resolve)
    },
    {
      path: '/cell',
      name: 'Cell',
      component: resolve => require(['./components/pages/cell'], resolve)
    },
    {
      path: '/mask',
      name: 'Mask',
      component: resolve => require(['./components/pages/mask'], resolve)
    },
    {
      path: '/tab',
      name: 'Tab',
      component: resolve => require(['./components/pages/tab'], resolve)
    },
    {
      path: '/grid',
      name: 'Grid',
      component: resolve => require(['./components/pages/grid'], resolve)
    },
    {
      path: '/card',
      name: 'Card',
      component: resolve => require(['./components/pages/card'], resolve)
    },
    {
      path: '/swipe',
      name: 'Swipe',
      component: resolve => require(['./components/pages/swipe'], resolve)
    },
    {
      path: '/picker',
      name: 'Picker',
      component: resolve => require(['./components/pages/picker'], resolve)
    },
    {
      path: '/showpan',
      name: 'ShowPan',
      component: resolve => require(['./components/pages/showPan'], resolve)
    },
    {
      path: '/addressPicker',
      name: 'AddressPicker',
      component: resolve => require(['./components/pages/addressPicker'], resolve)
    },
    {
      path: '/datePicker',
      name: 'DatePicker',
      component: resolve => require(['./components/pages/datePicker'], resolve)
    },
    {
      path: '/scroller',
      name: 'Scroller',
      component: resolve => require(['./components/pages/scroller'], resolve)
    },
    {
      path: '/pageScroller',
      name: 'PageScroller',
      component: resolve => require(['./components/pages/pageScroller'], resolve)
    },
    {
      path: '/fixed',
      name: 'Fixed',
      component: resolve => require(['./components/pages/fixed'], resolve)
    },
    {
      path: '/radio',
      name: 'Radio',
      component: resolve => require(['./components/pages/radio'], resolve)
    },
    {
      path: '/input',
      name: 'Input',
      component: resolve => require(['./components/pages/input'], resolve)
    }
  ]
}
