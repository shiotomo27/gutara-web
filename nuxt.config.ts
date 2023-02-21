// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css", "@/assets/styles/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      title: 'ぐうたらまにあ',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon//favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      },
    }
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
  typescript: {
      strict: true
  }
})
