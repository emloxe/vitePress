# vuex


## v3
<CodeGroup>
  <CodeGroupItem title="store/index.js" active>
    
```js
// 在目录下创建
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: 1,
    array: [1, 2, 3],
  },
  getters: { // 用于计算相关属性
    arrayLen: state => {
      return 'array长度为：' + state.array.length
    }
  },
  mutations: {
    increment(state, arr) {
      // 变更状态
      state.index++;
      state.array.push(...arr);
    }
  },
  actions: { // 可异步，然后调用mutations
    incrementAsync({
      commit
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  }
})
export default store;
```
  </CodeGroupItem>
  
  
  <CodeGroupItem title="main.js" >

```js
// vue2
import store from './store';

Vue.prototype.$store = store;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

```    
    
  </CodeGroupItem>
  <CodeGroupItem title="组件中" >

```vue
<template>
  <view>
    <view>
      {{index}}
    </view>
    <view>
      {{arrayLen}}
    </view>
    <button  type="default" @click="clickHandle"> 触发mutations  </button>
    <button  type="default" @click="clickHandle2"> 触发actions  </button>
  </view>
</template>

<script>
  import {
    mapState,
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      // 使用对象展开运算符将此对象混入到外部对象中
      ...mapState([
        'index'
      ]),

      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'arrayLen',
      ])
    },
    methods: {
      clickHandle() {
        this.$store.commit('increment', [1, 2]);
      },
      clickHandle2() {
        this.$store.dispatch('incrementAsync').then(() => {
          console.log('异步触发完成')
        });
      }
    }
  }
</script>
```
      
  </CodeGroupItem>
</CodeGroup>



## v4
采用 setup 模式

<CodeGroup>
  <CodeGroupItem title="store/index.js" active>
    
```js
// 在目录下创建
import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      index: 1,
      array: [1, 2, 3],
    }
  },
  getters: { // 用于计算相关属性
    arrayLen: state => {
      return 'array长度为：' + state.array.length
    }
  },
  mutations: {
    increment(state, arr) {
      // 变更状态
      state.index++;
      state.array.push(...arr);
    }
  },
  actions: { // 可异步，然后调用mutations
    incrementAsync({
      commit
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
  }
})
export default store;
```
  </CodeGroupItem>
  
  
  <CodeGroupItem title="main">

```js
// main.js
import store from './store';
app.use(store).use(router).mount('#app');
```

  </CodeGroupItem>

  <CodeGroupItem title="组件中">


```vue
<template>
  <div >
    {{store.state.index}}
    {{store.getters.arrayLen}}
  </div>
</template>

<script>
import { useStore } from 'vuex';

const store = useStore();

store.commit('increment', [1, 2]);
store.dispatch('incrementAsync').then(() => {
  console.log('异步触发完成')
});
</script>
```

  </CodeGroupItem>
</CodeGroup>


## 参考文档

https://vuex.vuejs.org/zh/guide/actions.html

https://next.vuex.vuejs.org/zh/guide/