
import { Menu, RefreshCw, Volume2, VolumeX, XCircle } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  onResetButton: () => void
}


export const Header = ({ onResetButton }: HeaderProps) => {

  const [isAudioActived, setIsAudioActived] = useState(false)

  const handePlayAudio = () => {
    setIsAudioActived(!isAudioActived)
    isAudioActived
      ? localStorage.setItem('audio-actived', 'true')
      : localStorage.setItem('audio-actived', 'false')
  }

  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const handleActivMenu = () => {
    setIsActiveMenu(!isActiveMenu)
  }
  return (
    <div className="w-full bg-slate-950 border-b-2 border-indigo-500 flex items-center justify-between px-4 py-2">

      <button
        onClick={handleActivMenu}
        className="flex items-center justify-center bg-transparent"
      >
        <Menu className="text-white hover:text-indigo-500" />
      </button>

      <h1 className="text-2xl font-bold text-indigo-500 capitalize">
        hang man game
      </h1>
      <button
        onClick={onResetButton}
        className="text-white hover:text-indigo-500"
      >
        <RefreshCw />
      </button>

      {isActiveMenu &&
        <div className="bg-black z-[9999] w-screen h-screen fixed top-0 left-0 flex flex-col items-center justify-center gap-2">

          <button
            onClick={handleActivMenu}
            className="w-10 h-10 absolute top-2 right-2 bg-transparent rounded-full flex items-center justify-center">
            <XCircle className="text-gray-700 w-10 h-10" />
          </button>

          <span className="text-white text-xl mb-2">configuracao de audio</span>
          {isAudioActived
            ? <button onClick={handePlayAudio} className="text-white flex gap-2 items-center justify-center bg-indigo-600 p-6 rounded-md w-3/4 text-xl font-bold">desativado <VolumeX /></button>
            : <button onClick={handePlayAudio} className="text-white flex gap-2 items-center justify-center bg-indigo-600 p-6 rounded-md w-3/4 text-xl font-bold">ativado <Volume2 /></button>
          }
        </div>}

    </div>
  )
}
