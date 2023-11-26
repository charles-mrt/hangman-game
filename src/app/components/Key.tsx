'use client'

import { useKeyContext } from "../context/Key-provider"

interface KeyProps {
  value: string
}

export const Key = ({ value }: KeyProps) => {

  const { handleKeyClick } = useKeyContext()

  return (
    <>
      <button 
        onClick={()=>(handleKeyClick(value))}
        value={value}
        className="text-white text-2xl font-bold bg-indigo-500 rounded-md w-14 h-14 uppercase hover:bg-indigo-400 flex items-center justify-center"
      >
        {value}
      </button>
    </>
  )
}