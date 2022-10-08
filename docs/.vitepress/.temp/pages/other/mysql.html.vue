<template><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> mysql</h1>
<h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2>
<p>打开数据库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> ./mysql.exe -u root -p
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看所有创建的数据库名</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> show databases;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建数据库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> CREATE DATABASE [数据库名];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>选择数据库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> use  [数据库名];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>drop database [数据库名];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看选择数据库中的表名称</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> show tables;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看表结构</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> describe [表名];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查看表所有数据</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> select * from  [表名];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除整个表</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> DROP TABLE [表名];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除表中数据</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> delete from [表名];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>删除表中一行数据</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> DELETE FROM [表名] where num = 8 ;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="数据导入导出" tabindex="-1"><a class="header-anchor" href="#数据导入导出" aria-hidden="true">#</a> 数据导入导出</h2>
<h3 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h3>
<p>1.导出整个数据库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysqldump -u 用户名 -p 数据库名 > 导出的文件名
mysqldump -u dbuser -p dbname > dbname.sql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2.导出一个表</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysqldump -u 用户名 -p 数据库名 表名> 导出的文件名
mysqldump -u dbuser -p dbname users> dbname_users.sql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>3.导出一个数据库结构</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysqldump -u dbuser -p -d --add-drop-table dbname >d:/dbname_db.sql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>-d 没有数据 --add-drop-table 在每个create语句之前增加一个drop table</p>
<h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3>
<p>常用source 命令</p>
<p>进入mysql数据库控制台，如</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -u root -p
mysql>use 数据库
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后使用source命令，后面参数为脚本文件(如这里用到的.sql)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql>source d:/dbname.sql
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
