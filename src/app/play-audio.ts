
export const playAudio = () => {
  const audioSrc = '/assets/audio/player-lose.mp3'
  const audio = new Audio(audioSrc)
  audio.play()
}