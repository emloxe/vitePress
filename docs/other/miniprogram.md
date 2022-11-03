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



## mobx-miniprogram


