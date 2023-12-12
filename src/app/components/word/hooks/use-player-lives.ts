import { useState } from "react"

const PLAYER_LIFE: number = 6

export const usePlayerLives = () => {

  const [lives, setLives] = useState(PLAYER_LIFE)

  const handleLetterError = () => setLives(lives - 1)
  const handleResetLife = () => setLives(PLAYER_LIFE)
  
  return {
    handleLetterError,
    handleResetLife,
    lives
  }
}
