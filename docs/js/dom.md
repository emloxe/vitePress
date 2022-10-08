# HTML DOM 元素对象


## 获取位置

获得匹配元素相对父元素的偏移

```js
left = el.offsetLeft;
top = el.offsetTop;
```

获得匹配元素相对文档的偏移

```js
function getOffset (el) {
  const box = el.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset - document.documentElement.clientTop,
    left: box.left + window.pageXOffset - document.documentElement.clientLeft
  }
}
```

## 事件

### 自定义事件的绑定
```js
// 添加一个适当的事件监听器
el.addEventListener("custom-event", function(e) { process(e.detail) })

if (window.CustomEvent) {
  const event = new CustomEvent('custom-event', {detail: {key1: 'data'}});
} else {
  const event = document.createEvent('CustomEvent');
  event.initCustomEvent('custom-event', true, true, {key1: 'data'});
}
el.dispatchEvent(event);
```


### 事件委托点击
```js
/**
 * 根据事件参数获取冒泡的所有元素
 * @param {Event} e
 */
export function eventPath(e) {
  /** 兼容性
     * e.path: chrome opear
     * e.composedPath: safari firfox
     */
  const path = e.path || (e.composedPath && e.composedPath());
  if (path) {
    return path.concat([window]);
  }

  /**
     * ie11 , edge
     */
  return [e.target].concat(getParents(e.target), [window]);
}
```

```js
/**
 * 事件委托
 * @param {HTMLElement} dom 元素
 * @param {String} eventName 事件名称
 * @param {String} targetName 可以传入 name、id #ele、class 。ele
 * @param {Function} cb 回调函数
 */
export const eventDelegation = (dom, eventName, targetName, cb) => {
  function isTarget(ele, targetName) {
    if (/^#/.test(targetName)) {
      const name = targetName.slice(1, -1);
      if (ele.id === name) {
        return true;
      }
      return false;
    } if (/^\./.test(targetName)) {
      const name = targetName.slice(1, targetName.length);
      if (ele.classList.contains(name)) {
        return true;
      }
      return false;
    }
    if (ele.nodeName === targetName.toUpperCase()) {
      return true;
    }
    return false;
  }

  const handle = (event) => {
    let target = null;
    for (let i = 0, len = eventPath(event).length; i < len; i += 1) {
      const ele = event.path[i];
      if (ele === dom) {
        break;
      }
      if (isTarget(ele, targetName)) {
        target = ele;
        break;
      }
    }
    if (target) {
      cb && cb(event, target);
    }
  };

  dom.addEventListener(eventName, handle);

  return {
    dispose: () => {
      dom.removeEventListener(eventName, handle);
    },
  };
};
```

## 解析字符串为 DOM 节点数组
```js
function parseHTML(string) {
  const context = document.implementation.createHTMLDocument();

  // Set the base href for the created document so any parsed elements with URLs
  // are based on the document's URL
  const base = context.createElement('base');
  base.href = document.location.href;
  context.head.appendChild(base);

  context.body.innerHTML = string;
  return context.body.children;
}
```


# 资料
https://github.com/nefe/You-Dont-Need-jQuery/blob/master/README.zh-CN.md

