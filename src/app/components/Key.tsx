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
        onClick={() => (handleKeyClick(value))}
        value={value}
        className="
        text-white text-2xl font-bold uppercase 
        bg-indigo-500 rounded-md 
        w-12 h-12 md:w-8 md:h-8 2xl:w-14 2xl:h-14         
       hover:bg-indigo-400 flex items-center justify-center"
      >
        {value}
      </button>
    </>
  )
}