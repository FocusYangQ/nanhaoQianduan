import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import Login from '@/components/Login'
import Home from "@/components/Home";
import otherLogin from "@/components/otherLogin";
import SocreResult from "../components/SocreResult";
import setTemAndAns from "../refe/setTemAndAns";
import setIp from "../components/setIp";
import setTem from "../components/setTem"
import readCard from "../components/readCard"
import setNaTem from "../components/setNaTem"
import setStdAns from "../components/setStdAns"
import result from "../components/result"
import welcome from "../components/welcome"
import access from "../components/access"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/dist/',
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
      redirect: '/welcome'
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
          path: '/welcome',
          component: welcome
        },
        {
         path: '/setTemAndAns',
          component: setTemAndAns
        },
        {
          path: '/setIp',
          component: setIp
        },
        {
          path: '/setTem',
          component: setTem
        },
        {
          path: '/readCard',
          component: readCard
        },
        {
          path: '/setNaTem',
          component: setNaTem
        },
        {
          path: '/setStdAns',
          component: setStdAns
        },
        {
          path: '/result',
          component: result
        },
        {
          path: '/access',
          component: access
        },
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
