import { version } from "../../package.json";
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

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
  // vite: {
  //   plugins: [
  //     vitepressDemo({
  //       glob: ["**/demo/**/*.vue"],
  //     }),
  //   ],
  //   css: {
  //     preprocessorOptions: {
  //       less: {
  //         javascriptEnabled: true,
  //       },
  //     },
  //   },
  // },
  themeConfig: {
    siteTitle: "HZ UI",
    // logo: "../public/hz-icon.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
      { text: "组件", link: "/components/Button.html" },
      {
        text: version,
        items: [
          {
            text: "变更日志",
            link: "/changelog/CHANGELOG.md",
          },
        ],
      },
    ],
    sidebar: {
      "/components/": [
        {
          text: "基础组件",
          items: [{ text: "Button 按钮", link: "/components/Button" }],
        },
      ],
    },
  },
};