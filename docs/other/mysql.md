---
sidebar: auto
---

# mysql

## 基础操作

打开数据库
```
> ./mysql.exe -u root -p
```

查看所有创建的数据库名
```
> show databases;
```

创建数据库
```
> CREATE DATABASE [数据库名];
```

选择数据库
```
> use  [数据库名];
```

```
drop database [数据库名];
```

查看选择数据库中的表名称
```
> show tables;
```

查看表结构
```
> describe [表名];
```


查看表所有数据
```
> select * from  [表名];
```

删除整个表
```
> DROP TABLE [表名];
```

删除表中数据
```
> delete from [表名];
```

删除表中一行数据
```
> DELETE FROM [表名] where num = 8 ;
```


## 数据导入导出


https://blog.csdn.net/weixin_40482816/article/details/87074689


### 导出
1.导出整个数据库
```
mysqldump -u 用户名 -p 数据库名 > 导出的文件名
mysqldump -u dbuser -p dbname > dbname.sql
```
   

2.导出一个表
```
mysqldump -u 用户名 -p 数据库名 表名> 导出的文件名
mysqldump -u dbuser -p dbname users> dbname_users.sql
```

3.导出一个数据库结构
```
mysqldump -u dbuser -p -d --add-drop-table dbname >d:/dbname_db.sql
```
-d 没有数据 --add-drop-table 在每个create语句之前增加一个drop table

### 导入

常用source 命令

进入mysql数据库控制台，如
```
mysql -u root -p
mysql>use 数据库
```
然后使用source命令，后面参数为脚本文件(如这里用到的.sql)
```
mysql>source d:/dbname.sql
```



