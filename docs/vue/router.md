# router


## v3
main.js

```js
import router from './router';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
```


router/index.js

```js
import Vue from 'vue';
Vue.use(VueRouter);
import Home from '../Tabs/Home.vue';
...

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/manager-index',
    children: [
      {
        path: '/manager-index',
        component: InputData
      },
      // {
      //   path: '/input-data',
      //   component: InputData
      // },
      {
        path: '/work',
        component: Work
      },
    ]
  },
  {
    path: '/rest-passworld',
    name: 'Login',
    component: () => import('../views/ResetPassword.vue')
  },
  {
    path: '/cash-register',
    name: 'CashRegister',
    component: () => import('../views/CashRegister.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
```

app.vue
```vue
<template>
  <div class="app">

    <router-view />

  </div>
</template>
```

嵌套路由
示例为 vant tab切换嵌套
home.vue

```vue
<template>
  <div class="home">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/manager-index" icon="wap-home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/work" icon="apps-o">工作台</van-tabbar-item>
      <van-tabbar-item replace to="/report-form" icon="cashier-o">
        报表
      </van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="contact">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

```


### 使用

```vue
<template>
  <router-link to="/cash-register"></router-link>
</template>
```

```js
this.$router.push('/add-project');
this.$router.go(-1);
this.$router.push({ path: '/edit-project', query: { id } })
```


## v4


### 路由守卫
```js
import router from './router';
import store from './store';

// 白名单
const whiteList = ['/login'];
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页
  // if (store.state.user.token) {
  // 快捷访问
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/');
    } else {
      next();
    }
  } else {
    // 没有token的情况下，可以进入白名单
    if (whiteList.indexOf(to.path) > -1) {
      next();
    } else {
      next('/login');
    }
  }
});
```

### 路由跳转
```js
import router, { resetRouter } from '@/router';

router.push('/login');
```




### 保存页面
采用keep-alive方式

```html
  <router-view v-slot="{ Component }">
    <keep-alive include="HomeView,OrderView">
      <component :is="Component" />
    </keep-alive>
  </router-view>
```
`HomeView,OrderView` 最好保持组件名称，路由名称一致
组件中如
```js
// HomeView.vue
export default {
  name: 'HomeView',
}
```
路由中
```js
// router/index.js
const routes = [
  {
    path: '/',
    name: 'HomeView',
    meta: { keepAlive: true },
    component: HomeView
  }
]
```

缓存中的组件多了2个状态
```js
  activated() { // 再次进入页面时，不在进入create状态
  },
  deactivated() { // 退出时状态
  },
```



#### 高度缓存
保存的页面无法缓存高度，可以采用如下方式
```js
// router/index.js
const savedPositionObj = {};
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log('scrollBehavior', to, from, savedPosition);

    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        savedPositionObj[from.name] = from.savedPosition;
      }

      return { top: savedPositionObj[to.name] || 0 };
    }
  }
});
```


## 文档


https://router.vuejs.org/zh/