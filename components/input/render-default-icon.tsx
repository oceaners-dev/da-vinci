import React from 'react'

export const renderDefaultIcon = (children: JSX.Element) => {
  return (
    <div className={`flex items-center box-border justify-center w-fit  z-10`}>
      {children}
    </div>
  )
}
