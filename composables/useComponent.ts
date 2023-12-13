export const useComponent = () => {
  const getName = () => getCurrentInstance()?.type.__name?.toLowerCase()

  return {
    getName,
  }
}
