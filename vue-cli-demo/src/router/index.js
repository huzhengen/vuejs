import Vue           from 'vue'
import Router        from 'vue-router'
import HelloWorld    from '@/components/HelloWorld'
import Tab1          from '@/components/Tab1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/tab1',
    	name: 'Tab1',
    	component: Tab1
    },
  ]
})
