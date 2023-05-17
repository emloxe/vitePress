# 打包
## vue-cli4设置打包相对路径

修改配置vue.config.js
```js
module.exports = {
 publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
}
```

这样在打包时资源引用路径就是相对路径，而开发过程中是绝对路径

但是这样修改public文件夹下的资源引用会有问题，所以继续改配置
```js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
}

```


## 服务代理
```
  devServer: {
    // 配置webpack服务

    proxy: {
      '/xysrd': {
        target: 'http://dt.hj.cn',
      },
    },
  },
```