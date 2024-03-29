const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "ZhangYiJia⼁Blog"; // 个人网站名字

const BLOG_URL = "https://blog.zhangyijia.ml"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/miku-o"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api-img.zhangyijia.eu.org/bing.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "About Me" },
  { sortId: 2, title: "Links" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = '鄂ICP备2021019149号'; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "ZhangYiJia⼁Blog",
    subtitle: "我的个人博客",
    url: "https://blog.zhangyijia.ml",
    icon: "https://cdn.jsdelivr.net/gh/miku-o/imgData/5c3aedy7.jpg"
  },
  {
    pageId: 2,
    sortId: 1,
    title: "Github",
    subtitle: "我的Github地址",
    url: "https://github.com/miku-o",
    icon: "https://cdn.jsdelivr.net/gh/miku-o/imgData/2020/03/25/GitHub.png"
  },
  {
    pageId: 3,
    sortId: 1,
    title: "OneManager",
    subtitle: "OneDrive",
    url: "https://od.zhangyijia.eu.org",
    icon: "https://cdn.jsdelivr.net/gh/miku-o/imgData/2020/04/08/lkl.png"
  },
  {
    pageId: 4,
    sortId: 1,
    title: "随机图片api",
    subtitle: "Heroku",
    url: "https://api-img.zhangyijia.eu.org/",
    icon: "https://cdn.jsdelivr.net/gh/miku-o/imgData/2020/03/28/ghgdfgcd.png"
  },
  {
    pageId: 5,
    sortId: 2,
    title: "softo",
    subtitle: "在线工具",
    url: "https://softo.co/",
    icon: "https://cdn.jsdelivr.net/gh/miku-o/imgData/2020/03/25/Screenshot_2020-03-25-16-09-32-25-01.png"
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
