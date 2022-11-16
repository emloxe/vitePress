# 微信小程序


## 基础操作

html中
```html
<view>{{a}}</view>

<button bindtap="clickHandler"></button>
```



js中
```js
page({
  data: {
    a: 1,
    b: 0,
  },
  // 监听数据
  observers: {
      a: function () {
          console.log('a改变')
      }
  },
  clickHandler() {
    // 获取数据
    const a = this.data.a
    // 改变数据
    this.setData({
      a: 2
    });
  }
})
```


## 数据传递


### 点击 数据传递到函数

```html
<text bindtap="setEdit" data-id="123" data-isEdit="{{true}}">编辑</text>
```


```js
setEdit(e) {
  this.setData({
    id: e.currentTarget.dataset.id
  })
  // 通过 e.currentTarget.dataset.isEdit 是无法拿到值的，原因是不区分大小写
  // 需要用  e.currentTarget.dataset.isedit
}
```




### 页面传递

方式一： 
将数据存储到storge

方式二：
传递id等数据
```html
<navigator url="/pages/order/buy_tijao/index?id=123">
  <button>去结算</button>
</navigator>
```

页面接收
```js
onLoad(options) {
  const id = options.id
},
```


### 父组件与子组件
父组件
```html
<Child
  a="{{a}}"
  bind:setA="setA"
></Child>
```
```js
Component({
  data: {
    a: 3
  },
  methods: { // 页面就不用包裹这个methods
    setA(obj) {
      this.setData({
        a: obj.detail.a
      })
    }
  }
})
```

子组件
```html
<Button bindtap="change">{{a}}</Button>
```
```js
Component({
  properties: {
    a: {
      type: Number,
      observer(a) {
        console.log('数据发生改变', a)
      },
    }
  },
  methods: {
    change() {
      const a = this.properties.a;
      this.triggerEvent('setA', {
        a: a + 1,
      });
    }
  }
})

```


## mobx-miniprogram
https://www.jianshu.com/p/0c6657900f29

## 文档

[小程序用户头像昵称获取规则调整公告](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01)

[地理位置接口新增与相关流程调整](https://developers.weixin.qq.com/community/develop/doc/000a02f2c5026891650e7f40351c01)


[小程序支付开发指引](https://pay.weixin.qq.com/wiki/doc/apiv3/open/pay/chapter2_8_2.shtml)

