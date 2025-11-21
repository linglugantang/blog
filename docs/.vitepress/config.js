// docs/.vitepress/config.js
export default {
  title: 'Leo 的技术博客', // 浏览器标题
  description: '专注于 Vue 和前端技术分享', // SEO 描述
  
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '文章归档', link: '/posts/' },
      { text: '关于我', link: '/about' }
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ],
    
    // 侧边栏配置（可选）
    sidebar: [
      {
        text: 'Vue.js 深入',
        items: [
          { text: '响应式原理', link: '/posts/reactive' },
          { text: '组件通信', link: '/posts/communication' }
        ]
      }
    ]
  }
}