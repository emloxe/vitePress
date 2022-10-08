<template><h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<h3 id="以指定字符结尾" tabindex="-1"><a class="header-anchor" href="#以指定字符结尾" aria-hidden="true">#</a> 以指定字符结尾</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token string">'jpg'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">$</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token string">'i'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'123.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
re<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'123.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果是判断'.jpg'结尾，<code>const type = '\.jpg';</code></p>
<h3 id="字符串中是否包含指定字符" tabindex="-1"><a class="header-anchor" href="#字符串中是否包含指定字符" aria-hidden="true">#</a> 字符串中是否包含指定字符</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"Visit Runoob!"</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Runoob</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> n <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string">'Runoob'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="常用的正则验证" tabindex="-1"><a class="header-anchor" href="#常用的正则验证" aria-hidden="true">#</a> 常用的正则验证</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 手机验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkMobile</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[3-9][0-9]{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'请输入手机号码'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'手机号码格式不正确'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证通过'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 密码验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkPassword</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'请输入密码'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'密码长度不能小于6位'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证通过'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 昵称验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkNickname</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'请输入昵称'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'昵称太短了'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'昵称太长了'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证通过'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 密码验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkNewPassword</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'请输入密新码'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'新密码长度不能小于6位'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证通过'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 验证码验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkVerifyCode</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\d{4}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'请输入验证码'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证码不正确'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证通过'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 身份证验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkIdCard</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\d{15}|\d{18}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'请输入身份证号码'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'身份证必须是15或18位数字'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证通过'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 银行卡验证
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">checkBankCard</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([1-9]{1})(\d{14}|\d{15}|\d{16}|\d{18})$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'请输入银行卡号'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'银行卡号格式不正确'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token string">'验证通过'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="不常用" tabindex="-1"><a class="header-anchor" href="#不常用" aria-hidden="true">#</a> 不常用</h2>
<p>台湾身份证
<code>/^[a-zA-Z][0-9]{9}$/</code></p>
<p>澳门身份证
<code>/^[1|5|7]\d{6}[(\d)]{3}$/</code></p>
<p>香港身份证
<code>/^[a-zA-Z]\d{6}\([\dA]\)$/</code></p>
<p>护照（包含香港、澳门）
<code>/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/</code></p>
<p>身份证号, 支持1/2代(15位/18位数字)
<code>/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/</code></p>
<p>座机(tel phone)电话(国内),如: 0341-86091234
<code>/^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/</code></p>
<p>email(邮箱)
<code>/^(([^&lt;&gt;()[\]\\.,;:\s@&quot;]+(\.[^&lt;&gt;()[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/</code></p>
<p>date(日期)
<code>/^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/</code></p>
<p>手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
<code>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/</code></p>
<p>手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
<code>/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/</code></p>
<p>银行卡号（10到30位, 覆盖对公/私账户, 参考<a href="https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1" target="_blank" rel="noopener noreferrer">微信支付<OutboundLink/></a>）
<code>/^[1-9]\d{9,29}$/</code></p>
<p>数字/货币金额 (只支持正数、不支持校验千分位分隔符)
<code>/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/</code></p>
<p>数字/货币金额（支持负数、千分位分隔符）
<code>/^-?\d+(,\d{3})*(\.\d{1,2})?$/</code></p>
<p>车牌号(新能源+非新能源)
<code>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/</code></p>
<p>车牌号(非新能源)
<code>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/</code></p>
<p>车牌号(新能源)
<code>/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/</code></p>
<p>手机机身码(IMEI)
<code>/^\d{15,17}$/</code></p>
<p>火车车次
<code>/^[GCDZTSPKXLY1-9]\d{1,4}$/</code></p>
<p>统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
<code>/^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/</code></p>
<p>统一社会信用代码
<code>/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/</code></p>
<p>网址(url,支持端口和&quot;?+参数&quot;和&quot;#+参数)
<code>/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?$/</code></p>
<p>必须带端口号的网址(或ip)
<code>/^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/</code></p>
<p>英文姓名
<code>/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/</code></p>
<p>中文姓名
<code>/^(?:[\u4e00-\u9fa5·]{2,16})$/</code></p>
<p>数字和英文字母组成，并且同时含有数字和英文字母
<code>/^(?=.*[a-zA-Z])(?=.*\d).+$/</code></p>
<p>中文和数字
<code>/^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/</code></p>
<p>12小时制时间（hh:mm:ss）
<code>/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/</code></p>
<p>24小时制时间（HH:mm:ss）
<code>/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/</code></p>
<p>股票代码(A股)
<code>/^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/</code></p>
<p>window&quot;文件夹&quot;路径
<code>/^[a-zA-Z]:\\(?:\w+\\?)*$/</code></p>
<p>linux文件路径
<code>/^\/(?:[^/]+\/)*[^/]+$/</code></p>
<p>linux文件夹路径
<code>/^\/(?:[^/]+\/)*$/</code></p>
<p>linux&quot;隐藏文件&quot;路径
<code>/^\/(?:[^/]+\/)*\.[^/]*/</code></p>
<p>子网掩码
<code>/^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/</code></p>
<p>迅雷链接
<code>/^thunderx?:\/\/[a-zA-Z\d]+=$/</code></p>
<p>mac地址
<code>/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i</code></p>
<p>java包名
<code>/^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/</code></p>
<p>邮政编码(中国)
<code>/^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/</code></p>
<p>微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线
<code>/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/</code></p>
<p>GUID/UUID
<code>/^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i</code></p>
<p>md5格式(32位)
<code>/^([a-f\d]{32}|[A-F\d]{32})$/</code></p>
<p>大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数
<code>/^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/</code></p>
<p>版本号(version)格式必须为X.Y.Z
<code>/^\d+(?:\.\d+){2}$/</code></p>
<p>图片(image)链接地址（图片格式可按需增删）
<code>/^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i</code></p>
<p>视频(video)链接地址（视频格式可按需增删）
<code>/^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i</code></p>
<p>16进制颜色
<code>/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/</code></p>
<p>base64格式
<code>/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&amp;',()*+;=\-._~:@/?%\s]*?)\s*$/i</code></p>
<p>ip-v4[:端口]
<code>/^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/</code></p>
<p>密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
<code>/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&amp;*? ])\S*$/</code></p>
<p>用户名校验，4到16位（字母，数字，下划线，减号）
<code>/^[a-zA-Z0-9_-]{4,16}$/</code></p>
<p>大写英文字母
<code>/^[A-Z]+$/</code></p>
<p>小写英文字母组成
<code>/^[a-z]+$/</code></p>
<p>英文字母
<code>/^[a-zA-Z]+$/</code></p>
<p>数字和字母组成
<code>/^[A-Za-z0-9]+$/</code></p>
<p>qq号格式正确
<code>/^[1-9][0-9]{4,10}$/</code></p>
<p>数字
<code>/^\d{1,}$/</code></p>
<p>小数
<code>/^\d+\.\d+$/</code></p>
<p>中文/汉字
<code>/^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/</code></p>
<p>帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合
<code>/^[a-zA-Z]\w{4,15}$/</code></p>
</template>
