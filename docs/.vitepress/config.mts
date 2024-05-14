import { defineConfig } from 'vitepress'

export default defineConfig({
  // # 站点元数据
  title: "My Site",
  description: "A VitePress site",

  // 路由
  cleanUrls: false,

  // 主题
  appearance: true,
  lastUpdated: true,

  themeConfig: {
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/markdown-examples' },
    ],

    // 侧边栏
    sidebar: [
      {
        text: '默认文档',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '我的文档',
        collapsed: true,
        items: [
          { text: 'Git and GitHub', link: '/git与github' },
          { text: '中国ERP应有的功能', link: '/The ERP should be in China' }
        ]
      }
    ],

    // 大纲层级,默认2,表示只显示h2,[1-6]表示显示1-6层级,最高6级.
    outline: [1, 6],

    // 修改本页
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/linsiwen/' }
    ],

    // 外链标记
    externalLinkIcon: true
  }

  // 
})
