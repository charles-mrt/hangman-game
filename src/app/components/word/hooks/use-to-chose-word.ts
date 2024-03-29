
import { randomWords } from "../data"

let lastSelectedWord = ""

export const useRandomWord = () => {
  const getRandomWord = () => {
    let newWord = lastSelectedWord

    while (newWord === lastSelectedWord) {
      const randomIndex = Math.floor(Math.random() * randomWords.length)
      newWord = randomWords[randomIndex]
    }

    lastSelectedWord = newWord
    return newWord
  }

  return getRandomWord
}
