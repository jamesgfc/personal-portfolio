module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "James Wright | User interface specialist | Web developer",
    meta: [
      { charset: "utf-8" },
      { "http-equiv": "cleartype", content: "on" },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
      { name: "author", content: "James Wright" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Portfolio of James Wright, web developer and user interface specialist.  Contract, permanent and freelance web development"
      },
      {
        name: "keywords",
        content: "James Wright, User interface specialist, web developer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Raleway:400"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    babel: {
      plugins: ["transform-decorators-legacy", "transform-class-properties"]
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  css: [
    "@/node_modules/normalize.css/normalize.css",
    "@/node_modules/vue2-animate/dist/vue2-animate.min.css",
    '@fortawesome/fontawesome-svg-core/styles.css',
    "~/scss/main.scss"
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vue2-filters.js',
    '~/plugins/date-format.js',
    '~/plugins/focus-lock.js',
  ]
};
