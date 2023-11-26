
interface KeyProps {
  value: string
}

export const Key = ({ value }: KeyProps) => {
  return (
    <>
      <button 
        value={value}
        className="text-white text-2xl font-bold bg-indigo-500 rounded-md w-12 h-12 uppercase hover:bg-indigo-400 flex items-center justify-center"
      >
        {value}
      </button>
    </>
  )
}