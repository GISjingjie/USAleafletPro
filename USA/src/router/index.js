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
  },
  {
    path:'/iVMap',
    name:'iVmap',
    component:iVMap
  }
]

let VueRouterReplace=Router.prototype.replace


Router.prototype.pushToRoutesLast=function pushToRoutesLast(pathStr,nameStr,componentName){
    routes.push({
      path:pathStr,
      name:nameStr,
      component:componentName})
}

//Router.prototype.pushToRoutesLast("/iVMap",'iVMap',iVMap)
console.log(routes)
const router=new Router({
  mode:'hash',
  routes
})

// 导航守卫
// 参数1 : to 目标路由对象
// 参数2 : from 来源路由对象
// 参数3 : next() 下一步




router.beforeEach((to,from,next)=>{

  if(to.path==='/login'){
    // 1. 判断是不是登录页面
    // 是登录页面
    next()
  }else{
    // 不是登录页面
    // 2. 判断 是否登录过
    let token=localStorage.getItem('token');
    token?next():next('/login')
  }
})

/*
Router.prototype.replace=function replace(to){
  console.log("执行啊啊")
  return VueRouterReplace.call(this,to).catch(err=>err)
}
*/

export default router
