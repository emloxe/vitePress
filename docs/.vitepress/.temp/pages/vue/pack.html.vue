<template><h1 id="vue-cli4设置打包相对路径" tabindex="-1"><a class="header-anchor" href="#vue-cli4设置打包相对路径" aria-hidden="true">#</a> vue-cli4设置打包相对路径</h1>
<p>修改配置vue.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 publicPath<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">'././'</span> <span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这样在打包时资源引用路径就是相对路径，而开发过程中是绝对路径</p>
<p>但是这样修改public文件夹下的资源引用会有问题，所以继续改配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  publicPath<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'production'</span> <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
