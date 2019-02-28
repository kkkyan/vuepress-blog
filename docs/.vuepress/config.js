const path = require('path')

module.exports = {
  title: 'GeWu',

  description: '',

  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },

  theme: path.resolve(__dirname, '../../lib'),

  themeConfig: {
    // lang: require(path.resolve(__dirname, '../../lib/langs/en-US')),
    lang: require(path.resolve(__dirname, '../../lib/langs/zh-CN')),

    personalInfo: {
      nickname: 'kky',
      description: '鸽呜咕',
      email: 'main@kkyan.cn',
      // location: 'Xi\'an City, China',
      // organization: 'Xi\'an Jiao Tong University',

      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',

      sns: {
        github: {
          account: 'kkkyan',
          link: 'https://github.com/kkkyan',
        },
        // facebook: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.facebook.com/meteorlxy.cn',
        // },
        // linkedin: {
        //   account: 'meteorlxy',
        //   link: 'http://www.linkedin.com/in/meteorlxy',
        // },
        // twitter: {
        //   account: 'meteorlxy_cn',
        //   link: 'https://twitter.com/meteorlxy_cn',
        // },
        // weibo: {
        //   account: '@焦炭君_Meteor',
        //   link: 'https://weibo.com/u/2039655434',
        // },
        // zhihu: {
        //   account: 'meteorlxy.cn',
        //   link: 'https://www.zhihu.com/people/meteorlxy.cn',
        // },
        // douban: {
        //   account: '159342708',
        //   link: 'https://www.douban.com/people/159342708',
        // },
      },
    },

    headerBackground: {
      // url: '/assets/img/bg.jpg',

      useGeo: true,
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'More Pages', link: '/more-pages/', exact: false },
      // { text: 'Github', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy' },
    ],

    comments: false,
  },
}
