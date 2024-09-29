interface Project {
  banner: string; // 图片链接
  title: string; // 项目标题
  description: string; // 项目简介
  link: string; // 项目链接
  tag?: string; // 项目标签
}

/**
 * TODO: 缺项处理
 * 在此处填写你的项目介绍
 */
export const projectsInfo: Project[] = [
  {
    banner: "../views/img/favicon.jpg", 
    title: "socean-web",
    description:
      "比赛项目网页部分",
    link: "https://github.com/4triumph/socean-web",
    tag: "Echarts",
  },
];
