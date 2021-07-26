import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dnf from "@/components/dnf";

Vue.use(Router)

export default new Router({
  mode:'history', //去掉路由默认的#号
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'dnf',
      component: dnf
    }
  ]
})
