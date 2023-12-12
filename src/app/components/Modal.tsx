
import { useState } from "react"

interface ModalProps {
  word: string
  life: number
  onResetButton: () => void
  isPlayerWins: boolean
}

export const Modal = ({ word, life, onResetButton, isPlayerWins }: ModalProps) => {

  const [showModal, setShowModal] = useState(true)

  const handleCloseModal = () => {
    onResetButton()
    setShowModal(false)
    resetModalState()
  }

  const resetModalState = () => {
    if (life === 0 || isPlayerWins) setShowModal(true)
  }

  return (
    <>
      {showModal && (isPlayerWins || life !== 0) && (
        
        <div className=" fixed z-50 left-0 top-0 w-screen h-screen ">

          <div className={`
              ${isPlayerWins ? 'bg-green-500' : 'bg-red-500'} 
              bg-opacity-40  
              w-full 
              h-full  
              flex              
              items-center 
              justify-center                                                       
            `}>

            <div className=" w-11/12 bg-amber-100 rounded-md border-4 border-gray-400 p-4 flex flex-col items-center justify-evenly gap-5 shadow-2xl">
            <span className="text-gray-500 text-2xl font-bold text-center">
              resposta: <span className="underline">{word}</span>
            </span>
              <span className="text-gray-500 text-2xl font-bold text-center">
                {
                  isPlayerWins
                    ? "Parabéns, você venceu!"
                    : "Você perdeu, tente novamente!"
                }
              </span>

              <button
                className="bg-indigo-500 text-white p-4 text-2xl font-bold rounded-md"
                onClick={handleCloseModal}
              >
                Jogar novamente
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  )
}
