module.exports =  {
  '/js/': [
    {
      text: '基本',
      collapsable: false,
      items: [
        { text: '数组', link: '/js/Array' },
        { text: '时间', link: '/js/Date' },
        { text: 'dom', link: '/js/dom' },
        { text: '正则', link: '/js/RegExp' },
        { text: '排序', link: '/js/sort' },
      ]
    },
    {
      text: '实例',
      collapsable: false,
      items: [
        { text: '工具类', link: '/js/util' },
        { text: '上传文件', link: '/js/upload' },
      ]
    },
  ],
  '/react/': [
    {
      text: '基本',
      collapsable: false,
      items: [
        { text: 'hook', link: '/react/hook' },
        { text: '路由', link: '/react/route' },
      ]
    },
    {
      text: 'antd',
      collapsable: false,
      items: [
        { text: '动态使用Icon', link: '/react/icon' },
      ]
    },
  ],
  '/vue/': [
    {
      text: '基本',
      collapsable: false,
      items: [
        { text: '多页面入口', link: '/vue/pages' },
        { text: '数据传递', link: '/vue/dataTransmission' },
      ]
    },
    {
      text: '插件',
      collapsable: false,
      items: [
        { text: 'vuex', link: '/vue/vuex' },
        { text: 'router', link: '/vue/router' },
      ]
    },
    {
      text: '其他',
      collapsable: false,
      items: [
        { text: '打包', link: '/vue/pack' },
      ]
    },
  ],
  '/other/': [
    {
      text: '其他',
      collapsable: false,
      items: [
        { text: 'GIT', link: '/other/git' },
        { text: 'axios', link: '/other/axios' },
        { text: 'MYSQL', link: '/other/mysql' },
        { text: 'VS code', link: '/other/vscode'  },
        { text: 'sequelize', link: '/other/sequelize' },
        { text: 'moment', link: '/other/moment' },
        { text: 'swagger', link: '/other/swagger' },
      ]
    },
  ],

}

