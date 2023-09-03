import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import zhCNConfig from './zhCNConfig'
import enUSConfig from './enUSConfig'

module.exports = {
  appearance: true,
  title: "HZ UI",
  description: "Vue基础组件库",
  lang: "zh-CN",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "../public/hz-icon.png" }]],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: zhCNConfig
    },
    'en-US': {
      label: 'English',
      lang: 'en-US',
      link: '/en-US',
      themeConfig: enUSConfig
    },
  },
  themeConfig: {
    siteTitle: "HZ UI",
    logo: "hz-icon.png",
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: "github", link: "https://github.com" }],
  },
};