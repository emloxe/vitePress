# 多页面入口


在根目录下创建 vue.config.js

想要打包入口编写，如下所示即可
```js
module.exports = {
  pages: { // 配置多页面入口
    login: {
      entry: 'src/pages/login/login.js',
      template: 'public/login.html',
    },
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
    },
  },
};
```