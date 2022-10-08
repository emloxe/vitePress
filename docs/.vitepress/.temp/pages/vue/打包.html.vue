<template><h1 id="vue-cli4设置打包相对路径" tabindex="-1"><a class="header-anchor" href="#vue-cli4设置打包相对路径" aria-hidden="true">#</a> vue-cli4设置打包相对路径</h1>
<p>修改配置vue.config.js</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module./Users/zhangwenjin/Desktop/FE/search/src/index.htmlexports = {
 publicPath: process.env.NODE_ENV === 'production' ? '././' : '/',
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这样在打包时资源引用路径就是相对路径，而开发过程中是绝对路径</p>
<p>但是这样修改public文件夹下的资源引用会有问题，所以继续改配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
