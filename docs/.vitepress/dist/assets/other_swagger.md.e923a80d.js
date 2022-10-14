import{_ as s,c as n,o as a,d as e}from"./app.11fdb72d.js";const D=JSON.parse('{"title":"swagger","description":"","frontmatter":{},"headers":[{"level":2,"title":"parameters","slug":"parameters","link":"#parameters","children":[]}],"relativePath":"other/swagger.md"}'),p={name:"other/swagger.md"},l=e(`<h1 id="swagger" tabindex="-1">swagger <a class="header-anchor" href="#swagger" aria-hidden="true">#</a></h1><h2 id="parameters" tabindex="-1">parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">parameters:</span></span>
<span class="line"><span style="color:#A6ACCD;">- in: path</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: userId</span></span>
<span class="line"><span style="color:#A6ACCD;">  schema:</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: integer</span></span>
<span class="line"><span style="color:#A6ACCD;">  required: true</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: Numeric ID of the user to get</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- in: query</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: offset</span></span>
<span class="line"><span style="color:#A6ACCD;">  schema:</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: integer</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: The number of items to skip before starting to collect the result set</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- in: header</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: X-Request-ID</span></span>
<span class="line"><span style="color:#A6ACCD;">  schema:</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: string</span></span>
<span class="line"><span style="color:#A6ACCD;">    format: uuid</span></span>
<span class="line"><span style="color:#A6ACCD;">  required: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- in: cookie</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: debug</span></span>
<span class="line"><span style="color:#A6ACCD;">  schema:</span></span>
<span class="line"><span style="color:#A6ACCD;">    type: integer</span></span>
<span class="line"><span style="color:#A6ACCD;">    enum: [0, 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">    default: 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- in: formData</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: username</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: Second file name.</span></span>
<span class="line"><span style="color:#A6ACCD;">  required: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- in: body</span></span>
<span class="line"><span style="color:#A6ACCD;">  name: username</span></span>
<span class="line"><span style="color:#A6ACCD;">  description: Second file name.</span></span>
<span class="line"><span style="color:#A6ACCD;">  required: true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[l];function r(t,c,i,A,C,y){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{D as __pageData,m as default};
