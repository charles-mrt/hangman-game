
interface HighlightedLetterProps {
  letterExist: boolean
  letterSelected: string
}

export const HighlightedLetter = ({ letterExist, letterSelected }: HighlightedLetterProps) => {
 
  return (
  <>
    {letterSelected === '' ? (
      <></>
    ) : (

    <div className={`
     ${!letterExist ? 'bg-red-500' : 'bg-green-400'}
     right-1
     w-12 h-12  
     rounded-md
     text-white 
     text-2xl 
     uppercase 
     font-bold 
     flex 
     items-center 
     justify-center 
     transition-all`}
      >
        {letterSelected}
      </div>
    )}
  </>
  )
}