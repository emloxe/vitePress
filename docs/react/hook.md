# hook

hook 采用函数式创建，不用采用class方式

在函数内部，生命周期采用如下方式
```js
import React, { useState, useEffect } from "react";

function hook() {

  useEffect(() => {
    console.log("每次都会执行");
  });
  useEffect(() => {
    console.log("只执行一次");
  }, []);
  useEffect(() => {
    console.log("count值发生了改变");
  }, [count]); // count发生改变,立即触发该生命周期
}

```



state内部数据

```js
const [datas, setDatas] = useState([]);
```

数据传递
父组件中的数据
```js
function hook(props) {

}
```


## 参考文档
http://www.ruanyifeng.com/blog/2019/09/react-hooks.html
https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html



