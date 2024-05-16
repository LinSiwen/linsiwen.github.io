import { defineConfig } from 'vitepress'

export default defineConfig({
  // # 站点元数据
  title: "My Site",
  description: "A VitePress site",

  // 路由
  cleanUrls: true,

  // 主题
  appearance: true,
  lastUpdated: true,

  themeConfig: {
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'VitePress Help', link: '/category1/index' },
      { text: '知识积累', link: '/category2/index' },
    ],

    // 侧边栏
    sidebar: {
      '/category1/': [
        {
          text: 'VitePress Help',
          link: '/category1/index',
          items: [
            { text: 'Markdown Examples', link: '/category1/markdown-examples' },
            { text: 'Runtime API Examples', link: '/category1/api-examples' },
          ],
          collapsed: false
        }
      ],

      '/category2/': [
        {
          text: '知识积累',
          link: '/category2/index',
          items: [
            { text: 'Git and GitHub', link: '/category2/git与github' },
            { text: '中国ERP应有的功能', link: '/category2/The ERP should be in China' },
          ],
          collapsed: false
        }
      ]
    },

    // 大纲层级
    outline: {
      level: [1, 6],    // 默认2,表示只显示h2,[1-6]表示显示1-6层级
      label: '提纲',    // 右侧 aside 的 title
    },

    // 修改本页
    // editLink: {
    //   pattern: 'https://github.com/LinSiwen/linsiwen.github.io/edit/main/docs/:path'
    // },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/linsiwen/' }
    ],

    // 外链标记
    externalLinkIcon: true
  }

  // 
})
