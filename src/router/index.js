import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import Login from '@/components/Login'
import Home from "@/components/Home";
import otherLogin from "@/components/otherLogin";
import SocreResult from "../components/SocreResult";
import setTemAndAns from "../components/setTemAndAns";
import setIp from "../components/setIp";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //路由重定向
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      redirect: '/setTemAndAns'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
        path: '/SocreResult',
        component: SocreResult
        },
        {
         path: '/setTemAndAns',
          component: setTemAndAns
        },
        {
          path: '/setIp',
          component: setIp
        }
      ]
    },
    {
      path: '/otherLogin',
      name: 'otherLogin',
      component: otherLogin
    },
    {
      path: '/SocreResult',
      name: 'SocreResult',
      component: SocreResult
    }
  ]
})
