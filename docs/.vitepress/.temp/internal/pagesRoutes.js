import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-22a39d25","/about.html","关于本站",["/about","/about.md"]],
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-c49f5be6","/DataStructures&Algorithms/Algorithms.html","算法",["/DataStructures&Algorithms/Algorithms","/DataStructures&Algorithms/Algorithms.md"]],
  ["v-1bec2b07","/DataStructures&Algorithms/DataStructures.html","数据结构",["/DataStructures&Algorithms/DataStructures","/DataStructures&Algorithms/DataStructures.md"]],
  ["v-450efb70","/DataStructures&Algorithms/","前言",["/DataStructures&Algorithms/index.html","/DataStructures&Algorithms/README.md"]],
  ["v-7398a69a","/DataStructures&Algorithms/sort.html","排序",["/DataStructures&Algorithms/sort","/DataStructures&Algorithms/sort.md"]],
  ["v-5cc74f19","/canvas/util.html","",["/canvas/util","/canvas/util.md"]],
  ["v-0f5e6bae","/mysql/data.html","数据操作",["/mysql/data","/mysql/data.md"]],
  ["v-0d47706d","/js/Array.html","数组",["/js/Array","/js/Array.md"]],
  ["v-756cddfe","/js/Date.html","时间",["/js/Date","/js/Date.md"]],
  ["v-0f769244","/js/dom.html","HTML DOM 元素对象",["/js/dom","/js/dom.md"]],
  ["v-2d0a9a6d","/js/","",["/js/index.html","/js/README.md"]],
  ["v-d7e5fe3a","/js/RegExp.html","正则表达式",["/js/RegExp","/js/RegExp.md"]],
  ["v-ecd14a2a","/js/upload.html","上传文件",["/js/upload","/js/upload.md"]],
  ["v-5249d24a","/js/util.html","工具类",["/js/util","/js/util.md"]],
  ["v-4c0d8ad0","/node/fs.html","文件系统",["/node/fs","/node/fs.md"]],
  ["v-9646910a","/other/axios.html","axios",["/other/axios","/other/axios.md"]],
  ["v-616c639f","/other/git.html","GIT",["/other/git","/other/git.md"]],
  ["v-0e3dfefe","/other/moment.html","moment",["/other/moment","/other/moment.md"]],
  ["v-2938becf","/other/mysql.html","mysql",["/other/mysql","/other/mysql.md"]],
  ["v-0a2c637a","/other/sequelize.html","sequelize",["/other/sequelize","/other/sequelize.md"]],
  ["v-2dd340e7","/other/swagger.html","swagger",["/other/swagger","/other/swagger.md"]],
  ["v-1f997697","/other/vscode.html","vscode",["/other/vscode","/other/vscode.md"]],
  ["v-0bcd0886","/other/yarn.html","yarn",["/other/yarn","/other/yarn.md"]],
  ["v-db1c9e26","/react/hook.html","hook",["/react/hook","/react/hook.md"]],
  ["v-4d468f57","/react/icon.html","动态使用Icon",["/react/icon","/react/icon.md"]],
  ["v-dc3b2a6e","/react/","",["/react/index.html","/react/README.md"]],
  ["v-26b4508e","/react/route.html","路由",["/react/route","/react/route.md"]],
  ["v-4d0fdb6e","/vue/dataTransmission.html","数据传递",["/vue/dataTransmission","/vue/dataTransmission.md"]],
  ["v-6d62e284","/vue/pack.html","vue-cli4设置打包相对路径",["/vue/pack","/vue/pack.md"]],
  ["v-352a4ef7","/vue/pages.html","多页面入口",["/vue/pages","/vue/pages.md"]],
  ["v-744e35e2","/vue/","",["/vue/index.html","/vue/README.md"]],
  ["v-97cf0fe4","/vue/router.html","router",["/vue/router","/vue/router.md"]],
  ["v-3f07be76","/vue/vuex.html","vuex",["/vue/vuex","/vue/vuex.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
