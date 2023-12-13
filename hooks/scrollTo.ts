export const scrollTo = (type: 'element' | 'position', to: string, block: ScrollLogicalPosition) => {
  if (type === 'element') return document.getElementById(to)?.scrollIntoView({ behavior: 'smooth', block })
  window.scrollTo({ top: +to })
}
