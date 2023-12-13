import { defineStore } from 'pinia'

interface Link {
  name: string
  link: string
}

export const indexStore = defineStore('index', {
  state: () => ({
    footerLinks: [
      { name: 'Facebook', link: '' },
      { name: 'Instagram', link: '' },
      { name: 'Telegram', link: '' },
      { name: 'Behance', link: '' },
      { name: 'LinkedIn', link: '' },
      { name: 'Privacy Policy', link: '' },
    ] as Link[],

    screen: {
      width: 0 as number,
      height: 0 as number,
    },
    screenScroll: 0 as number,
  }),
  getters: {},
  actions: {},
})
