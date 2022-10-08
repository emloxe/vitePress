export const data = {
  "key": "v-4d0fdb6e",
  "path": "/vue/dataTransmission.html",
  "title": "数据传递",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "父组件向子组件",
      "slug": "父组件向子组件",
      "children": []
    },
    {
      "level": 2,
      "title": "子组件向父组件",
      "slug": "子组件向父组件",
      "children": [
        {
          "level": 3,
          "title": "方式一",
          "slug": "方式一",
          "children": []
        },
        {
          "level": 3,
          "title": "方式二",
          "slug": "方式二",
          "children": []
        },
        {
          "level": 3,
          "title": "方式三",
          "slug": "方式三",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "越级向下传递数据",
      "slug": "越级向下传递数据",
      "children": []
    },
    {
      "level": 2,
      "title": "多层级组件触发",
      "slug": "多层级组件触发",
      "children": []
    }
  ],
  "filePathRelative": "vue/dataTransmission.md",
  "git": {
    "updatedTime": 1638927455000,
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
