import { RefreshCw } from "lucide-react"


export const Header = () => {
  return (
    <div className="w-full h-14 bg-slate-950 border-b-2 border-indigo-500 flex items-center justify-between px-4">
      <h1 className="text-2xl font-bold text-indigo-500 capitalize">
        hand man game
      </h1>
      <button className="text-white hover:text-indigo-500"><RefreshCw /></button>
    </div>
  )
}