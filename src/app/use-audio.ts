const gameAudio = {
  player_lose: '/assets/audio/player-lose.mp3',
  player_win: '/assets/audio/player-win.mp3',
  wrong_letter: '/assets/audio/wrong-letter.mp3',
  correct_letter: '/assets/audio/correct-letter.mp3',
  click: '/assets/audio/click.mp3',
}

localStorage.setItem('audio-actived', 'true')

export const useAudio = () => {

  const playAudio = (audio:string) => {
    if (localStorage.getItem('audio-actived') === 'true') new Audio(audio).play()
  }

  const playerLose = () => {
    playAudio(gameAudio.player_lose)
  }
  const playerWin = () => {
    playAudio(gameAudio.player_win)
  }

  const wrongLetter = () => {
    playAudio(gameAudio.wrong_letter)
  }

  const correctLetter = () => {
    playAudio(gameAudio.correct_letter)
  }

  const keyboardClick = () => {
    playAudio(gameAudio.click)
  }

  return {
    playerLose,
    playerWin,
    wrongLetter,
    correctLetter,
    keyboardClick
  }
}
