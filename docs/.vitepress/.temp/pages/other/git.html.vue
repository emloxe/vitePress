<template><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1>
<h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2>
<h3 id="拉取仓库文件" tabindex="-1"><a class="header-anchor" href="#拉取仓库文件" aria-hidden="true">#</a> 拉取仓库文件</h3>
<p>http</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone https://gitee.com/TWaver/Space.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>ssh</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone git@gitee.com:TWaver/Space.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>拉取非master分支,例如dev分支</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git clone -b dev git@gitee.com:TWaver/Space.git
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码" aria-hidden="true">#</a> 提交代码</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git add .
git commit -m &lt;备注本次合并的内容>
git push origin dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="强制推送到指定分支" tabindex="-1"><a class="header-anchor" href="#强制推送到指定分支" aria-hidden="true">#</a> 强制推送到指定分支</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin master --force

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="新仓库强制推送到远程已有仓库" tabindex="-1"><a class="header-anchor" href="#新仓库强制推送到远程已有仓库" aria-hidden="true">#</a> 新仓库强制推送到远程已有仓库</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init
git add .
git commit -m update

// 添加本地仓库与远程仓库关联
git remote add origin git@git.com:emloxe/xxx.git

// 强制推送到远程仓库，且覆盖远程代码库
git push -f --set-upstream origin master:master

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --list // 查看配置
git config --global user.name "lemon"
git config --global user.email "qwrtyp@live.cn"
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>关联远程仓库 git remote add origin git@github.com:用户名/仓库名.git
本地仓库与远程仓库的绑定 git push --set-upstream origin master
查看分支：git branch
创建分支：git branch &lt;name>
切换分支：git checkout &lt;name>
创建+切换分支：git checkout -b &lt;name>
合并某分支到当前分支：git merge &lt;name>
删除分支：git branch -d &lt;name>
添加到一个暂存区 git add .
将暂存区里的改动给提交到本地的版本库 git commit &lt;备注本次合并的内容>
推送分支：git push origin &lt;name>
git remote -v显示更详细的信息
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>创建 git 仓库:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/emloxe/cis.git
git push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>已有仓库?</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git remote add origin https://gitee.com/emloxe/cis.git
git push -u origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="tag打版本" tabindex="-1"><a class="header-anchor" href="#tag打版本" aria-hidden="true">#</a> tag打版本</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 命令格式
git tag -a 标签名 -m "附注信息"
// 示例
git tag -a v1.0.0 -m "完成了文章a和文章b的撰写，耗费时间2h，感觉棒棒的！"
git push origin v1.0.0 // 推送
git push origin --tags // 推送本地所有标签

git tag -d test_tag　　　　　　　　//本地删除tag
git push origin :refs/tags/test_tag　　　　//本地tag删除了，再执行该句，删除线上tag
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销" aria-hidden="true">#</a> 撤销</h2>
<h3 id="git-放弃本地修改" tabindex="-1"><a class="header-anchor" href="#git-放弃本地修改" aria-hidden="true">#</a> git 放弃本地修改</h3>
<p>如果在修改时发现修改错误，而要放弃本地修改时
<strong>一，未使用 git add 缓存代码时</strong>
可以使用 <code>git checkout -- filepathname</code> (比如： <code>git checkout -- readme.md</code>  ，不要忘记中间的 “--” ，不写就成了检出分支了！！)。放弃所有的文件修改可以使用 git checkout .  命令。
此命令用来放弃掉所有还没有加入到缓存区（就是 git add 命令）的修改：内容修改与整个文件删除。但是此命令不会删除掉刚新建的文件。因为刚新建的文件还没已有加入到 git 的管理系统中。所以对于git是未知的。自己手动删除就好了。</p>
<p><strong>二，已经使用了  git add 缓存了代码</strong>
可以使用  <code>git reset HEAD filepathname</code> （比如： <code>git reset HEAD readme.md</code>）来放弃指定文件的缓存，放弃所以的缓存可以使用 <code>git reset HEAD .</code> 命令。
此命令用来清除 git  对于文件修改的缓存。相当于撤销 git add 命令所在的工作。在使用本命令后，本地的修改并不会消失，而是回到了如（一）所示的状态。继续用（一）中的操作，就可以放弃本地的修改。</p>
<p><strong>三，已经用 git commit  提交了代码</strong>
可以使用 <code>git reset --hard HEAD^</code> 来回退到上一次commit的状态。此命令可以用来回退到任意版本：<code>git reset --hard  &lt;commitid&gt; </code>
你可以使用 git log 命令来查看git的提交历史。git log 的输出如下,之一这里可以看到第一行就是 commitid：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>commit cf0d692e982d8e372a07aaa6901c395eec73e356 (HEAD -> master)
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 14:07:14 2017 +0800
多余的空行

commit 14aa4d7ad4ac6fba59b4b8261d32e478e8cc99ff
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 14:06:44 2017 +0800
正常的代码

commit da3a95c84b6a92934ee30b6728e258bcda75f276
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 13:58:12 2017 +0800
qbf

commit 267466352079296520320991a75321485224d6c6
Author: toyflivver &lt;2440659688@qq.com>
Date: Thu Sep 28 13:40:09 2017 +0800
qbf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>可以看出现在的状态在 commitid 为 cf0d692e982d8e372a07aaa6901c395eec73e356 的提交上（有 HEAD -&gt; master 标记）。</p>
<p><strong>四，已经push到远程仓库了</strong>
首先在本地对commit进行回滚，然后再强制性提交</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin master -f
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="修改commit" tabindex="-1"><a class="header-anchor" href="#修改commit" aria-hidden="true">#</a> 修改commit</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git commit --amend -m '新的内容'  //修改刚刚的提交
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="git忽略规则和-gitignore规则不生效的解决办法" tabindex="-1"><a class="header-anchor" href="#git忽略规则和-gitignore规则不生效的解决办法" aria-hidden="true">#</a> Git忽略规则和.gitignore规则不生效的解决办法</h2>
<p>Git忽略规则：
在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改根目录中 .gitignore 文件的方法（如果没有这个文件，则需自己手工建立此文件）。这个文件每一行保存了一个匹配的规则例如：</p>
<h1 id="此为注释-–-将被-git-忽略" tabindex="-1"><a class="header-anchor" href="#此为注释-–-将被-git-忽略" aria-hidden="true">#</a> 此为注释 – 将被 Git 忽略</h1>
<p><em>.sample    # 忽略所有 .sample 结尾的文件
!lib.sample    # 但 lib.sample 除外
/TODO    # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/    # 忽略 build/ 目录下的所有文件
doc/</em>.txt   # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt</p>
<p>.gitignore规则不生效的解决办法</p>
<p>把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git rm -r --cached .
git add .
git commit -m 'update .gitignore'
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支" aria-hidden="true">#</a> 删除远程分支</h2>
<p>1.列出本地分支：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2.删除本地分支：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch -D BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中-D也可以是--delete，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch --delete BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>3.删除本地的远程分支：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git branch -r -D origin/BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>4.远程删除git服务器上的分支：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin -d BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>其中-d也可以是--delete，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git push origin --delete BranchName
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="当前本地仓库与远程指定分支合并" tabindex="-1"><a class="header-anchor" href="#当前本地仓库与远程指定分支合并" aria-hidden="true">#</a> 当前本地仓库与远程指定分支合并</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git pull https://gitee.com/TWaver/CIS.git lemon20181104
// 解决冲突，然后再提交
git push origin master
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h2>
<h3 id="error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge" tabindex="-1"><a class="header-anchor" href="#error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge" aria-hidden="true">#</a> error:Your local changes to the following files would be overwritten by merge</h3>
<p>意思是我新修改的代码的文件，将会被git服务器上的代码覆盖</p>
<p>方法1：如果你想保留刚才本地修改的代码，并把git服务器上的代码pull到本地（本地刚才修改的代码将会被暂时封存起来）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git stash
git pull origin master
git stash pop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如此一来，服务器上的代码更新到了本地，而且你本地修改的代码也没有被覆盖，之后使用add，commit，push 命令即可更新本地代码到服务器了。</p>
<p>方法2、如果你想完全地覆盖本地的代码，只保留服务器端代码，则直接回退到上一个版本，再进行pull：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git reset --hard
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置" aria-hidden="true">#</a> 其他配置</h2>
<h3 id="windows-上git大小写不敏感-可以设置如下" tabindex="-1"><a class="header-anchor" href="#windows-上git大小写不敏感-可以设置如下" aria-hidden="true">#</a> windows 上git大小写不敏感，可以设置如下</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config core.ignorecase false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="解决-windows-git-bash、linux-下的中文转码问题" tabindex="-1"><a class="header-anchor" href="#解决-windows-git-bash、linux-下的中文转码问题" aria-hidden="true">#</a> 解决 Windows git Bash、Linux 下的中文转码问题</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global core.quotepath false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="配置换行符" tabindex="-1"><a class="header-anchor" href="#配置换行符" aria-hidden="true">#</a> 配置换行符</h3>
<p>不同的操作系统对换行符的定义会有所不同，Unix或类Unix操作系统的换行符叫做LF，而windows系统的叫做CRLF，二者具有很大的区别</p>
<!-- more -->
<blockquote>
<p>Unix系统里，每行结尾只有'&lt;换行&gt;'，即'n'；Windows系统里面，每行结尾是'&lt;换行&gt;&lt;回车&gt;'
Note:引自回车(CR)与换行(LF)， ‘r’和’n’的区别.</p>
</blockquote>
<p>这就是造成问题的根源——即如果你使用的是windows系统，而你的小伙伴用的是Mac的话，当你们使用git协同开发软件时，就会出现换行符不统一的问题。</p>
<p>git其实可以自己处理换行符不统一的问题，但是可能会产生意想不到的结果。因此，有必要进行相关的配置，我们通常有两种方案：</p>
<p>全局配置换行符
针对某个仓库的局部配置</p>
<h4 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global core.autocrlf input
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>autocrlf =true 表示要求git在提交时将crlf转换为lf，而在检出时将crlf转换为lf。<br>
autocrlf = false表示提交和检出代码时均不进行转换<br>
autocrlf = input 表示在提交时将crlf转换为lf，而检出时不转换</p>
</blockquote>
<h4 id="单一仓库的换行符局部配置" tabindex="-1"><a class="header-anchor" href="#单一仓库的换行符局部配置" aria-hidden="true">#</a> 单一仓库的换行符局部配置</h4>
<p>使用.gitattributes文件统一换行符。这种方法是针对某个仓库进行换行符的统一配置，即时你已经进行了全局配置。</p>
<p>另外，这个文件有点儿类似于.gitignore，不仅名字很类似，使用方式，编写语法也很像。这个文件必须位于仓库的根目录，可以像其他文件一样进行修改、提交</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 将所有的纯文本文件末尾改成 Unix 风格的 lf
* text eol=lf

# 排除掉非纯文本文件
*.jpg -text
*.png -text
*.pdf -text
*.doc -text
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>text=auto </code>
让git自行处理左边匹配的文件使用何种换行符格式，这是默认选项。</p>
<p><code>text eol=crlf </code>
对左边匹配的文件统一使用CRLF换行符格式，如果有文件中出现LF将会转换成CRLF。</p>
<p><code>text eol=lf </code>
对左边匹配的文件统一使用LF换行符格式，如果有文件中出现CRLF将会转换成LF。</p>
</template>
