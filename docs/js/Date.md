# 时间

## 时间解析


获取其毫秒数
假设ISO时间为"2019-08-22T07:24:38.298Z"

```js
Date.parse("2019-08-22T07:24:38.298Z"); // 1566458678298
new Date('2019-08-22T07:24:38.298Z').getTime(); // 1566458678298
new Date('2019-08-22T07:24:38.298Z').valueOf(); // 1566458678298
```

## 返回成指定格式的字符串

```js
new Date('2019-08-22T07:24:38.298Z').toDateString(); // "Thu Aug 22 2019"
new Date('2019-08-22T07:24:38.298Z').toGMTString(); // "Thu, 22 Aug 2019 07:24:38 GMT"
new Date('2019-08-22T07:24:38.298Z').toISOString(); // "2019-08-22T07:24:38.298Z"
new Date('2019-08-22T07:24:38.298Z').toJSON(); // "2019-08-22T07:24:38.298Z"

new Date('2019-08-22T07:24:38.298Z').toLocaleString(); // "2019/8/22 下午3:24:38"
new Date('2019-08-22T07:24:38.298Z').toLocaleDateString(); // "2019/8/22"
new Date('2019-08-22T07:24:38.298Z').toLocaleTimeString(); // "下午3:24:38"

new Date('2019-08-22T07:24:38.298Z').toString(); // "Thu Aug 22 2019 15:24:38 GMT+0800 (中国标准时间)"
new Date('2019-08-22T07:24:38.298Z').toTimeString(); // "15:24:38 GMT+0800 (中国标准时间)"
new Date('2019-08-22T07:24:38.298Z').toUTCString(); // "Thu, 22 Aug 2019 07:24:38 GMT"
new Date('2019-08-22T07:24:38.298Z').valueOf(); // 1566458678298
```

## 其他

### 获取当前月有多少天
`new Date(year, month, 0).getDate()`
```js
new Date(2016, 2, 0).getDate(); // 29
```
