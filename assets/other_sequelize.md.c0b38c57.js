import{_ as s,c as n,o as a,d as e}from"./app.0c735332.js";const y=JSON.parse('{"title":"sequelize","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u6863","slug":"\u6587\u6863","link":"#\u6587\u6863","children":[{"level":3,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B","link":"#\u6570\u636E\u7C7B\u578B","children":[]},{"level":3,"title":"\u6821\u9A8C","slug":"\u6821\u9A8C","link":"#\u6821\u9A8C","children":[]}]},{"level":2,"title":"\u9047\u5230\u7684\u95EE\u9898","slug":"\u9047\u5230\u7684\u95EE\u9898","link":"#\u9047\u5230\u7684\u95EE\u9898","children":[]},{"level":2,"title":"\u6587\u6863","slug":"\u6587\u6863-1","link":"#\u6587\u6863-1","children":[]}],"relativePath":"other/sequelize.md"}'),l={name:"other/sequelize.md"},p=e(`<h1 id="sequelize" tabindex="-1">sequelize <a class="header-anchor" href="#sequelize" aria-hidden="true">#</a></h1><h2 id="\u6587\u6863" tabindex="-1">\u6587\u6863 <a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a></h2><h3 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.STRING                      // VARCHAR(255)</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.STRING(1234)                // VARCHAR(1234)</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.STRING.BINARY               // VARCHAR BINARY</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.TEXT                        // TEXT</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.TEXT(&#39;tiny&#39;)                // TINYTEXT</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.INTEGER                     // INTEGER</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.BIGINT                      // BIGINT</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.BIGINT(11)                  // BIGINT(11)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.FLOAT                       // FLOAT</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.FLOAT(11)                   // FLOAT(11)</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.FLOAT(11, 12)               // FLOAT(11,12)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.REAL                        // REAL        PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.REAL(11)                    // REAL(11)    PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.REAL(11, 12)                // REAL(11,12) PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DOUBLE                      // DOUBLE</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DOUBLE(11)                  // DOUBLE(11)</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DOUBLE(11, 12)              // DOUBLE(11,12)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DECIMAL                     // DECIMAL</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DECIMAL(10, 2)              // DECIMAL(10,2)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.DATEONLY                    // DATE without time.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.BOOLEAN                     // TINYINT(1)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.ENUM(&#39;value 1&#39;, &#39;value 2&#39;)  // An ENUM with allowed values &#39;value 1&#39; and &#39;value 2&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.ARRAY(Sequelize.TEXT)       // Defines an array. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.JSON                        // JSON column. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.JSONB                       // JSONB column. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.BLOB                        // BLOB (bytea for PostgreSQL)</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.BLOB(&#39;tiny&#39;)                // TINYBLOB (bytea for PostgreSQL. Other options are medium and long)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.UUID                        // UUID datatype for PostgreSQL and SQLite, CHAR(36) BINARY for MySQL (use defaultValue: Sequelize.UUIDV1 or Sequelize.UUIDV4 to make sequelize generate the ids automatically)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.RANGE(Sequelize.INTEGER)    // Defines int4range range. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.RANGE(Sequelize.BIGINT)     // Defined int8range range. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.RANGE(Sequelize.DATE)       // Defines tstzrange range. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.RANGE(Sequelize.DATEONLY)   // Defines daterange range. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.RANGE(Sequelize.DECIMAL)    // Defines numrange range. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.ARRAY(Sequelize.RANGE(Sequelize.DATE)) // Defines array of tstzrange ranges. PostgreSQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.GEOMETRY                    // Spatial column.  PostgreSQL (with PostGIS) or MySQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;">Sequelize.GEOMETRY(&#39;POINT&#39;)           // Spatial column with geometry type. PostgreSQL (with PostGIS) or MySQL only.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u6821\u9A8C" tabindex="-1">\u6821\u9A8C <a class="header-anchor" href="#\u6821\u9A8C" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">validate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  is: /^[a-z]+$/i,          // \u5339\u914D\u8FD9\u4E2A RegExp</span></span>
<span class="line"><span style="color:#A6ACCD;">  is: [&quot;^[a-z]+$&quot;,&#39;i&#39;],     // \u4E0E\u4E0A\u9762\u76F8\u540C,\u4F46\u662F\u4EE5\u5B57\u7B26\u4E32\u6784\u9020 RegExp</span></span>
<span class="line"><span style="color:#A6ACCD;">  not: /^[a-z]+$/i,         // \u4E0D\u5339\u914D RegExp</span></span>
<span class="line"><span style="color:#A6ACCD;">  not: [&quot;^[a-z]+$&quot;,&#39;i&#39;],    // \u4E0E\u4E0A\u9762\u76F8\u540C,\u4F46\u662F\u4EE5\u5B57\u7B26\u4E32\u6784\u9020 RegExp</span></span>
<span class="line"><span style="color:#A6ACCD;">  isEmail: true,            // \u68C0\u67E5 email \u683C\u5F0F (foo@bar.com)</span></span>
<span class="line"><span style="color:#A6ACCD;">  isUrl: true,              // \u68C0\u67E5 url \u683C\u5F0F (http://foo.com)</span></span>
<span class="line"><span style="color:#A6ACCD;">  isIP: true,               // \u68C0\u67E5 IPv4 (129.89.23.1) \u6216 IPv6 \u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  isIPv4: true,             // \u68C0\u67E5 IPv4 \u683C\u5F0F (129.89.23.1)</span></span>
<span class="line"><span style="color:#A6ACCD;">  isIPv6: true,             // \u68C0\u67E5 IPv6 \u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  isAlpha: true,            // \u53EA\u5141\u8BB8\u5B57\u6BCD</span></span>
<span class="line"><span style="color:#A6ACCD;">  isAlphanumeric: true,     // \u5C06\u4EC5\u5141\u8BB8\u4F7F\u7528\u5B57\u6BCD\u6570\u5B57,\u56E0\u6B64 &#39;_abc&#39; \u5C06\u5931\u8D25</span></span>
<span class="line"><span style="color:#A6ACCD;">  isNumeric: true,          // \u53EA\u5141\u8BB8\u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">  isInt: true,              // \u68C0\u67E5\u6709\u6548\u7684\u6574\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  isFloat: true,            // \u68C0\u67E5\u6709\u6548\u7684\u6D6E\u70B9\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  isDecimal: true,          // \u68C0\u67E5\u4EFB\u4F55\u6570\u5B57</span></span>
<span class="line"><span style="color:#A6ACCD;">  isLowercase: true,        // \u68C0\u67E5\u5C0F\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">  isUppercase: true,        // \u68C0\u67E5\u5927\u5199</span></span>
<span class="line"><span style="color:#A6ACCD;">  notNull: true,            // \u4E0D\u5141\u8BB8\u4E3A\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">  isNull: true,             // \u53EA\u5141\u8BB8\u4E3A\u7A7A</span></span>
<span class="line"><span style="color:#A6ACCD;">  notEmpty: true,           // \u4E0D\u5141\u8BB8\u7A7A\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">  equals: &#39;specific value&#39;, // \u4EC5\u5141\u8BB8 &#39;specific value&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  contains: &#39;foo&#39;,          // \u5F3A\u5236\u7279\u5B9A\u5B50\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">  notIn: [[&#39;foo&#39;, &#39;bar&#39;]],  // \u68C0\u67E5\u503C\u4E0D\u662F\u8FD9\u4E9B\u4E4B\u4E00</span></span>
<span class="line"><span style="color:#A6ACCD;">  isIn: [[&#39;foo&#39;, &#39;bar&#39;]],   // \u68C0\u67E5\u503C\u662F\u5176\u4E2D\u4E4B\u4E00</span></span>
<span class="line"><span style="color:#A6ACCD;">  notContains: &#39;bar&#39;,       // \u4E0D\u5141\u8BB8\u7279\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">  len: [2,10],              // \u4EC5\u5141\u8BB8\u957F\u5EA6\u57282\u523010\u4E4B\u95F4\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">  isUUID: 4,                // \u53EA\u5141\u8BB8 uuid</span></span>
<span class="line"><span style="color:#A6ACCD;">  isDate: true,             // \u53EA\u5141\u8BB8\u65E5\u671F\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">  isAfter: &quot;2011-11-05&quot;,    // \u4EC5\u5141\u8BB8\u7279\u5B9A\u65E5\u671F\u4E4B\u540E\u7684\u65E5\u671F\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">  isBefore: &quot;2011-11-05&quot;,   // \u4EC5\u5141\u8BB8\u7279\u5B9A\u65E5\u671F\u4E4B\u524D\u7684\u65E5\u671F\u5B57\u7B26\u4E32</span></span>
<span class="line"><span style="color:#A6ACCD;">  max: 23,                  // \u4EC5\u5141\u8BB8\u503C &lt;= 23</span></span>
<span class="line"><span style="color:#A6ACCD;">  min: 23,                  // \u4EC5\u5141\u8BB8\u503C &gt;= 23</span></span>
<span class="line"><span style="color:#A6ACCD;">  isCreditCard: true,       // \u68C0\u67E5\u6709\u6548\u7684\u4FE1\u7528\u5361\u53F7</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u9047\u5230\u7684\u95EE\u9898" tabindex="-1">\u9047\u5230\u7684\u95EE\u9898 <a class="header-anchor" href="#\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><p><a href="https://www.chaoswork.cn/1064.html" target="_blank" rel="noreferrer">sequelize\u5F15\u8D77mysql\u9519\u8BEF\uFF1AToo many keys specified. Max 64 keys allowed</a></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">SELECT CONCAT(&#39;ALTER TABLE &#39;,i.TABLE_NAME,&#39; DROP INDEX &#39;,i.INDEX_NAME,&#39; ;&#39;) </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = &#39;bianjizutai&#39; AND i.INDEX_NAME &lt;&gt; &#39;PRIMARY&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6587\u6863-1" tabindex="-1">\u6587\u6863 <a class="header-anchor" href="#\u6587\u6863-1" aria-hidden="true">#</a></h2><p><a href="https://www.sequelize.com.cn/" target="_blank" rel="noreferrer">https://www.sequelize.com.cn/</a></p>`,11),o=[p];function i(t,c,A,r,C,u){return a(),n("div",null,o)}const S=s(l,[["render",i]]);export{y as __pageData,S as default};
