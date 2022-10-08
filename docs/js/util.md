# 工具类
## 类型监测

检测对象的 JavaScript [Class] 内部类型。

```js
/**
 * 根据传入的数据，判断其类型
 * @param {*} item
 */
export const type = (item) => {
  const reTypeOf = /(?:^\[object\s(.*?)\]$)/;
  return Object.prototype.toString.call(item)
    .replace(reTypeOf, '$1')
    .toLowerCase();
};
type(123) // "number"
type([]) // "array"
type(new Date()) // "date"
type(class b{}) // "function"
```

## 生成随机序列
```js
/**
 * js生成随机序列
 * @param {Number} len 需要产生随机序列的长度
 * @return {String} 随机序列
 */
export function sid(len) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const id = [];
  let i;
  const radix = chars.length;
  if (len) {
    for (i = 0; i < len; i += 1) id[i] = chars[0 | Math.random() * radix];
  } else {
    let r;
    // eslint-disable-next-line no-multi-assign
    id[5] = id[11] = id[17] = id[24] = '-';

    for (i = 0; i < 30; i += 1) {
      if (!id[i]) {
        r = 0 | Math.random() * 16;
        id[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return id.join('');
}
```