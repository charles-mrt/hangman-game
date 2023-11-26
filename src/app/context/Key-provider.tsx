'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

interface KeyContextProps {
  clickedKey: string
  handleKeyClick: (key: string) => void
}

const KeyContext = createContext<KeyContextProps | undefined>(undefined)

interface KeyProviderProps {
  children: ReactNode
}

export const KeyProvider = ({ children }: KeyProviderProps) => {
  const [clickedKey, setClickedKey] = useState("")

  const handleKeyClick = (key: string) => {
    setClickedKey(key)
  }

  return (
    <KeyContext.Provider value={{ clickedKey, handleKeyClick }}>
      {children}
    </KeyContext.Provider>
  )
}

export const useKeyContext = () => {
  const context = useContext(KeyContext)
  if (!context) {
    throw new Error('useKeyContext must be used within a KeyProvider')
  }
  return context
}
