

interface ModalProps {
  word: string
  life: number
  onResetButton: () => void
  isPlayerWins: boolean
}

export const Modal = ({ word, life, onResetButton, isPlayerWins }: ModalProps) => {
  const handleCloseModal = () => onResetButton()

  return (
    <div className="modal-animation fixed z-50 left-0 top-0 w-screen h-screen overflow-hidden">

      {isPlayerWins &&
        <div className="bg-green-500 bg-opacity-40 w-full h-full flex items-center justify-center" >

          <div className=" w-auto bg-amber-100 rounded-md border-4 border-gray-400 p-4 flex flex-col items-center justify-evenly gap-5 shadow-2xl">
            <span className="text-gray-500 text-2xl font-bold text-center">
              resposta: <span className="text-green-600">{word}</span>
            </span>
            <span className="text-gray-500 text-2xl font-bold text-center">
              Parabéns, você venceu!
            </span>
            <button
              className="bg-indigo-500 text-white p-4 text-2xl font-bold rounded-md"
              onClick={handleCloseModal}
            >
              Jogar novamente
            </button>

          </div>
        </div>
      }

      {life === 0 &&

        <div className="bg-red-500 bg-opacity-40 w-full h-full flex items-center justify-center " >

          <div className=" w-auto bg-amber-100 rounded-md border-4 border-gray-400 p-4 flex flex-col items-center justify-evenly gap-5 shadow-2xl">
            <span className="text-gray-500 text-2xl font-bold text-center">
              resposta: <span className="text-red-600">{word}</span>
            </span>
            <span className="text-gray-500 text-2xl font-bold text-center">
              Você perdeu, tente novamente!
            </span>
            <button
              className="bg-indigo-500 text-white p-4 text-2xl font-bold rounded-md"
              onClick={handleCloseModal}
            >
              Jogar novamente
            </button>

          </div>
        </div>
      }

    </div>
  )
}
