---
sidebar: auto
---

# axios

## 请求方法

需要携带的参数是`test: 123`

**GET**
```js
axios.get('/test', { params: { test: 123 }}).catch((error) => {
  console.log(error);
}).then(() => {
  // 成功
}, () => {
  // 失败
});
```

**POST**
```js
axios.post('/test', { test: 123 });
```

post请求在url上携带信息可以写成如下形式
```js
// url显示为 /test?test2=123
axios.post('/test', { test: 123 }, { params: { test2: 123 } });
```


**PUT**
```js
axios.put('/test', { test: 123 });
```

**DELETE**
```js
axios.delete('/test', {data: { test: 123 }});
```