import { indexStore } from '~/store'

export const useScreen = () => {
  const mobile = () => indexStore().mobile

  return {
    mobile,
  }
}
