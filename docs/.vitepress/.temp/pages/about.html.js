export const data = {
  "key": "v-22a39d25",
  "path": "/about.html",
  "title": "关于本站",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": false
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "about.md",
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
