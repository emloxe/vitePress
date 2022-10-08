# sequelize



## 文档

### 数据类型
```

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


```

### 校验

```
validate: {
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
  max: 23,                  // 仅允许值 <= 23
  min: 23,                  // 仅允许值 >= 23
  isCreditCard: true,       // 检查有效的信用卡号
}
```



## 遇到的问题

[sequelize引起mysql错误：Too many keys specified. Max 64 keys allowed](https://www.chaoswork.cn/1064.html)

```
SELECT CONCAT('ALTER TABLE ',i.TABLE_NAME,' DROP INDEX ',i.INDEX_NAME,' ;') 
FROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = 'bianjizutai' AND i.INDEX_NAME <> 'PRIMARY';
```


## 文档
https://www.sequelize.com.cn/