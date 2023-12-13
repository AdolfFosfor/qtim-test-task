import { storeToRefs } from 'pinia'
import { indexStore } from '~/store'

export default defineNuxtPlugin(() => {
  const { screen, screenScroll } = storeToRefs(indexStore())

  if (process.client) {
    const onResize = () => {
      screen.value = { width: window.innerWidth, height: window.innerHeight }
    }
    const onScroll = () => {
      screenScroll.value = window.scrollY
    }

    window.onresize = () => {
      onResize()
    }

    window.onscroll = () => {
      onScroll()
    }

    onResize()
    onScroll()
  }
})
