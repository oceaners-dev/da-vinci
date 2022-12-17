/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext } from 'react'
import { TabOption } from './Tabs'

type TabsContextType = {
  activeTab?: string
  setActiveTab: (label: string) => void
  tabs: TabOption[]
}

export const TabsContext = createContext<TabsContextType>({
  activeTab: undefined,
  setActiveTab: () => {},
  tabs: [],
})

export const TabsProvider: React.FC<{
  children: React.ReactNode
  tabs: TabOption[]
}> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState('')

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, tabs }}>
      {children}
    </TabsContext.Provider>
  )
}
