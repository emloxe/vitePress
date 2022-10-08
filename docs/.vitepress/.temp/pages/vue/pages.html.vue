<template><h1 id="多页面入口" tabindex="-1"><a class="header-anchor" href="#多页面入口" aria-hidden="true">#</a> 多页面入口</h1>
<p>在根目录下创建 vue.config.js</p>
<p>想要打包入口编写，如下所示即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  pages<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 配置多页面入口</span>
    login<span class="token operator">:</span> <span class="token punctuation">{</span>
      entry<span class="token operator">:</span> <span class="token string">'src/pages/login/login.js'</span><span class="token punctuation">,</span>
      template<span class="token operator">:</span> <span class="token string">'public/login.html'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    index<span class="token operator">:</span> <span class="token punctuation">{</span>
      entry<span class="token operator">:</span> <span class="token string">'src/pages/index/main.js'</span><span class="token punctuation">,</span>
      template<span class="token operator">:</span> <span class="token string">'public/index.html'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
