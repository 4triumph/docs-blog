import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { getSidebar } from "./utils/getSidebar";

export default defineConfig({
  // base: "/docs-blog/",
  // 标签上显示的网站标题
  title: "4triumph",
  titleTemplate: "4triumph's docs",
  // 在标签上显示所的 logo
  head: [["link", { rel: "icon", href: "/docs-blog/logo.png" }]],

  // 网站描述，有利于被搜索引擎捕获
  description: "Learning...",

  // md 文件根目录
  // 【谨慎修改】：一旦修改将引起较多变动
  srcDir: "./src",

  // 主题自定义
  themeConfig: {
    // 网站左上角 logo
    logo: "/logo.png",
    // 顶部导航栏
    nav: [
      { text: "👋 AboutMe", link: "/AboutMe.md" },
      { text: "💭 Blogs", link: "/Notes/index" },
      { text: "🦄 Interview", link: "/Notes/Interviews/" },
      // { text: "👫 Friends", link: "Friends.md" },
      { text: "💡Projects", link: "Projects.md" },
    ],
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [{ icon: "github", link: "https://github.com/4triumph" }],
    // 首页底部版权声明
    footer: {
      copyright: "Copyright © 2024-present 4triumph",
    },
    // 【文章页面左侧导航】
    sidebar: {
      "/Notes/": getSidebar("/docs/src", "/Notes/"),
    },
    // 文章内导航栏标题
    outlineTitle: "导航栏",
    // 是否启动搜索功能
    search: {
      provider: "local",
    },
  },
  // 数学公式支持
  markdown: {
    math: true,
  },
  // !请勿修改
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/UpdateTime.vue", import.meta.url)
          ),
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/Footer.vue", import.meta.url)
          ),
        },
      ],
    },
  },
  lastUpdated: true,
});
