import create from 'zustand'

const navigationStore = create<{
  isExpanded: boolean
  // eslint-disable-next-line func-call-spacing
  setIsExpanded: (isExpanded: boolean) => void
}>((set) => ({
  isExpanded: true,
  setIsExpanded: (isExpanded: boolean) => set({ isExpanded }),
}))

export { navigationStore }
