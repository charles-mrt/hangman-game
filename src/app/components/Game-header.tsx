import { useEffect, useState } from "react"
import { useKeyContext } from "../context/Key-provider"
import { Modal } from "./Modal"

interface GameHeaderProps {
  isError: boolean
}

export const GameHeader = ({ isError }: GameHeaderProps) => {

  const { clickedKey } = useKeyContext()
  const [count, setCount] = useState(7)
  const [showModal, setShowModal] = useState(false)
  
  const handleRemainingAttempts = () => {
    if (!isError) {
      setCount(count - 1)
    }
    if (count <= 1) {
      setShowModal(true)
    }
  }
  useEffect(() => {
    handleRemainingAttempts()
  }, [clickedKey, isError])

  return (
    <>
      {showModal ? (
        <Modal modalType={true}/>
      ) : (
        <></>
      )}
      <div className="w-full flex items-center justify-between text-base font-bold capitalize text-white">
        <div>
          pontuação:
          <span className="text-indigo-500 pl-1">0</span>
        </div>

        <div>
          tentativas restantes:
          <span className="text-indigo-500 pl-1">{count}</span>
        </div>
      </div>
    </>

  )
}