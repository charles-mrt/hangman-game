
interface GameHeaderProps {
  life: number
}
export const GameHeader = ({ life }: GameHeaderProps) => {

  return (
    <div className="w-full flex items-center justify-between text-base font-bold capitalize text-white">
      <div>
        pontuação:
        <span className="text-indigo-500 pl-1">0</span>
      </div>

      <div>
        tentativas restantes:
        <span className="text-indigo-500 pl-1">{life}</span>
      </div>
    </div>
  )
}