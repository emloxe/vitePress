<template><h1 id="sequelize" tabindex="-1"><a class="header-anchor" href="#sequelize" aria-hidden="true">#</a> sequelize</h1>
<h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
Sequelize.STRING                      // VARCHAR(255)
Sequelize.STRING(1234)                // VARCHAR(1234)
Sequelize.STRING.BINARY               // VARCHAR BINARY
Sequelize.TEXT                        // TEXT
Sequelize.TEXT('tiny')                // TINYTEXT
 
Sequelize.INTEGER                     // INTEGER
Sequelize.BIGINT                      // BIGINT
Sequelize.BIGINT(11)                  // BIGINT(11)
 
Sequelize.FLOAT                       // FLOAT
Sequelize.FLOAT(11)                   // FLOAT(11)
Sequelize.FLOAT(11, 12)               // FLOAT(11,12)
 
Sequelize.REAL                        // REAL        PostgreSQL only.
Sequelize.REAL(11)                    // REAL(11)    PostgreSQL only.
Sequelize.REAL(11, 12)                // REAL(11,12) PostgreSQL only.
 
Sequelize.DOUBLE                      // DOUBLE
Sequelize.DOUBLE(11)                  // DOUBLE(11)
Sequelize.DOUBLE(11, 12)              // DOUBLE(11,12)
 
Sequelize.DECIMAL                     // DECIMAL
Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)
 
Sequelize.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
Sequelize.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
Sequelize.DATEONLY                    // DATE without time.
Sequelize.BOOLEAN                     // TINYINT(1)
 
Sequelize.ENUM('value 1', 'value 2')  // An ENUM with allowed values 'value 1' and 'value 2'
Sequelize.ARRAY(Sequelize.TEXT)       // Defines an array. PostgreSQL only.
 
Sequelize.JSON                        // JSON column. PostgreSQL only.
Sequelize.JSONB                       // JSONB column. PostgreSQL only.
 
Sequelize.BLOB                        // BLOB (bytea for PostgreSQL)
Sequelize.BLOB('tiny')                // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)
 
Sequelize.UUID                        // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)
 
Sequelize.RANGE(Sequelize.INTEGER)    // Defines int4range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.BIGINT)     // Defined int8range range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATE)       // Defines tstzrange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DATEONLY)   // Defines daterange range. PostgreSQL only.
Sequelize.RANGE(Sequelize.DECIMAL)    // Defines numrange range. PostgreSQL only.
 
Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // Defines array of tstzrange ranges. PostgreSQL only.
 
Sequelize.GEOMETRY                    // Spatial column.  PostgreSQL (with PostGIS) or MySQL only.
Sequelize.GEOMETRY('POINT')           // Spatial column with geometry type. PostgreSQL (with PostGIS) or MySQL only.


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><h3 id="校验" tabindex="-1"><a class="header-anchor" href="#校验" aria-hidden="true">#</a> 校验</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>validate: {
  is: /^[a-z]+$/i,          // 匹配这个 RegExp
  is: ["^[a-z]+$",'i'],     // 与上面相同,但是以字符串构造 RegExp
  not: /^[a-z]+$/i,         // 不匹配 RegExp
  not: ["^[a-z]+$",'i'],    // 与上面相同,但是以字符串构造 RegExp
  isEmail: true,            // 检查 email 格式 (foo@bar.com)
  isUrl: true,              // 检查 url 格式 (http://foo.com)
  isIP: true,               // 检查 IPv4 (129.89.23.1) 或 IPv6 格式
  isIPv4: true,             // 检查 IPv4 格式 (129.89.23.1)
  isIPv6: true,             // 检查 IPv6 格式
  isAlpha: true,            // 只允许字母
  isAlphanumeric: true,     // 将仅允许使用字母数字,因此 '_abc' 将失败
  isNumeric: true,          // 只允许数字
  isInt: true,              // 检查有效的整数
  isFloat: true,            // 检查有效的浮点数
  isDecimal: true,          // 检查任何数字
  isLowercase: true,        // 检查小写
  isUppercase: true,        // 检查大写
  notNull: true,            // 不允许为空
  isNull: true,             // 只允许为空
  notEmpty: true,           // 不允许空字符串
  equals: 'specific value', // 仅允许 'specific value'
  contains: 'foo',          // 强制特定子字符串
  notIn: [['foo', 'bar']],  // 检查值不是这些之一
  isIn: [['foo', 'bar']],   // 检查值是其中之一
  notContains: 'bar',       // 不允许特定的子字符串
  len: [2,10],              // 仅允许长度在2到10之间的值
  isUUID: 4,                // 只允许 uuid
  isDate: true,             // 只允许日期字符串
  isAfter: "2011-11-05",    // 仅允许特定日期之后的日期字符串
  isBefore: "2011-11-05",   // 仅允许特定日期之前的日期字符串
  max: 23,                  // 仅允许值 &lt;= 23
  min: 23,                  // 仅允许值 >= 23
  isCreditCard: true,       // 检查有效的信用卡号
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="遇到的问题" tabindex="-1"><a class="header-anchor" href="#遇到的问题" aria-hidden="true">#</a> 遇到的问题</h2>
<p><a href="https://www.chaoswork.cn/1064.html" target="_blank" rel="noopener noreferrer">sequelize引起mysql错误：Too many keys specified. Max 64 keys allowed<OutboundLink/></a></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>SELECT CONCAT('ALTER TABLE ',i.TABLE_NAME,' DROP INDEX ',i.INDEX_NAME,' ;') 
FROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = 'bianjizutai' AND i.INDEX_NAME &lt;> 'PRIMARY';
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="文档-1" tabindex="-1"><a class="header-anchor" href="#文档-1" aria-hidden="true">#</a> 文档</h2>
<p>https://www.sequelize.com.cn/</p>
</template>
