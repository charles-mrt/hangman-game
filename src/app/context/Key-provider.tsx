'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import { useAudio } from '../use-audio'

interface KeyContextProps {
  clickedKey: string
  handleKeyClick: (key: string) => void
}

const KeyContext = createContext<KeyContextProps | undefined>(undefined)

interface KeyProviderProps {
  children: ReactNode
}

export const KeyProvider = ({ children }: KeyProviderProps) => {

  const { keyboardClick } = useAudio() 

  const [clickedKey, setClickedKey] = useState("")

  const handleKeyClick = (key: string) => {
    setClickedKey(key)
    keyboardClick()
  }

  useEffect(() => {
    localStorage.setItem('is-audio-activated', 'true')
  }, [])

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
