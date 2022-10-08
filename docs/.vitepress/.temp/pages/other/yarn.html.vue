<template><h1 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h1>
<h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2>
<p>初始化一个新项目</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>添加依赖包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>将依赖项添加到不同依赖项类别中</p>
<p>分别添加到 <code>devDependencies</code>、<code>peerDependencies</code> 和 <code>optionalDependencies</code> 类别中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn add [package] --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>升级依赖包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>移除依赖包</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn remove [package]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>安装项目的全部依赖</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或者</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>yarn install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
