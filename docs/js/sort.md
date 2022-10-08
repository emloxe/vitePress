# 排序

## 快速排序
```js
function qsort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const left = [];
  const right = [];
  const first = arr.shift();
  arr.forEach((v) => {
    if (v > first) {
      right.push(v);
    } else {
      left.push(v);
    }
  });
  return [...sortData(left), first, ...sortData(right)];
}
```