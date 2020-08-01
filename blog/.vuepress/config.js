const path = require("path");
module.exports = (options, context, api) => {
  return {
    title: "Harry Zuo's 碎碎念",
    description: "Share And Love",
    theme: "@vuepress/blog",
    themeConfig: {
      directories: [
        {
          id: "zh",
          dirname: "_zh",
          title: "碎碎念",
          path: "/zh/",
          itemPermalink: "/zh/:year/:month/:day/:slug",
        },
        {
          id: "en",
          dirname: "_en",
          title: "Post",
          path: "/en/",
          itemPermalink: "/en/:year/:month/:day/:slug",
        },
        /* {
          id: "tag",
          dirname: "_tag",
          title: "",
          path: "/tag/",
          itemPermalink: "/tag/:year/:month/:day/:slug",
        }, */
      ],
      nav: [
        {
          text: "碎碎念",
          link: "/zh/",
        },
        /* {
          text: "Blog",
          link: "/en/",
        },
        */
        {
          text: "Tags",
          link: "/tag/",
        }, 
        {
          text: "Github",
          link: "https://github.com/zuohuaiyu",
        },
      ],
      footer: {
        contact: [
          {
            type: "github",
            link: "https://github.com/zuohuaiyu",
          },
          {
            type: "mail",
            link: "mailto:huaiyu.zuo@foxmail.com",
          },
        ],
        copyright: [
          {
            text: "Powered by VuePress | Huaiyu Zuo © 1996-present",
            link: "https://vuepress.vuejs.org",
          },
        ],
      },
      smoothScroll: true,
    },
    alias: {
      "@assets": path.resolve(__dirname, "../assets"),
    },
  };
};
