export const themeData = {
  "navbar": [
    {
      "text": "js",
      "link": "/js/"
    },
    {
      "text": "react",
      "link": "/react/"
    },
    {
      "text": "vue",
      "link": "/vue/"
    },
    {
      "text": "其他",
      "children": [
        {
          "text": "GIT",
          "link": "/other/git"
        },
        {
          "text": "axios",
          "link": "/other/axios"
        },
        {
          "text": "MYSQL",
          "link": "/other/mysql"
        },
        {
          "text": "VS code",
          "link": "/other/vscode"
        },
        {
          "text": "sequelize",
          "link": "/other/sequelize"
        },
        {
          "text": "moment",
          "link": "/other/moment"
        },
        {
          "text": "数据结构与算法",
          "link": "/DataStructures&Algorithms/"
        }
      ]
    },
    {
      "text": "关于",
      "children": [
        {
          "text": "本站",
          "link": "/about"
        },
        {
          "text": "推荐",
          "children": [
            {
              "text": "笔记",
              "link": "https://emloxe.github.io/note/"
            }
          ]
        }
      ]
    }
  ],
  "sidebar": {
    "/js/": [
      {
        "text": "基本",
        "collapsable": false,
        "children": [
          "Array",
          "Date",
          "dom",
          "RegExp"
        ]
      },
      {
        "text": "实例",
        "collapsable": false,
        "children": [
          "util",
          "upload"
        ]
      }
    ],
    "/react/": [
      {
        "text": "基本",
        "collapsable": false,
        "children": [
          "hook",
          "route"
        ]
      },
      {
        "text": "antd",
        "collapsable": false,
        "children": [
          "icon"
        ]
      }
    ],
    "/vue/": [
      {
        "text": "基本",
        "collapsable": false,
        "children": [
          "pages",
          "dataTransmission"
        ]
      },
      {
        "text": "插件",
        "collapsable": false,
        "children": [
          "vuex",
          "router"
        ]
      },
      {
        "text": "其他",
        "collapsable": false,
        "children": [
          "pack"
        ]
      }
    ],
    "/DataStructures&Algorithms/": [
      {
        "text": "数据结构",
        "collapsable": false,
        "children": []
      },
      {
        "text": "算法",
        "collapsable": false,
        "children": [
          "sort"
        ]
      }
    ]
  },
  "sidebarDepth": 1,
  "subSidebar": "auto",
  "displayAllHeaders": true,
  "repo": "emloxe/tutorial",
  "repoLabel": "GitHub",
  "docsRepo": "emloxe/tutorial",
  "docsDir": "docs",
  "docsBranch": "master",
  "editLinks": true,
  "editLinkText": "在 GitHub 上编辑此页",
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "tip": "提示",
  "warning": "注意",
  "danger": "警告",
  "notFound": [
    "这里什么都没有",
    "我们怎么到这来了？",
    "这是一个 404 页面",
    "看起来我们进入了错误的链接"
  ],
  "backToHome": "返回首页",
  "openInNewWindow": "在新窗口打开",
  "toggleDarkMode": "切换夜间模式",
  "toggleSidebar": "切换侧边栏",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdated": true,
  "contributors": true
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
