module.exports = {
  name: "olu online",
  shortDesc:
    "An 11ty starter kit designed to help you add rich features to a site without a complicated build process.",
  url: "olu.online",
  authorEmail: "hello@olu.online",
  authorHandle: "@oluoluoxenfree",
  authorName: "olu",
  postsPerPage: 4,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "black",
    },
    secondary: {
      background: "black",
      text: "white",
      highlight: "white",
    },
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
