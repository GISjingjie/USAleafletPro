import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import iLogin from '@/components/iLogin'
import iVMap from '@/components/iViewMap'

Vue.use(Router)


let routes=[
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:iLogin
  }
]

Router.prototype.pushToRoutesLast=function pushToRoutesLast(pathStr,nameStr,componentName){
    routes.push({
      path:pathStr,
      name:nameStr,
      component:componentName})
}

Router.prototype.pushToRoutesLast("/iVMap",'iVMap',iVMap)
console.log(routes)
const router=new Router({
  mode:'hash',
  routes
})

export default router
