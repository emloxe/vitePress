<template><h1 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> router</h1>
<h2 id="v3" tabindex="-1"><a class="header-anchor" href="#v3" aria-hidden="true">#</a> v3</h2>
<p>main.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  router<span class="token punctuation">,</span>
  store<span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>router/index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'../Tabs/Home.vue'</span><span class="token punctuation">;</span>
<span class="token operator">...</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
    component<span class="token operator">:</span> Home<span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">'/manager-index'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/manager-index'</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> InputData
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// {</span>
      <span class="token comment">//   path: '/input-data',</span>
      <span class="token comment">//   component: InputData</span>
      <span class="token comment">// },</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">'/work'</span><span class="token punctuation">,</span>
        component<span class="token operator">:</span> Work
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/rest-passworld'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'Login'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/ResetPassword.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/cash-register'</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'CashRegister'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/CashRegister.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>app.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>嵌套路由
示例为 vant tab切换嵌套
home.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span> <span class="token attr-name">route</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar-item</span> <span class="token attr-name">replace</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/manager-index<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wap-home-o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        首页
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar-item</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- &lt;van-tabbar-item replace to="/input-data" icon="search">
        录入
      &lt;/van-tabbar-item> --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar-item</span> <span class="token attr-name">replace</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/work<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>apps-o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>工作台<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar-item</span> <span class="token attr-name">replace</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/report-form<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cashier-o<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        报表
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-tabbar-item</span> <span class="token attr-name">replace</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/user<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contact<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        我的
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-tabbar</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/cash-register<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/add-project'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/edit-project'</span><span class="token punctuation">,</span> query<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="v4" tabindex="-1"><a class="header-anchor" href="#v4" aria-hidden="true">#</a> v4</h2>
<h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span><span class="token punctuation">;</span>

<span class="token comment">// 白名单</span>
<span class="token keyword">const</span> whiteList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/login'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 路由前置守卫
 */</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 存在 token ，进入主页</span>
  <span class="token comment">// if (store.state.user.token) {</span>
  <span class="token comment">// 快捷访问</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">===</span> <span class="token string">'/login'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 没有token的情况下，可以进入白名单</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>whiteList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>path<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="路由跳转" tabindex="-1"><a class="header-anchor" href="#路由跳转" aria-hidden="true">#</a> 路由跳转</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> router<span class="token punctuation">,</span> <span class="token punctuation">{</span> resetRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/router'</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
