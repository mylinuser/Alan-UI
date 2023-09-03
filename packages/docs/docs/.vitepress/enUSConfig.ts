import { version } from "../../package.json";

export default {
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright © 2019-present Evan You",
  },
  docFooter: { prev: 'pre Page', next: 'next Page' },
  lastUpdatedText: "Last updated",
  nav: [
    { text: "首页", link: "/en-US" },
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
};
