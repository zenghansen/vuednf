import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import statuslist from "@/components/statuslist";

Vue.use(Router)


export default new Router({
  mode:'history', //去掉路由默认的#号
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/status',
      name: 'status',
      component: statuslist
    }
  ]
})
