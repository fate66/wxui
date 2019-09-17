
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
    }
  ]
}
