module.exports =  [
      { text: 'js', activeMatch: '/js/', link: '/js/Array'  },
      { text: 'react', activeMatch: '/react/' , link: '/react/hook' },
      { text: 'vue', activeMatch: '/vue/', link: '/vue/pages' },
      { text: '其他', activeMatch: '/other/', link: '/other/git' },
      {
        text: '关于',
        items: [
          { text: '本站', link: '/about' },
          // { text: '作者', link: 'https://emloxe.github.io/' },
          { text: '推荐', 
            items: [
              // { text: '博客', link: 'https://emloxe.github.io/blog/' },
              { text: '笔记', link: 'https://emloxe.github.io/note/' }
            ] 
          }
        ]
      }
    ]