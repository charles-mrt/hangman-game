'use client'
import { useState, useEffect } from 'react'
import { useKeyContext } from "@/app/context/Key-provider"

interface WordFieldProps {
  totalField: number
}
const word = "caminhar"

export const WordField = ({ totalField }: WordFieldProps) => {
  const wordLetters = word.split("")
  const { clickedKey } = useKeyContext()
  const [revealedLetters, setRevealedLetters] = useState<string[]>([])

  useEffect(() => {
  
    if (wordLetters.includes(clickedKey) && !revealedLetters.includes(clickedKey)) {
      setRevealedLetters((prevLetters) => [...prevLetters, clickedKey])
    }
  }, [clickedKey, revealedLetters, wordLetters])

  return (
    <div className="flex flex-wrap gap-2 justify-center">

      {wordLetters.map((letter, index) => (

        <div className="flex flex-col items-center justify-end" key={index}>

          {revealedLetters.includes(letter) ? (
            <>
              <span className="text-2xl leading-6 font-bold uppercase text-white">
                {letter}
              </span>
              <div className="w-8 h-[3px] bg-indigo-500" />
            </>
          ) : (
            <>
              <div className="w-8 h-[3px] bg-indigo-500" />
            </>
          )}

        </div>
      ))}
      
    </div>
  )
}
