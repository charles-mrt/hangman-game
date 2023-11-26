export const GameHeader = () => {
  return (
  <div className="w-full flex items-center justify-between text-base font-bold capitalize text-white">
    <div>
      pontuação: 
      <span className="text-indigo-500 pl-1">0</span>
    </div>

    <div>
      tentativas restantes: 
      <span className="text-indigo-500 pl-1">6</span>
    </div>
  </div>
  )
}