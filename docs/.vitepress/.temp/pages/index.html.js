export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "<!-- heroImage": "/images/th.jpg -->",
    "heroText": "TUTORIAL",
    "tagline": "以大多数人的努力程度，根本轮不到拼天赋",
    "actionText": "Get Started →",
    "actionLink": "/js/",
    "<!-- features": [
      {
        "title": "简洁清晰",
        "details": "以简洁的语言，清晰的图例讲述晦涩的理论。"
      },
      {
        "title": "循序渐进",
        "details": "由浅入深，由易到难。 -->"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2019-present W.J. Zhang"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
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
