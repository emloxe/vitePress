---
sidebar: auto
---

# GIT

## 基础操作

### 拉取仓库文件
http
```
git clone https://gitee.com/TWaver/Space.git
```

ssh
```
git clone git@gitee.com:TWaver/Space.git
```

拉取非master分支,例如dev分支
```
git clone -b dev git@gitee.com:TWaver/Space.git
```

### 提交代码

```
git add .
git commit -m <备注本次合并的内容>
git push origin dev
```


### 强制推送到指定分支
```
git push origin master --force

```


### 新仓库强制推送到远程已有仓库

```
git init
git add .
git commit -m update

// 添加本地仓库与远程仓库关联
git remote add origin git@git.com:emloxe/xxx.git

// 强制推送到远程仓库，且覆盖远程代码库
git push -f --set-upstream origin master:master

```


## 基本命令
```
git config --list // 查看配置
git config --global user.name "lemon"
git config --global user.email "qwrtyp@live.cn"
```
```
关联远程仓库 git remote add origin git@github.com:用户名/仓库名.git
本地仓库与远程仓库的绑定 git push --set-upstream origin master
查看分支：git branch
创建分支：git branch <name>
切换分支：git checkout <name>
创建+切换分支：git checkout -b <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>
添加到一个暂存区 git add .
将暂存区里的改动给提交到本地的版本库 git commit <备注本次合并的内容>
推送分支：git push origin <name>
git remote -v显示更详细的信息
```

创建 git 仓库:
```
git init
touch README.md
git add README.md
git commit -m "first commit"
git remote add origin https://gitee.com/emloxe/cis.git
git push -u origin master
```

已有仓库?
```
git remote add origin https://gitee.com/emloxe/cis.git
git push -u origin master
```

## tag打版本

```
// 命令格式
git tag -a 标签名 -m "附注信息"
// 示例
git tag -a v1.0.0 -m "完成了文章a和文章b的撰写，耗费时间2h，感觉棒棒的！"
git push origin v1.0.0 // 推送
git push origin --tags // 推送本地所有标签

git tag -d test_tag　　　　　　　　//本地删除tag
git push origin :refs/tags/test_tag　　　　//本地tag删除了，再执行该句，删除线上tag
```

## 撤销

### git 放弃本地修改

如果在修改时发现修改错误，而要放弃本地修改时
**一，未使用 git add 缓存代码时**
可以使用 `git checkout -- filepathname` (比如： `git checkout -- readme.md`  ，不要忘记中间的 “--” ，不写就成了检出分支了！！)。放弃所有的文件修改可以使用 git checkout .  命令。
此命令用来放弃掉所有还没有加入到缓存区（就是 git add 命令）的修改：内容修改与整个文件删除。但是此命令不会删除掉刚新建的文件。因为刚新建的文件还没已有加入到 git 的管理系统中。所以对于git是未知的。自己手动删除就好了。

**二，已经使用了  git add 缓存了代码**
可以使用  `git reset HEAD filepathname` （比如： `git reset HEAD readme.md`）来放弃指定文件的缓存，放弃所以的缓存可以使用 `git reset HEAD .` 命令。
此命令用来清除 git  对于文件修改的缓存。相当于撤销 git add 命令所在的工作。在使用本命令后，本地的修改并不会消失，而是回到了如（一）所示的状态。继续用（一）中的操作，就可以放弃本地的修改。

**三，已经用 git commit  提交了代码**
可以使用 `git reset --hard HEAD^` 来回退到上一次commit的状态。此命令可以用来回退到任意版本：`git reset --hard  <commitid> `
你可以使用 git log 命令来查看git的提交历史。git log 的输出如下,之一这里可以看到第一行就是 commitid：
```
commit cf0d692e982d8e372a07aaa6901c395eec73e356 (HEAD -> master)
Author: toyflivver <2440659688@qq.com>
Date: Thu Sep 28 14:07:14 2017 +0800
多余的空行

commit 14aa4d7ad4ac6fba59b4b8261d32e478e8cc99ff
Author: toyflivver <2440659688@qq.com>
Date: Thu Sep 28 14:06:44 2017 +0800
正常的代码

commit da3a95c84b6a92934ee30b6728e258bcda75f276
Author: toyflivver <2440659688@qq.com>
Date: Thu Sep 28 13:58:12 2017 +0800
qbf

commit 267466352079296520320991a75321485224d6c6
Author: toyflivver <2440659688@qq.com>
Date: Thu Sep 28 13:40:09 2017 +0800
qbf
```
可以看出现在的状态在 commitid 为 cf0d692e982d8e372a07aaa6901c395eec73e356 的提交上（有 HEAD -> master 标记）。


**四，已经push到远程仓库了**
首先在本地对commit进行回滚，然后再强制性提交
```
git push origin master -f
```

### 修改commit

```
git commit --amend -m '新的内容'  //修改刚刚的提交
```

## Git忽略规则和.gitignore规则不生效的解决办法
  Git忽略规则：
在git中如果想忽略掉某个文件，不让这个文件提交到版本库中，可以使用修改根目录中 .gitignore 文件的方法（如果没有这个文件，则需自己手工建立此文件）。这个文件每一行保存了一个匹配的规则例如：

# 此为注释 – 将被 Git 忽略

*.sample    # 忽略所有 .sample 结尾的文件
!lib.sample    # 但 lib.sample 除外
/TODO    # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
build/    # 忽略 build/ 目录下的所有文件
doc/*.txt   # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt

  .gitignore规则不生效的解决办法

把某些目录或文件加入忽略规则，按照上述方法定义后发现并未生效，原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。那么解决方法就是先把本地缓存删除（改变成未被追踪状态），然后再提交：
```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```

## 删除远程分支

1.列出本地分支：
```
git branch
```
2.删除本地分支：
```
git branch -D BranchName
```
其中-D也可以是--delete，如：
```
git branch --delete BranchName
```
3.删除本地的远程分支：
```
git branch -r -D origin/BranchName
```
4.远程删除git服务器上的分支：
```
git push origin -d BranchName
```
其中-d也可以是--delete，如：
```
git push origin --delete BranchName
```

## 当前本地仓库与远程指定分支合并
```
git pull https://gitee.com/TWaver/CIS.git lemon20181104
// 解决冲突，然后再提交
git push origin master
```

## 错误
### error:Your local changes to the following files would be overwritten by merge
意思是我新修改的代码的文件，将会被git服务器上的代码覆盖

方法1：如果你想保留刚才本地修改的代码，并把git服务器上的代码pull到本地（本地刚才修改的代码将会被暂时封存起来）
```
git stash
git pull origin master
git stash pop
```
如此一来，服务器上的代码更新到了本地，而且你本地修改的代码也没有被覆盖，之后使用add，commit，push 命令即可更新本地代码到服务器了。

方法2、如果你想完全地覆盖本地的代码，只保留服务器端代码，则直接回退到上一个版本，再进行pull：
```
git reset --hard
```


## 其他配置

### windows 上git大小写不敏感，可以设置如下
```
git config core.ignorecase false
```

### 解决 Windows git Bash、Linux 下的中文转码问题

```
git config --global core.quotepath false
```

### 配置换行符
不同的操作系统对换行符的定义会有所不同，Unix或类Unix操作系统的换行符叫做LF，而windows系统的叫做CRLF，二者具有很大的区别
<!-- more -->

> Unix系统里，每行结尾只有'<换行>'，即'n'；Windows系统里面，每行结尾是'<换行><回车>'
Note:引自回车(CR)与换行(LF)， ‘r’和’n’的区别.

这就是造成问题的根源——即如果你使用的是windows系统，而你的小伙伴用的是Mac的话，当你们使用git协同开发软件时，就会出现换行符不统一的问题。

git其实可以自己处理换行符不统一的问题，但是可能会产生意想不到的结果。因此，有必要进行相关的配置，我们通常有两种方案：

全局配置换行符
针对某个仓库的局部配置

#### 全局配置
```
git config --global core.autocrlf input
```

> autocrlf =true 表示要求git在提交时将crlf转换为lf，而在检出时将crlf转换为lf。  
> autocrlf = false表示提交和检出代码时均不进行转换  
> autocrlf = input 表示在提交时将crlf转换为lf，而检出时不转换  

#### 单一仓库的换行符局部配置
使用.gitattributes文件统一换行符。这种方法是针对某个仓库进行换行符的统一配置，即时你已经进行了全局配置。

另外，这个文件有点儿类似于.gitignore，不仅名字很类似，使用方式，编写语法也很像。这个文件必须位于仓库的根目录，可以像其他文件一样进行修改、提交

```
# 将所有的纯文本文件末尾改成 Unix 风格的 lf
* text eol=lf

# 排除掉非纯文本文件
*.jpg -text
*.png -text
*.pdf -text
*.doc -text
```
`text=auto `
让git自行处理左边匹配的文件使用何种换行符格式，这是默认选项。

`text eol=crlf `
对左边匹配的文件统一使用CRLF换行符格式，如果有文件中出现LF将会转换成CRLF。

`text eol=lf `
对左边匹配的文件统一使用LF换行符格式，如果有文件中出现CRLF将会转换成LF。