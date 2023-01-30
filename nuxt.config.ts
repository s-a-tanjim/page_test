// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/page_test/',
    head: {
      charset: 'UTF-8',
      title: 'Test Page',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        {
          name: 'X-UA-Compatible',
          content: 'IE=edge'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Test Page | Tuttt tuttt'
        },
        {
          property: 'og:title',
          content: 'Test Page'
        },
        {
          property: 'og:description',
          content: 'Test Page | Tuttt tuttt'
        },
      ],
    }
  },
})
