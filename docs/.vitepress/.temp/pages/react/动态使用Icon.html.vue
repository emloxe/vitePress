<template><h1 id="动态使用icon" tabindex="-1"><a class="header-anchor" href="#动态使用icon" aria-hidden="true">#</a> 动态使用Icon</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Icon <span class="token keyword">from</span> <span class="token string">"@ant-design/icons"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> iconName <span class="token operator">=</span> <span class="token string">'HomeOutlined'</span><span class="token punctuation">;</span>


<span class="token comment">// 如下调用即可</span>
React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>Icon<span class="token punctuation">[</span>iconName<span class="token punctuation">]</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
