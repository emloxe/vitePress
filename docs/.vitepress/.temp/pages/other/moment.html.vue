<template><h1 id="moment" tabindex="-1"><a class="header-anchor" href="#moment" aria-hidden="true">#</a> moment</h1>
<p>配置中文</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>moment<span class="token punctuation">.</span><span class="token function">locale</span><span class="token punctuation">(</span><span class="token string">'zh'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	months<span class="token operator">:</span> <span class="token string">'一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'_'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	monthsShort<span class="token operator">:</span> <span class="token string">'1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'_'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	weekdays<span class="token operator">:</span> <span class="token string">'星期日_星期一_星期二_星期三_星期四_星期五_星期六'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'_'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	weekdaysShort<span class="token operator">:</span> <span class="token string">'周日_周一_周二_周三_周四_周五_周六'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'_'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	weekdaysMin<span class="token operator">:</span> <span class="token string">'日_一_二_三_四_五_六'</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'_'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	longDateFormat<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token constant">LT</span><span class="token operator">:</span> <span class="token string">'Ah点mm分'</span><span class="token punctuation">,</span>
		<span class="token constant">LTS</span><span class="token operator">:</span> <span class="token string">'Ah点m分s秒'</span><span class="token punctuation">,</span>
		<span class="token constant">L</span><span class="token operator">:</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">,</span>
		<span class="token constant">LL</span><span class="token operator">:</span> <span class="token string">'YYYY年MMMD日'</span><span class="token punctuation">,</span>
		<span class="token constant">LLL</span><span class="token operator">:</span> <span class="token string">'YYYY年MMMD日Ah点mm分'</span><span class="token punctuation">,</span>
		<span class="token constant">LLLL</span><span class="token operator">:</span> <span class="token string">'YYYY年MMMD日ddddAh点mm分'</span><span class="token punctuation">,</span>
		l<span class="token operator">:</span> <span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">,</span>
		ll<span class="token operator">:</span> <span class="token string">'YYYY年MMMD日'</span><span class="token punctuation">,</span>
		lll<span class="token operator">:</span> <span class="token string">'YYYY年MMMD日Ah点mm分'</span><span class="token punctuation">,</span>
		llll<span class="token operator">:</span> <span class="token string">'YYYY年MMMD日ddddAh点mm分'</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	meridiemParse<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">凌晨|早上|上午|中午|下午|晚上</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>

	relativeTime<span class="token operator">:</span> <span class="token punctuation">{</span>
		future<span class="token operator">:</span> <span class="token string">'%s内'</span><span class="token punctuation">,</span>
		past<span class="token operator">:</span> <span class="token string">'%s前'</span><span class="token punctuation">,</span>
		s<span class="token operator">:</span> <span class="token string">'几秒'</span><span class="token punctuation">,</span>
		m<span class="token operator">:</span> <span class="token string">'1分钟'</span><span class="token punctuation">,</span>
		mm<span class="token operator">:</span> <span class="token string">'%d分钟'</span><span class="token punctuation">,</span>
		h<span class="token operator">:</span> <span class="token string">'1小时'</span><span class="token punctuation">,</span>
		hh<span class="token operator">:</span> <span class="token string">'%d小时'</span><span class="token punctuation">,</span>
		d<span class="token operator">:</span> <span class="token string">'1天'</span><span class="token punctuation">,</span>
		dd<span class="token operator">:</span> <span class="token string">'%d天'</span><span class="token punctuation">,</span>
		<span class="token constant">M</span><span class="token operator">:</span> <span class="token string">'1个月'</span><span class="token punctuation">,</span>
		<span class="token constant">MM</span><span class="token operator">:</span> <span class="token string">'%d个月'</span><span class="token punctuation">,</span>
		y<span class="token operator">:</span> <span class="token string">'1年'</span><span class="token punctuation">,</span>
		yy<span class="token operator">:</span> <span class="token string">'%d年'</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>格式化</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'YYYY-MM-DD'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
