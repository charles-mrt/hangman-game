'use client'

import { useState, useEffect } from 'react'

import { useKeyContext } from '@/app/context/Key-provider'
import { usePlayerLives } from './hooks/use-player-lives'
import { useRandomWord } from './hooks/use-to-chose-word'

import { HighlightedLetter } from './Highlighted-letter'
import { GameHeader } from '../Game-header'
import { GallowsPole } from '../gallows/Gallows-pole'
import { Header } from '../Header'
import { Modal } from '../Modal'


export const WordField = () => {

  const getRandomWord = useRandomWord()

  const { clickedKey } = useKeyContext()

  const [word, setWord] = useState<string>('')
  const wordLetters = word.split("")
  const totalField = wordLetters.length

  const [revealedLetters, setRevealedLetters] = useState<string[]>([])
  const [isLetterExist, setIsLetterExist] = useState(true)
  const [isPlayerWins, setIsPlayerWins] = useState(false)
  const [clearHighLighted, setClearHightLighted] = useState(true)

  const { handleLetterError, handleResetLife, lives } = usePlayerLives()

  const chooseRandomLetters = () => {
    if (totalField >= 6 && revealedLetters.length === 0) {
      const randomIndexes: number[] = Array.from({ length: 3 }, () => Math.floor(Math.random() * totalField))
      setRevealedLetters(randomIndexes.map(index => wordLetters[index]))
    }
  }

  const handleKeyClick = () => {
    switch (true) {
      case clickedKey && wordLetters.includes(clickedKey) && !revealedLetters.includes(clickedKey):
        setRevealedLetters((prevLetters) => {

          const occurrencesInWord = wordLetters.filter(letter => letter === clickedKey)
          const updatedLetters = [...prevLetters, ...occurrencesInWord]

          if (wordLetters.every((letter) => updatedLetters.includes(letter))) {
            setIsPlayerWins(true)
          }

          return updatedLetters
        })
        setIsLetterExist(true)
        setClearHightLighted(false)
        break

      case clickedKey && !wordLetters.includes(clickedKey):
        setIsLetterExist(false)
        handleLetterError()
        setClearHightLighted(false)
        break

      default:
        break
    }
  }

  useEffect(() => {
    setWord(getRandomWord())
    chooseRandomLetters()
  }, [])

  useEffect(() => {
    handleKeyClick()
  }, [clickedKey])

  const handleRestartGame = () => {
    handleResetLife()
    setIsPlayerWins(false)
    setRevealedLetters([])
    setWord(getRandomWord())
    setClearHightLighted(true)
  }

  return (
    <>     
      {(isPlayerWins || lives === 0) &&       
          <Modal
            word={word}
            life={lives}
            onResetButton={handleRestartGame}
            isPlayerWins={isPlayerWins}
          />       
      }
      <Header onResetButton={handleRestartGame} />

      <div className="w-full h-auto px-5 flex flex-col justify-between">

        <div className="w-full flex flex-col justify-between gap-4">

          <GameHeader life={lives} />

          <div className="flex items-start justify-between">
            <GallowsPole life={lives} playerWins={isPlayerWins} />
            {!clearHighLighted && <HighlightedLetter letterExist={isLetterExist} />}
          </div>

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
                    <div className="h-8" />
                    <div className="w-8 h-[3px] bg-indigo-500" key={index} />
                  </>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </>
  )
}
