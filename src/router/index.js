import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

// var index = r => require.ensure([], () => r(require('@/components/index')), 'index', 'index')
// var HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld', 'HelloWorld')
import index from '@/components/index';
import HelloWorld from '@/components/HelloWorld';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: 'HelloWorld'
        },
        {
          path: 'HelloWorld',
          component: HelloWorld,
          children: [
            {
              path: 'index',
              component: index
            },
          ]
        }
      ]
    }
  ]
})
