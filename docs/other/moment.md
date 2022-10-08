# moment


配置中文
```js
moment.locale('zh', {
	months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
	longDateFormat: {
		LT: 'Ah点mm分',
		LTS: 'Ah点m分s秒',
		L: 'YYYY-MM-DD',
		LL: 'YYYY年MMMD日',
		LLL: 'YYYY年MMMD日Ah点mm分',
		LLLL: 'YYYY年MMMD日ddddAh点mm分',
		l: 'YYYY-MM-DD',
		ll: 'YYYY年MMMD日',
		lll: 'YYYY年MMMD日Ah点mm分',
		llll: 'YYYY年MMMD日ddddAh点mm分'
	},
	meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,

	relativeTime: {
		future: '%s内',
		past: '%s前',
		s: '几秒',
		m: '1分钟',
		mm: '%d分钟',
		h: '1小时',
		hh: '%d小时',
		d: '1天',
		dd: '%d天',
		M: '1个月',
		MM: '%d个月',
		y: '1年',
		yy: '%d年'
	},

});

```


格式化

```js
moment(val).format('YYYY-MM-DD')
```


