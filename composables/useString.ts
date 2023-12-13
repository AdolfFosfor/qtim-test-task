export const useString = () => {
  const kebabCase = (string: string) => string.toLowerCase().trim().replaceAll(' ', '-')

  const formatAddress = (string: string) => `${string.slice(0, 6)}...${string.slice(-4)}`

  const hardLower = (string: string) => string.toLowerCase().replaceAll(' ', '')

  return {
    kebabCase,
    formatAddress,
    hardLower,
  }
}
