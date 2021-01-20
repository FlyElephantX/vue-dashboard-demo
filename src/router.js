import Vue from 'vue'
import VueRouter from "vue-router"

import Login from "@/components/Login";
import Home from "@/components/Home";
import Form from "@/components/Form";
import PersonInfoList from "@/components/PersonInfoList";
import UserInfo from "@/components/userInfo/UserInfo";
import ModifyPassword from "@/components/userInfo/ModifyPassword";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/form',
        component: Form,
        meta: {
          index: '/home/form',
          title: '录入信息',
          type: 'menu',
          active: false
        }
      },
      {
        path: '/home/personInfoList',
        component: PersonInfoList,
        meta: {
          index: '/home/personInfoList',
          title: '员工管理',
          type: 'menu',
          active: false
        }
      },
      {
        path: '/home/systemInfoList',
        component: PersonInfoList,
        meta: {
          index: '/home/systemInfoList',
          title: '系统管理',
          type: 'menu',
          active: false
        }
      },
      {
        path: '/home/userInfo',
        component: UserInfo,
        meta: {
          index: '/home/userInfo',
          title: '个人信息',
          type: 'menu',
          active: false
        }
      },
      {
        path: '/home/modifyPassword',
        component: ModifyPassword,
        meta: {
          index: '/home/modifyPassword',
          title: '修改密码',
          type: 'menu',
          active: false
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (sessionStorage.loginStatus == 'login') {
    next();
  } else {
    if (to.path == '/') {
      next();
    } else {
      next({ path: '/' });
    }
  }
})

export default router
