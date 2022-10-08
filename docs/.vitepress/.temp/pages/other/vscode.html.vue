<template><h1 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> vscode</h1>
<p>安装插件
eslint，prettier，vetur</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>"[vue]": {
"editor.defaultFormatter": "octref.vetur"
},
"vetur.format.defaultFormatter.html": "prettier",
"vetur.format.defaultFormatter.js": "prettier-eslint",
"editor.formatOnSave": true,
"editor.tabSize": 2,
"javascript.preferences.quoteStyle": "single",
"prettier.singleQuote": true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="格式化代码时-没有根据eslint格式" tabindex="-1"><a class="header-anchor" href="#格式化代码时-没有根据eslint格式" aria-hidden="true">#</a> 格式化代码时，没有根据eslint格式</h2>
<p>加入配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果发现格式化两次，说明刚刚以上配置和<code>&quot;editor.formatOnSave&quot;: true</code>,注释即可。</p>
<h2 id="出现的问题" tabindex="-1"><a class="header-anchor" href="#出现的问题" aria-hidden="true">#</a> 出现的问题</h2>
<p>有时候出现保存vue文件时，自动保存格式化时，js中单引号 格式成双引号
针对以上问题，可以在配置文件中加入<code>&quot;vetur.format.defaultFormatter.js&quot;: &quot;prettier-eslint&quot;</code></p>
<p><img src="@source/images/20210713a.png" alt="images"></p>
</template>
