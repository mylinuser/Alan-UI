import { version } from "../../package.json";

export default {
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2019-present Evan You",
  },
  docFooter: { prev: '上一篇', next: '下一篇' },
  lastUpdatedText: '最近更新时间',
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
      {
        text: "基础组件",
        items: [{ text: "Button 按钮", link: "/components/Button" }],
      },
      {
        text: "基础组件",
        items: [{ text: "Button 按钮", link: "/components/Button" }],
      },
    ],
    '/guide/': [
      {
        text: '介绍',
        items: [
          { text: '什么是 VitePress', link: '/guide/what-is-vitepress' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '配置', link: '/guide/configuration' },
          { text: '发布', link: '/guide/deploying' }
        ],
        collapsible: true
      }
    ]
  },
};
