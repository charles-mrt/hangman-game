
interface WordFieldProps {
  totalField: number
}
export const WordField = ({ totalField }: WordFieldProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {Array.from({ length: totalField }).map((_, index) => (
        <div className="flex flex-col items-center">
          <span className="text-2xl leading-6 font-bold uppercase text-white">a</span>
          <div key={index} className="w-8 h-[3px] bg-indigo-500" />
        </div>
      ))}
    </div>
  )
}