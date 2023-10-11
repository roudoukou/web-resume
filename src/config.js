export default {
  // page1部分
  page1: {
    titleEn: 'Hello,I`m XiaLonggui', //英文标题
    title: '一个追梦在前端路上的小白', //中文标题
  },
  // page2部分
  page2: {
    authorImg: 'page1.jpg', // 作者头像
    xinhui: '我叫夏珑桂，是一名在读的大四学生。', // 幸会
    qiuzhi: '前端开发', // 求职意向
    guanyuwo: '掌握了前端js、html、css、Nodejs、Vue全家桶、uniapp框架和React框架等等，希望可以和大家一起学习，共同进步！' // 关于我
  },
  // page3部分
  page3: [{
    icon: 'icon-tubiao-',
    title: '后端',
    msg: ['Spring后台开发']
  },{
    icon: 'icon-diannao', // 图标
    title: '网页制作', // 标题
    msg: ['响应式页面', 'css、scss动画效果',] //介绍
  }, {
    icon: 'icon-qianbi1',
    title: '前端功能',
    msg: ['JS完成常见的交互功能', '用AJAX读取后台数据且渲染']
  },  {
    icon: 'icon-shouji',
    title: '框架',
    msg: ['vue框架','React框架']
  }],
  // page4部分
  page4: {
    // 我的历程
    course: [{
      date: '2023/9——至今', // 时间
      desc: { // 经历
        title: '青软基地实训',
        list: ['校级二等奖学金', '学习React...']
      }
    }, {
      date: '2020/9——2024/7',
      desc: {
        title: '吉首大学张家界学院',
        list: ['真知实践社团', '蓝桥杯校赛一等奖', '蓝桥杯省赛三等奖','软件设计师','网页设计大赛校赛二等奖','中国大学生计算机设计大赛中南地区赛三等奖']
      }
    }],
    // 我的拓展技能掌握
    singlelist: [{
      title: 'bootsrap',
      text: '了解'
    }, {
      title: 'Element-ui',
      text: '掌握'
    }, {
      title: 'uview',
      text: '掌握'
    }, {
      title: 'scss',
      text: '掌握'
    }],
    // 我的基本技能掌握
    proresslist: [{
      title: 'HTML、CSS、SCSS',
      value: '90%'
    }, {
      title: 'JS、JQ',
      value: '90%'
    }, {
      title: 'Vue',
      value: '90%'
    }, {
      title: 'React',
      value: '30%'
    }, {
      title: 'NodeJs',
      value: '80%'
    }, {
      title: 'mysql',
      value: '80%'
    }]
  },
  // page5部分
  page5: [{
    title: '肉豆蔻吖',
    content: '自己用来记录bug的博客~',
    image: 'box1.png',
    href: 'https://xiamu.icu/'
  }, {
    title: '学成在线项目',
    content: 'SpringBoot, Vue开发的在线教育项目',
    image: 'box3.jpg',
    href: 'https://github.com/roudoukou/xuecheng-plus-project'
  }, {
    title: '智慧美食向导',
    content: 'uniapp开发的微信小程序',
    image: 'box5.jpg',
    href: 'https://cdn.xiamu.icu/foodApplets.jpg'
  }],
  // page6部分
  page6: {
    github: 'https://github.com/roudoukou',
    bili: '',
    email: 'Mailto:1023876294@qq.com?Subject=邮箱标题&Body=邮箱内容！',
    zhihu: '',
    weixin: "<img style='width:120px' src='https://xiamu.icu/img/qrcode.png' alt='加载失败'>",
    qq: "<img style='width:120px' src='https://xiamu.icu/img/qqcode.png' alt='加载失败'>"
  }
}
