var navbar = require('./navbar');
var sidebar = require('./sidebar');


export default {
  title: 'TUTORIAL',  // 设置网站标题
  description : 'Zhang W.J. 教程教程网站，张雯瑾教程网站，emloxe',
  base : '/vitePress/',
  // theme: 'reco',
  themeConfig : {
    nav: navbar,
    sidebar: sidebar,
    sidebarDepth : 1,
    subSidebar: 'auto',

    displayAllHeaders: true,
    // sidebar: 'auto',

    repo: 'emloxe/vitePress',
    repoLabel: 'GitHub',
    docsRepo: 'emloxe/vitePress',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
  },
  plugins: [
    [
      '@vuepress/plugin-docsearch',
      {
        // apiKey: '3a539aab83105f01761a137c61004d85',
        indexName: 'vuepress',
        searchParameters: {
          facetFilters: ['tags:v2'],
        },
        locales: {
          placeholder: '搜索文档',
        },
      },
    ],
  ]
}