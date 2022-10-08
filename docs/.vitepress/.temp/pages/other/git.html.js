export const data = {
  "key": "v-616c639f",
  "path": "/other/git.html",
  "title": "GIT",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "<h1 id=\"git\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#git\" aria-hidden=\"true\">#</a> GIT</h1>\n<h2 id=\"基础操作\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#基础操作\" aria-hidden=\"true\">#</a> 基础操作</h2>\n<h3 id=\"拉取仓库文件\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#拉取仓库文件\" aria-hidden=\"true\">#</a> 拉取仓库文件</h3>\n<p>http</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git clone https://gitee.com/TWaver/Space.git\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><p>ssh</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git clone git@gitee.com:TWaver/Space.git\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><p>拉取非master分支,例如dev分支</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git clone -b dev git@gitee.com:TWaver/Space.git\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h3 id=\"提交代码\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#提交代码\" aria-hidden=\"true\">#</a> 提交代码</h3>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git add .\ngit commit -m &lt;备注本次合并的内容>\ngit push origin dev\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br></div></div><h3 id=\"强制推送到指定分支\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#强制推送到指定分支\" aria-hidden=\"true\">#</a> 强制推送到指定分支</h3>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git push origin master --force\n\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br></div></div><h3 id=\"新仓库强制推送到远程已有仓库\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#新仓库强制推送到远程已有仓库\" aria-hidden=\"true\">#</a> 新仓库强制推送到远程已有仓库</h3>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git init\ngit add .\ngit commit -m update\n\n// 添加本地仓库与远程仓库关联\ngit remote add origin git@git.com:emloxe/xxx.git\n\n// 强制推送到远程仓库，且覆盖远程代码库\ngit push -f --set-upstream origin master:master\n\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br><span class=\"line-number\">7</span><br><span class=\"line-number\">8</span><br><span class=\"line-number\">9</span><br><span class=\"line-number\">10</span><br></div></div><h2 id=\"基本命令\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#基本命令\" aria-hidden=\"true\">#</a> 基本命令</h2>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git config --list // 查看配置\ngit config --global user.name \"lemon\"\ngit config --global user.email \"qwrtyp@live.cn\"\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br></div></div><div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>关联远程仓库 git remote add origin git@github.com:用户名/仓库名.git\n本地仓库与远程仓库的绑定 git push --set-upstream origin master\n查看分支：git branch\n创建分支：git branch &lt;name>\n切换分支：git checkout &lt;name>\n创建+切换分支：git checkout -b &lt;name>\n合并某分支到当前分支：git merge &lt;name>\n删除分支：git branch -d &lt;name>\n添加到一个暂存区 git add .\n将暂存区里的改动给提交到本地的版本库 git commit &lt;备注本次合并的内容>\n推送分支：git push origin &lt;name>\ngit remote -v显示更详细的信息\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br><span class=\"line-number\">7</span><br><span class=\"line-number\">8</span><br><span class=\"line-number\">9</span><br><span class=\"line-number\">10</span><br><span class=\"line-number\">11</span><br><span class=\"line-number\">12</span><br></div></div><p>创建 git 仓库:</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git init\ntouch README.md\ngit add README.md\ngit commit -m \"first commit\"\ngit remote add origin https://gitee.com/emloxe/cis.git\ngit push -u origin master\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br></div></div><p>已有仓库?</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git remote add origin https://gitee.com/emloxe/cis.git\ngit push -u origin master\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br></div></div><h2 id=\"tag打版本\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#tag打版本\" aria-hidden=\"true\">#</a> tag打版本</h2>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>// 命令格式\ngit tag -a 标签名 -m \"附注信息\"\n// 示例\ngit tag -a v1.0.0 -m \"完成了文章a和文章b的撰写，耗费时间2h，感觉棒棒的！\"\ngit push origin v1.0.0 // 推送\ngit push origin --tags // 推送本地所有标签\n\ngit tag -d test_tag　　　　　　　　//本地删除tag\ngit push origin :refs/tags/test_tag　　　　//本地tag删除了，再执行该句，删除线上tag\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br><span class=\"line-number\">7</span><br><span class=\"line-number\">8</span><br><span class=\"line-number\">9</span><br></div></div><h2 id=\"撤销\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#撤销\" aria-hidden=\"true\">#</a> 撤销</h2>\n<h3 id=\"git-放弃本地修改\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#git-放弃本地修改\" aria-hidden=\"true\">#</a> git 放弃本地修改</h3>\n<p>如果在修改时发现修改错误，而要放弃本地修改时\n<strong>一，未使用 git add 缓存代码时</strong>\n可以使用 <code>git checkout -- filepathname</code> (比如： <code>git checkout -- readme.md</code>  ，不要忘记中间的 “--” ，不写就成了检出分支了！！)。放弃所有的文件修改可以使用 git checkout .  命令。\n此命令用来放弃掉所有还没有加入到缓存区（就是 git add 命令）的修改：内容修改与整个文件删除。但是此命令不会删除掉刚新建的文件。因为刚新建的文件还没已有加入到 git 的管理系统中。所以对于git是未知的。自己手动删除就好了。</p>\n<p><strong>二，已经使用了  git add 缓存了代码</strong>\n可以使用  <code>git reset HEAD filepathname</code> （比如： <code>git reset HEAD readme.md</code>）来放弃指定文件的缓存，放弃所以的缓存可以使用 <code>git reset HEAD .</code> 命令。\n此命令用来清除 git  对于文件修改的缓存。相当于撤销 git add 命令所在的工作。在使用本命令后，本地的修改并不会消失，而是回到了如（一）所示的状态。继续用（一）中的操作，就可以放弃本地的修改。</p>\n<p><strong>三，已经用 git commit  提交了代码</strong>\n可以使用 <code>git reset --hard HEAD^</code> 来回退到上一次commit的状态。此命令可以用来回退到任意版本：<code>git reset --hard  &lt;commitid&gt; </code>\n你可以使用 git log 命令来查看git的提交历史。git log 的输出如下,之一这里可以看到第一行就是 commitid：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>commit cf0d692e982d8e372a07aaa6901c395eec73e356 (HEAD -> master)\nAuthor: toyflivver &lt;2440659688@qq.com>\nDate: Thu Sep 28 14:07:14 2017 +0800\n多余的空行\n\ncommit 14aa4d7ad4ac6fba59b4b8261d32e478e8cc99ff\nAuthor: toyflivver &lt;2440659688@qq.com>\nDate: Thu Sep 28 14:06:44 2017 +0800\n正常的代码\n\ncommit da3a95c84b6a92934ee30b6728e258bcda75f276\nAuthor: toyflivver &lt;2440659688@qq.com>\nDate: Thu Sep 28 13:58:12 2017 +0800\nqbf\n\ncommit 267466352079296520320991a75321485224d6c6\nAuthor: toyflivver &lt;2440659688@qq.com>\nDate: Thu Sep 28 13:40:09 2017 +0800\nqbf\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br><span class=\"line-number\">4</span><br><span class=\"line-number\">5</span><br><span class=\"line-number\">6</span><br><span class=\"line-number\">7</span><br><span class=\"line-number\">8</span><br><span class=\"line-number\">9</span><br><span class=\"line-number\">10</span><br><span class=\"line-number\">11</span><br><span class=\"line-number\">12</span><br><span class=\"line-number\">13</span><br><span class=\"line-number\">14</span><br><span class=\"line-number\">15</span><br><span class=\"line-number\">16</span><br><span class=\"line-number\">17</span><br><span class=\"line-number\">18</span><br><span class=\"line-number\">19</span><br></div></div><p>可以看出现在的状态在 commitid 为 cf0d692e982d8e372a07aaa6901c395eec73e356 的提交上（有 HEAD -&gt; master 标记）。</p>\n<p><strong>四，已经push到远程仓库了</strong>\n首先在本地对commit进行回滚，然后再强制性提交</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git push origin master -f\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h3 id=\"修改commit\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#修改commit\" aria-hidden=\"true\">#</a> 修改commit</h3>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git commit --amend -m '新的内容'  //修改刚刚的提交\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h2 id=\"git忽略规则和-gitignore规则不生效的解决办法\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#git忽略规则和-gitignore规则不生效的解决办法\" aria-hidden=\"true\">#</a> Git忽略规则和.gitignore规则不生效的解决办法</h2>\n<p>Git忽略规则：\n在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改根目录中 .gitignore 文件的方法（如果没有这个文件，则需自己手工建立此文件）。这个文件每一行保存了一个匹配的规则例如：</p>\n<h1 id=\"此为注释-–-将被-git-忽略\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#此为注释-–-将被-git-忽略\" aria-hidden=\"true\">#</a> 此为注释 – 将被 Git 忽略</h1>\n<p><em>.sample    # 忽略所有 .sample 结尾的文件\n!lib.sample    # 但 lib.sample 除外\n/TODO    # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO\nbuild/    # 忽略 build/ 目录下的所有文件\ndoc/</em>.txt   # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt</p>\n<p>.gitignore规则不生效的解决办法</p>\n<p>把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git rm -r --cached .\ngit add .\ngit commit -m 'update .gitignore'\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br></div></div><h2 id=\"删除远程分支\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#删除远程分支\" aria-hidden=\"true\">#</a> 删除远程分支</h2>\n<p>1.列出本地分支：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git branch\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><p>2.删除本地分支：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git branch -D BranchName\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><p>其中-D也可以是--delete，如：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git branch --delete BranchName\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><p>3.删除本地的远程分支：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git branch -r -D origin/BranchName\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><p>4.远程删除git服务器上的分支：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git push origin -d BranchName\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><p>其中-d也可以是--delete，如：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git push origin --delete BranchName\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h2 id=\"当前本地仓库与远程指定分支合并\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#当前本地仓库与远程指定分支合并\" aria-hidden=\"true\">#</a> 当前本地仓库与远程指定分支合并</h2>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git pull https://gitee.com/TWaver/CIS.git lemon20181104\n// 解决冲突，然后再提交\ngit push origin master\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br></div></div><h2 id=\"错误\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#错误\" aria-hidden=\"true\">#</a> 错误</h2>\n<h3 id=\"error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge\" aria-hidden=\"true\">#</a> error:Your local changes to the following files would be overwritten by merge</h3>\n<p>意思是我新修改的代码的文件，将会被git服务器上的代码覆盖</p>\n<p>方法1：如果你想保留刚才本地修改的代码，并把git服务器上的代码pull到本地（本地刚才修改的代码将会被暂时封存起来）</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git stash\ngit pull origin master\ngit stash pop\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br><span class=\"line-number\">2</span><br><span class=\"line-number\">3</span><br></div></div><p>如此一来，服务器上的代码更新到了本地，而且你本地修改的代码也没有被覆盖，之后使用add，commit，push 命令即可更新本地代码到服务器了。</p>\n<p>方法2、如果你想完全地覆盖本地的代码，只保留服务器端代码，则直接回退到上一个版本，再进行pull：</p>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git reset --hard\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h2 id=\"其他配置\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#其他配置\" aria-hidden=\"true\">#</a> 其他配置</h2>\n<h3 id=\"windows-上git大小写不敏感-可以设置如下\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#windows-上git大小写不敏感-可以设置如下\" aria-hidden=\"true\">#</a> windows 上git大小写不敏感，可以设置如下</h3>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git config core.ignorecase false\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h3 id=\"解决-windows-git-bash、linux-下的中文转码问题\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#解决-windows-git-bash、linux-下的中文转码问题\" aria-hidden=\"true\">#</a> 解决 Windows git Bash、Linux 下的中文转码问题</h3>\n<div class=\"language-text ext-text line-numbers-mode\"><pre v-pre class=\"language-text\"><code>git config --global core.quotepath false\n</code></pre><div class=\"line-numbers\"><span class=\"line-number\">1</span><br></div></div><h3 id=\"配置换行符\" tabindex=\"-1\"><a class=\"header-anchor\" href=\"#配置换行符\" aria-hidden=\"true\">#</a> 配置换行符</h3>\n<p>不同的操作系统对换行符的定义会有所不同，Unix或类Unix操作系统的换行符叫做LF，而windows系统的叫做CRLF，二者具有很大的区别</p>\n",
  "headers": [
    {
      "level": 2,
      "title": "基础操作",
      "slug": "基础操作",
      "children": [
        {
          "level": 3,
          "title": "拉取仓库文件",
          "slug": "拉取仓库文件",
          "children": []
        },
        {
          "level": 3,
          "title": "提交代码",
          "slug": "提交代码",
          "children": []
        },
        {
          "level": 3,
          "title": "强制推送到指定分支",
          "slug": "强制推送到指定分支",
          "children": []
        },
        {
          "level": 3,
          "title": "新仓库强制推送到远程已有仓库",
          "slug": "新仓库强制推送到远程已有仓库",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "基本命令",
      "slug": "基本命令",
      "children": []
    },
    {
      "level": 2,
      "title": "tag打版本",
      "slug": "tag打版本",
      "children": []
    },
    {
      "level": 2,
      "title": "撤销",
      "slug": "撤销",
      "children": [
        {
          "level": 3,
          "title": "git 放弃本地修改",
          "slug": "git-放弃本地修改",
          "children": []
        },
        {
          "level": 3,
          "title": "修改commit",
          "slug": "修改commit",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Git忽略规则和.gitignore规则不生效的解决办法",
      "slug": "git忽略规则和-gitignore规则不生效的解决办法",
      "children": []
    },
    {
      "level": 2,
      "title": "删除远程分支",
      "slug": "删除远程分支",
      "children": []
    },
    {
      "level": 2,
      "title": "当前本地仓库与远程指定分支合并",
      "slug": "当前本地仓库与远程指定分支合并",
      "children": []
    },
    {
      "level": 2,
      "title": "错误",
      "slug": "错误",
      "children": [
        {
          "level": 3,
          "title": "error:Your local changes to the following files would be overwritten by merge",
          "slug": "error-your-local-changes-to-the-following-files-would-be-overwritten-by-merge",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "其他配置",
      "slug": "其他配置",
      "children": [
        {
          "level": 3,
          "title": "windows 上git大小写不敏感，可以设置如下",
          "slug": "windows-上git大小写不敏感-可以设置如下",
          "children": []
        },
        {
          "level": 3,
          "title": "解决 Windows git Bash、Linux 下的中文转码问题",
          "slug": "解决-windows-git-bash、linux-下的中文转码问题",
          "children": []
        },
        {
          "level": 3,
          "title": "配置换行符",
          "slug": "配置换行符",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "other/git.md",
  "git": {
    "updatedTime": 1638163202000,
    "contributors": [
      {
        "name": "ZWJ",
        "email": "qwrtyp@live.cn",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
