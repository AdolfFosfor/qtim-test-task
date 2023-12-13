import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }],
    },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['@/assets/font/stylesheet.css', '@/assets/base.scss'],

  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  plugins: ['@/plugins/layout'],

  runtimeConfig: {
    app: {
      backend: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/',
    },
  },
})
