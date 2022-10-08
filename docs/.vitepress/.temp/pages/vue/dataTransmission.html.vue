<template><h1 id="数据传递" tabindex="-1"><a class="header-anchor" href="#数据传递" aria-hidden="true">#</a> 数据传递</h1>
<h2 id="父组件向子组件" tabindex="-1"><a class="header-anchor" href="#父组件向子组件" aria-hidden="true">#</a> 父组件向子组件</h2>
<p>父组件向子组件传递主要通过Prop，在父层级修改相关的数据，也会显示到子组件中。</p>
<CodeGroup>
  <CodeGroupItem title="父组件" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>子组件<span class="token punctuation">"</span></span> <span class="token attr-name">:title2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>  <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Parent'</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>Child<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      top<span class="token operator">:</span> <span class="token string">'副标题'</span><span class="token punctuation">,</span>
      arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'列表1列表1列表1列表1'</span><span class="token punctuation">,</span> <span class="token string">'列表2列表2列表2列表2'</span><span class="token punctuation">,</span> <span class="token string">'列表3列表3列表3列表3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="子组件" >
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{title2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index +1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{index}}. {{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Child'</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> String<span class="token punctuation">,</span>
    title2<span class="token operator">:</span> String<span class="token punctuation">,</span>
    list<span class="token operator">:</span> Array
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p>最终展示效果如下
<img src="@source/images/2019071401.png" alt="images"></p>
<p>在以上代码中，父组件引入了子组件，并通过以下形式传递</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>子组件<span class="token punctuation">"</span></span> <span class="token attr-name">:title2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span>  <span class="token attr-name">:list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arr<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>title是静态属性，直接传递的是<code>子组件</code>,而<code>:title2</code>和<code>:list</code>是动态的值
实际是传递是是data中的数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    top<span class="token operator">:</span> <span class="token string">'副标题'</span><span class="token punctuation">,</span>
    arr<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'列表1列表1列表1列表1'</span><span class="token punctuation">,</span> <span class="token string">'列表2列表2列表2列表2'</span><span class="token punctuation">,</span> <span class="token string">'列表3列表3列表3列表3'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在子组件中，通过props接受数据，键是接收的变量名称，值是约定参数类型</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>props<span class="token operator">:</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> String<span class="token punctuation">,</span>
  title2<span class="token operator">:</span> String<span class="token punctuation">,</span>
  list<span class="token operator">:</span> Array
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以上子组件就可以拿到数据了</p>
<h2 id="子组件向父组件" tabindex="-1"><a class="header-anchor" href="#子组件向父组件" aria-hidden="true">#</a> 子组件向父组件</h2>
<h3 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h3>
<p>所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。
额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告
所以要修改子组件的显示发数据，是需要在父组件中修改。子组件可以进行事件的派发，而父组件对派发是事件进行监听即可。</p>
<CodeGroup>
  <CodeGroupItem title="父组件" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>add-num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addNum<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Parent'</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>Child<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      number<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="子组件" >
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>add-num<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Child'</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    num<span class="token operator">:</span> Number<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p>以上代码中number数据通过prop传递给子组件，子组件中有个按钮，点击按钮需要对数据递增，因为数据是父组件的数据，所以修改的方式也要在父组件中完成。
父组件中添加事件的监听<code>add-num</code>，监听到事件触发<code>methods</code>中<code>addNum</code>方法</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-on:</span>add-num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addNum<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>子组件中进行触发</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>add-num<span class="token punctuation">'</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果需要给触发的事件传递参数，可以在子组件中修改成如下方式</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$emit(<span class="token punctuation">'</span>add-num<span class="token punctuation">'</span>, 1, 1)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>父组件处理函数，直接可以进行接受</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">addNum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h3>
<p>以上方式，父组件通过prop传递了事件'add-num'，其实传递也是可以的，可以直接采用</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>this.$parent.$emit('add-num')
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>写法就变成以下这种</p>
<CodeGroup>
  <CodeGroupItem title="父组件" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Parent'</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>Child<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      number<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">+</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'add-num'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>addNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="子组件" >
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickHandle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Child'</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    num<span class="token operator">:</span> Number<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">clickHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$parent<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'add-num'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p>这个方式比较适合，多个组件都需触发一个事件，就不需要父组件将方法一个一个传入了。</p>
<h3 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h3>
<p>以上两种方式，都可以将子组件内部的数据传递出去。
接下来这种方式，主要是在子组件中将从父组件中的传递过来的数据直接修改</p>
<p>父组件在向下传递参数的时候，带上了修饰符<code>.sync</code>
在子组件中 <code>this.$emit('update:isShow', newValue)</code>，可以直接修改 <code>childIsShow</code>的值。</p>
<CodeGroup>
  <CodeGroupItem title="父组件" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:isShow.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>childIsShow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Parent'</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>Child<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      childIsShow<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="子组件" >
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickHandle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{isShow}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Child'</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    isShow<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">clickHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'update:isShow'</span><span class="token punctuation">,</span> <span class="token operator">!</span>isShow<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="越级向下传递数据" tabindex="-1"><a class="header-anchor" href="#越级向下传递数据" aria-hidden="true">#</a> 越级向下传递数据</h2>
<p><code>provide</code> / <code>inject</code>
这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的时间里始终生效。</p>
<blockquote>
<p><code>provide</code> 和 <code>inject</code> 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父级组件提供 'foo'</span>
<span class="token keyword">var</span> Provider <span class="token operator">=</span> <span class="token punctuation">{</span>
  provide<span class="token operator">:</span> <span class="token punctuation">{</span>
    foo<span class="token operator">:</span> <span class="token string">'bar'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token comment">// 子组件注入 'foo'</span>
<span class="token keyword">var</span> Child <span class="token operator">=</span> <span class="token punctuation">{</span>
  inject<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>foo<span class="token punctuation">)</span> <span class="token comment">// => "bar"</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="多层级组件触发" tabindex="-1"><a class="header-anchor" href="#多层级组件触发" aria-hidden="true">#</a> 多层级组件触发</h2>
<p>element 对事件进行了封装，用mixins混入，可以无限向上根据组件名称冒泡查询，也可以向下查询，所有的组件都可以共用这个方法，截取的代码如下</p>
<p>emitter.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> child<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> componentName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      child<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">broadcast</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> <span class="token punctuation">[</span>componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span>params<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 用于vue组件的mixins
 * <span class="token keyword">@minxin</span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 向父组件派发事件
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">componentName</span> 子组件componentName
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 触发的事件名称
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">params</span> 传递的数据
     */</span>
    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> parent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$parent <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">;</span>
      <span class="token keyword">let</span> name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName<span class="token punctuation">;</span>

      <span class="token keyword">while</span> <span class="token punctuation">(</span>parent <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token operator">!</span>name <span class="token operator">||</span> name <span class="token operator">!==</span> componentName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent <span class="token operator">=</span> parent<span class="token punctuation">.</span>$parent<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          name <span class="token operator">=</span> parent<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>componentName<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parent<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 向子组件派发事件
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">componentName</span> 子组件componentName
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 触发的事件名称
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">params</span> 传递的数据
     */</span>
    <span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token parameter">componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">broadcast</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> componentName<span class="token punctuation">,</span> eventName<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>总体代码再次修改成如下方式</p>
<CodeGroup>
  <CodeGroupItem title="父组件" active>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:num</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Parent'</span><span class="token punctuation">,</span>
  componentName<span class="token operator">:</span> <span class="token string">'Parent'</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>Child<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      number<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>number <span class="token operator">+</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'add-num'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>addNum<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="子组件" >
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{num}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clickHandle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> emitter <span class="token keyword">from</span> <span class="token string">'emitter'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">'Child'</span><span class="token punctuation">,</span>
  componentName<span class="token operator">:</span> <span class="token string">'Child'</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    num<span class="token operator">:</span> Number<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  mixins<span class="token operator">:</span> <span class="token punctuation">[</span>emitter<span class="token punctuation">]</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">clickHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'Parent'</span><span class="token punctuation">,</span> <span class="token string">'add-num'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
</template>
