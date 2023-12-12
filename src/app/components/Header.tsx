
import { Menu, RefreshCw } from 'lucide-react'

interface HeaderProps {
  onResetButton: () => void
}

export const Header = ({ onResetButton }: HeaderProps) => {
  return (
    <div className="w-full bg-slate-950 border-b-2 border-indigo-500 flex items-center justify-between px-4 py-2">
      
      <Menu className="text-white hover:text-indigo-500"/>
      <h1 className="text-2xl font-bold text-indigo-500 capitalize">
        hang man game
      </h1>
      <button
        onClick={onResetButton}
        className="text-white hover:text-indigo-500"
      >
        <RefreshCw />
      </button>
    </div>
  )
}
