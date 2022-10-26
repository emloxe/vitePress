# 微信小程序

## 数据传递


### 点击 数据传递到函数

```html
<text bindtap="setEdit" data-aaa="123" data-bbb="{{true}}">编辑</text>

```


```js
setEdit(e) {
  this.setData({
    isEdit: e.currentTarget.dataset.b
  })
}
```



### 页面传递

方式一： 
将数据存储到storge

方式二：
传递id等数据
```
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
