import Vue           from 'vue'
import Router        from 'vue-router'
import Home          from '@/components/Home'
import Login          from '@/components/Login'
import Register          from '@/components/Register'
import FAQ          from '@/components/FAQ'
import Page404          from '@/components/404'
import Products          from '@/components/Products'
import Manager          from '@/components/Manager'
import Send          from '@/components/manager/Send'
import My          from '@/components/manager/My'
import History          from '@/components/manager/History'
import Tab1          from '@/components/Tab1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      // hidden: 'true',
      component: Home
    },
    {
      path: '*',
      hidden: true,
      name: 'Page404',
      component: Page404
    },
    {
      path: '/login',
      hidden: true,
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      hidden: true,
      name: '注册',
      component: Register
    },
    {
      path: '/FAQ',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/products',
      name: '产品',
      component: Products
    },
    {
    	path: '/manager',
    	name: '管理',
    	component: Manager,
    	redirect: '/manager/my',
    	hasChild: true,
    	children: [
    		{
    			path: '/manager/my',
    			name: '我的信息',
    			component: My
    		},
    		{
    			path: '/manager/send',
    			name: '发货管理',
    			component: Send
    		},
    		{
    			path: '/manager/history',
    			name: '发货记录',
    			component: History
    		},
    	]
    },  
  ]
})
