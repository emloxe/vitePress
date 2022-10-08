<template><h1 id="swagger" tabindex="-1"><a class="header-anchor" href="#swagger" aria-hidden="true">#</a> swagger</h1>
<h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> parameters</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>parameters:
- in: path
  name: userId
  schema:
    type: integer
  required: true
  description: Numeric ID of the user to get

- in: query
  name: offset
  schema:
    type: integer
  description: The number of items to skip before starting to collect the result set

- in: header
  name: X-Request-ID
  schema:
    type: string
    format: uuid
  required: true

- in: cookie
  name: debug
  schema:
    type: integer
    enum: [0, 1]
    default: 0

- in: formData
  name: username
  description: Second file name.
  required: true

- in: body
  name: username
  description: Second file name.
  required: true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div></template>
