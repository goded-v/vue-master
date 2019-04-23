import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

// var index = r => require.ensure([], () => r(require('@/components/index')), 'index', 'index')
// var HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'HelloWorld', 'HelloWorld')
import index from '@/components/index';
import HelloWorld from '@/components/HelloWorld';
Vue.use(Router)
const router = new Router({
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
            }
          ]
        }
      ]
    },
    {// 路由通配符
      path: '*',
      redirect: 'HelloWorld'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.fullPath.indexOf(window.backPathRouter) !== -1) window.backPathRouter = "undefined";
  if (to.meta.requireAuth){
    if (window.localStorage['isLogin']) {
      next();
    } else {
      next({
        path: 'HelloWorld'
      });
      window.backPathRouter = to.fullPath;
    }
  } else {
    next();
  }
});
export default router;
