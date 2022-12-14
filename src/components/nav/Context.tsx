import React, { useState, createContext } from 'react'

const NavContext = createContext<{
  isExpanded?: boolean
  setIsExpanded: (isExpanded: boolean) => void
}>({
  isExpanded: true,
  setIsExpanded: () => {
    console.log()
  },
})

const NavProvider = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>()

  return (
    <NavContext.Provider
      value={{
        isExpanded,
        setIsExpanded,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export { NavContext, NavProvider }
