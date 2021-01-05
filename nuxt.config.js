import { NavbarPlugin } from "bootstrap-vue";
import axios from 'axios';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Datacappy VPN & Browser",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The ultimate combination of security tools to keep your online activity anonymous and encrypted."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/styles/custom.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [    
    { src: "./plugins/google-analytics.js", mode: "client" },
    { src: "./plugins/vue-paginate.js", ssr: true},
    ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "bootstrap-vue/nuxt",
      {
        icons: true
      }
    ],
    ["@nuxtjs/robots", { UserAgent: "*", Disallow: "/wordpress" }]
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  componentPlugins: [
    'NavbarPlugin',
    'NavPlugin',
    'ButtonPlugin',
    'AlertPlugin',
    'LayoutPlugin',
    'CardPlugin'
  ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      compact: true
    },
    //debugging nuxt with VS
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  generate: {
    routes() {
      return axios.get('https://wp.dsdefender.com/wp-json/wp/v2/posts').then(res => {
        return res.data.map(post => {
          return '/articles/' + post.slug
        })
      })
    }
  }

};
