const EXPECT_JOBS = [
  {
    jobType: "全职",
    workSpace: "青岛",
    job: "web前端",
    industry: "不限",
    salary: "20-25K"
  },
  {
    jobType: "全职",
    workSpace: "青岛",
    job: "Java",
    industry: "不限",
    salary: "18-23K"
  }
]

const FILTERS = [
  {
    title: "学历要求",
    type: "education",
    items: ['不限', '初中及以下', '中专/中技', '高中', '大专', '本科', '硕士', '博士']
  },
  {
    title: "薪资待遇",
    type: "salary",
    singleSelector: true,
    items: ['不限', '3K以下', '3-5K', '5-7K', '7-9K', '9-12K', '12K以上']
  },
  {
    title: "经验要求",
    type: "experience",
    items: ['不限', '在校生', '应届生', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上']
  },
  {
    title: "行业",
    type: "industry",
    items: ['不限', '电子商务', '游戏', '媒体', '广告营销', '数据服务', '医疗健康', '生活服务', 'O2O', '旅游', '分类信息']
  },
  {
    title: "融资阶段",
    type: "financing",
    items: ['不限', '未融资', '天使轮', 'A轮', 'B轮', 'C轮', 'D轮及以上', '已上市', '不需要融资']
  },
]

const KEYWORDS = [
  {
    title: "开发语言",
    type: "languages",
    items: ['JavaScript', 'Java', 'PHP', 'Python', 'TypeScript', 'C/C++', 'Golang', '.NEt', 'Objective-C', 'Shell', 'Swift', 'Scala']
  },
  {
    title: "前端标准/规范",
    type: "standard",
    items: ['HTML5', 'CSS3', 'JSON', 'HTTP1.1', 'XML']
  },
  {
    title: "web前端框架",
    type: "framework",
    items: ['React', 'Node', 'Angular', 'ExtJS', 'YUI3', 'jQuery', 'BootStrap', 'Dojo', 'Polymer', 'Vue']
  },
  {
    title: "前端项目",
    type: "projects",
    items: ['小程序', '可视化', '电商', '手机游戏', '特效制作', '网页游戏']
  },
  {
    title: "前端常用库",
    type: "libraries",
    items: ['Sass', 'Less', 'TypeScript', 'jQuery', 'OpenGL', 'Lodash', 'CoffeeScript', 'Mock.js', 'Animate.css', 'Velocity.js']
  },
  {
    title: "前端常用引擎",
    type: "engine",
    items: ['Cocos', 'Egret', 'LayaBox']
  },
  {
    title: "推荐关键词",
    type: "recommend",
    items: ['代码风格', '打包配置', '代码提交', '发布流程', '组件化开发', '前端架构', '预处理器', 'NPM', '报表平台', 'Webpack', 'ES6', '拦截器']
  },
]

module.exports = {
  EXPECT_JOBS,
  FILTERS,
  KEYWORDS,
}
