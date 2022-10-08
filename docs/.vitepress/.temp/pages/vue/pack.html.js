export const data = {
  "key": "v-6d62e284",
  "path": "/vue/pack.html",
  "title": "vue-cli4设置打包相对路径",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "vue/pack.md",
  "git": {
    "updatedTime": 1638236680000,
    "contributors": [
      {
        "name": "ZWJ",
        "email": "qwrtyp@live.cn",
        "commits": 3
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
